"use strict";function sbp_enable_background_updates(e){jQuery(this).attr("disabled"),jQuery("#sbp-enable-background-updates a.button").addClass("disabled"),jQuery("#sbp-enable-background-updates .dismiss-this").addClass("disabled"),jQuery(".wrap").prepend('<div class="secning-loading-popup"><p>Please wait<span class="spinner is-active"></span></p></div>'),jQuery(".secnin-loading-popup").toggle();var a=jQuery("#sbp-enable-background-updates-nonce").val();jQuery.ajax({type:"POST",url:ajaxurl,data:{action:"sbp_enable_background_updates",nonce:a},success:function e(a){location.reload()},error:function e(a,o,r){console.log(a.statusText),console.log(o),console.log(r)}})}function seobooster_freemius_opt_in(e){var a=jQuery("#seobooster-freemius-opt-nonce").val(),o=jQuery(e).data("opt");jQuery.ajax({type:"POST",url:ajaxurl,async:!0,data:{action:"seobooster_freemius_opt_in",opt_nonce:a,choice:o},success:function e(a){location.reload()},error:function e(a,o,r){console.log(a.statusText),console.log(o),console.log(r)}})}jQuery(document).on("click",(function(){jQuery(".sugglist").hide()})),jQuery(document).ready((function(){jQuery("a.quickhelp").attr("title","You have to allow Helpscout beacon to load to get help."),jQuery(".sbp-dismiss-review-notice, .sbp-review-notice .notice-dismiss").on("click",(function(){jQuery(this).hasClass("sbp-reviewlink")||event.preventDefault(),jQuery.post(sbbeacondata.ajaxurl,{action:"sbp_dismiss_review",nonce:sbbeacondata.nonce}),jQuery(".sbp-review-notice").slideUp().remove()})),jQuery(".suggtitle").click((function(e){e.stopPropagation();var a=jQuery(this).parent().find(".sugglist");jQuery(".suggcont .suggestions .sugglist").not(a).hide(),a.slideToggle()})),jQuery(".suggtitle").on("click",(function(e){e.stopPropagation()})),jQuery("#sb2_autolink_add").submit((function(e){e.preventDefault(),jQuery("#sb2_autolink_add #submit").prop("disabled",!0),jQuery(".kwaddspinner").show(),jQuery("#sb2_autolink_add form #newkeyword").removeClass("hasError").prop("disabled",!0),jQuery("#sb2_autolink_add form #targeturl").removeClass("hasError").prop("disabled",!0),jQuery.post(sbbeacondata.ajaxurl,{dataType:"json",action:"ajax_add_keyword","add-keyword-nonce":jQuery("#_ajax_sb2_add_keyword_nonce").val(),newkeyword:jQuery("#sb2_autolink_add form #newkeyword").val(),targeturl:jQuery("#sb2_autolink_add form #targeturl").val()},(function(e){jQuery("#sb2_autolink_add #submit").prop("disabled",!1),jQuery(".kwaddspinner").hide(),jQuery("#addkwresponse").html(e.answer),e.newrow&&jQuery(e.newrow).appendTo(jQuery(".seo-booster_page_sb2_autolink #urls-filter .wp-list-table")),e.success&&(jQuery("#sb2_autolink_add_form #newkeyword").prop("disabled",!1).val(""),jQuery("#sb2_autolink_add_form #targeturl").prop("disabled",!1).val("")),"malurl"===e.error&&(jQuery("#addkwresponse").addClass("hasError"),jQuery("#sb2_autolink_add form #targeturl").addClass("hasError").prop("disabled",!1),jQuery("#sb2_autolink_add form #newkeyword").prop("disabled",!1)),"kwused"===e.error&&(jQuery("#addkwresponse").addClass("hasError"),jQuery("#sb2_autolink_add form #newkeyword").addClass("hasError").prop("disabled",!1).focus(),jQuery("#sb2_autolink_add form #targeturl").prop("disabled",!1))}))})),jQuery("#seobooster_dynamic_tagging").on("click",(function(){jQuery(this).prop("checked")?jQuery(".taggingrelated").each((function(e,a){jQuery(a).removeClass("muted")})):jQuery(".taggingrelated").each((function(e,a){jQuery(a).addClass("muted")}))})),jQuery("img.lazy").lazyload()}));