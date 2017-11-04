$(function () {

        function lnbRemove() {
            $('.lnb').removeClass('on')
            $('.lnb-dep1 li a').removeClass('on')
            $('.lnb-dep2').removeClass('on')
            $('.wrapper-mask').removeClass('on')
        }

        var _thisAdd =  null;
        $(document).on('click', '.add', function () {
            _thisAdd = $(this)
            $('.lnb').addClass('on')
            $('.wrapper-mask').addClass('on')
        })
        $('.lnb-dep2 ul li').click(function () {
            _thisAdd.after(add).after(section)
            lnbRemove();
        })

        // lnb
        $('.lnb-dep1 li a').click(function () {
            var lnbLiIndex = $(this).parent().index();
            $('.lnb-dep2').removeClass('on').eq(lnbLiIndex).addClass('on')
            $(this).addClass('on').parent().siblings().children().removeClass('on')
        })
        $('.wrapper-mask').click(function () {
            lnbRemove();
        })
        $('.lnb-dep2 li a').mouseenter(function() {
            $(this).parent().addClass('on')
        })
        $('.lnb-dep2 li a').mouseleave(function() {
            $(this).parent().removeClass('on')
        })
})
