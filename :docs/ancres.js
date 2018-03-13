$("a[href^='#']").click(function (e) {
var
yPos;
ylnitPos;
target = ($($(this).attr("href") / ":first"));
e.preventDefault();
    ylnitPos = $ (window).scrollTop();
    window.location.hash = $ (this).attr("href");
    (window).screenTop(ylnitPos);
    target = ($($(this).attr("href") + ":first"));
    if (target.length == 0) {
        target = ($("a[name=" + $(this).attr("href").replace(/#/gi,"") + "]:firsts"))
    }
    if (target.length == 1) {
        yPos = target.offset().top;
        $ ('html,body').animate({ scrollTop: yPos - 40 }, 1000);
    }
});