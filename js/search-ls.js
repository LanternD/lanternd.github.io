import 'jquery';
import 'bootstrap';

class SearchEngine
{
  constructor() {
    this.initConfig();
    this.handleBehavior();
    this.handleSearch();
  }

  initConfig() {
        this.isModalOpened = false; // Set Modal Closed as default
      }

      handleBehavior() {
       this.handleInputBoxInSearchPage();
       this.handleSearchModal();
       this.handleAboutPageByDevice();
       this.handleMobileSearchNavbar();
     }

    // =========================HandleBehavior Start=========================
    handleInputBoxInSearchPage() {
      $('.ls-search-page-input').focus();
    }

    handleSearchModal() {
      $('#search-modal').on('shown.bs.modal', function (e) {
        this.isModalOpened = true;
        $('.form-control').focus();
      })

      $('#search-modal').on('hidden.bs.modal', function (e) {
        this.isModalOpened = false;
      })

      $(document).on('keyup', function(e) {
        let tag = e.target.tagName.toLowerCase();
        if (
          e.which === 83 
          && tag != 'input'
          && (! this.isModalOpened)
          ) 
        {
          $('#search-modal').modal('show');
        }
      });
    }

    handleAboutPageByDevice() {
        // Add stylesheet to about page according to window width
        if ($(window).width() >= 768) {
          $('#ls-about-dl').addClass('ls-about-dl');
        }
      }

      handleMobileSearchNavbar() {
        // Show Search Navbar on Mobile when search button hit
        $('#ls-show-search-nav-button').click(function() {
          $('#ls-nav-default').addClass('ls-hide-nav');
          $('#ls-nav-search').removeClass('ls-hide-nav');

          $('.ls-nav-search-input').focus();

        });

        // Hide Search Navbar on Mobile when hide-search-button hit 
        $('#ls-hide-search-button').click(function() {
          $('#ls-nav-default').removeClass('ls-hide-nav');
          $('#ls-nav-search').addClass('ls-hide-nav');

          $('.ls-nav-search-well').hide();
        });
      }
    // =========================HandleBehavior End=========================

    handleSearch() {
      let _this = this;
        // Dispaly Modal Search Result
        $('.ls-modal-search-input').bind('input propertychange', function() {
          _this.generateSearchResult($(this), 'h4', function(display) {
            $('.media-body').empty().html(display);
          });
        });

        // Display Search-Page Search Result
        $('.ls-search-page-input').bind('input propertychange', function() {
          _this.generateSearchResult($(this), 'h4', function(display) {
            $('.media-body').empty().html(display);
          });
        });

        // Display Navbar Search Result
        $('.ls-nav-search-input').bind('input propertychange', function() {
          _this.generateSearchResult($(this), 'h4', function(display) {
            $('.ls-nav-search-data').empty().html(display);
          });

          if ($(this).val() != '') {
            $('.ls-nav-search-well').show();
          }
        });
      }

      generateSearchResult(inputObject, wrapper, additional) {
        let selectedArticles = [];
        let keyword = inputObject.val().trim().toLowerCase();
        let _this = this;

        $.ajax({
          url: '/search.json',
          dataType: 'json',
        })
        .done(function(articles) {
          let display = '',
          selectedTitle = [],
          titlefullMatchScore = 7,
          contentfullMatchScore = 3,
          titleFussySearchableScore = 4,
          contentFussySearchableScore = 1;

          articles = articles.map(function(article) {
            let titleFussyCount = 0,
            contentFussyCount = 0,
            title = article.title.toLowerCase(),
            content = article.content.toLowerCase();

            if (title.includes(keyword)) { article.score += titlefullMatchScore; }

            if (content.includes(keyword)) { article.score += contentfullMatchScore; }

            for (let charIndex = 0; charIndex < keyword.length; charIndex++) {
              let titlePosition = title.indexOf(keyword[charIndex]),
              contentPosition = content.indexOf(keyword[charIndex]);
              if (titlePosition >= 0) {
                titleFussyCount++;
                title = title.substr(titlePosition + 1);
              }

              if (contentPosition >= 0) {
                contentFussyCount++;
                content = content.substr(contentPosition + 1);
              }
            }

            if (titleFussyCount == keyword.length) { article.score += titleFussySearchableScore }

              if (contentFussyCount == keyword.length) { article.score += contentFussySearchableScore }

                return article;

            });

          articles = articles.filter(function(article) {
            return article.score > 0;
          })

          articles = articles.sort(function(preArticle, nextArticle) {
            return nextArticle.score - preArticle.score;
          })

          display = _this.generateDisplay(articles, wrapper);

          additional(display);
        });
      }

      generateDisplay(selectedArticles, wrapper) {
        let index = 0,
        display = '',
        selectedArticle = '';
        if (selectedArticles.length > 0) {
          for (index in selectedArticles) {
            selectedArticle = selectedArticles[index];
            display += '<${wrapper} class="media-heading"><h4><a href="${selectedArticle.url}" target="_blank">${selectedArticle.title}</a></${wrapper}><hr>';
          }
        } else {
          display = '<${wrapper} class="text-center">糟糕，没有找到搜索结果</${wrapper}><br>';
        }

        return display;
      }

    }

    (new SearchEngine);