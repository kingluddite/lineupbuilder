Template.tListSubs.rendered = function() {
  $(".subs li").draggable({
    appendTo: "body",
    helper: "clone"
  });
};
