$(document).ready(function() {

	//fetching url and checking if it is single article or not
    $(location).attr('href');

	//pure javascript
	var pathnam = window.location;
  var url = pathnam.toString();

    var singleMediumArticle = new RegExp('[a-z0-9://.-]*#.*');

    if(singleMediumArticle.test(url))
    {

      $test = $('.u-textColorDark').removeClass('u-textColorDark');

      $test1 = $('.u-textColorDarkest').removeClass('u-textColorDarkest');

      $test2 = $('.u-textColorNormal').removeClass('u-textColorNormal');

      $time = $('time').removeClass('u-textColorNormal');

      //main bg
      $('.postArticle').css('background', '#333');
      $('.graf--h2, .graf--h3, .graf--h4, h2, h3').css('color', '#f5f5f5');
      $('.graf--kicker, .graf--subtitle').css('color', '#b5b5b5');
      $('.graf--pullquote').css('color', '#fff');
      $('body.is-withMagicUnderlines .postArticle.is-withAccentColors .markup--quote.is-other, body.is-withMagicUnderlines .postArticle.is-withAccentColors .markup--quote.is-targeted').css('background-color', 'rgb(255, 228, 37)');
      $('.tags--borderless .tag-button, .tags--borderless>.button, .tags--borderless>a').css({'border': 'none', 'color':'rgba(255, 255, 255, 0.6)','background':'rgba(0,0,0,.05)'});
      $('.u-textColorDark').css({'color': '#f5f5f5', 'fill':'#f5f5f5'});
      $('.link--primary, .link--darker, .graf--sectionCaption, .imageCaption').css({'color': '#f5f5f5', 'text-decoration':'none'});
      $('.button--chromeless, .button--link').css({'color': 'rgba(255, 255, 255, 0.44)'});
      $('.button--dark .svgIcon').css({'fill': 'rgba(255, 255, 255, 0.6)'});
      $('.u-textColorNormal').css({'fill': 'rgba(255, 255, 255, 0.44)', 'fill': 'rgba(255, 255, 255, 0.44)'});
      $('.postMetaInline').css({'color': 'rgba(255, 255, 255, 0.44)', 'fill': 'rgba(255, 255, 255, 0.44)'});
      $('.u-backgroundGrayLightest').css({'background': '#333'});
      $('.u-backgroundWhite').css({'background': '#292929'});
      $('.cardChromeless').css({'background': '#565656'});
      $('.u-accentColor--textNormal').css({'color': '#e8e8e8'});
      $('.tags--postTags .tags-input.editable .defaultValue').css({'color': 'rgba(255, 255, 255, 0.44)'});
      $('.u-accentColor--buttonNormal').css({'color': '#f9f9f9', 'border-color':'#e0e0e0'});
      $('.button').css({'color': 'rgba(251, 251, 251, 0.44)', 'background':'rgba(0,0,0,0)'});
      $('.popover-inner ').css({'background':'#333'});
      $('.popover-inner, .popover-arrow:after').css({'background':'#353535'});
      $('body').css('color', '#f5f5f5');

    }
    else {

    }
});
//
// function  updateStyle(){
//   $('.popover-inner a').css('color','#333');
//   alert('t');
// }
//
// $('.popover-inner').bind("DOMSubtreeModified", updateStyle);
