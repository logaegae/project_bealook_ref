var lnbLeft = `
<div class="lnb lnb-left">
    <ul class="lnb-dep1">
        <li><a href="#none" class="btn-typo on"><span class="txt">제목</span></a></li>
        <li><a href="#none" class="btn-typo"><span class="txt">본문</span></a></li>
        <li><a href="#none" class="btn-list"><span class="txt">리스트</span></a></li>
        <li><a href="#none" class="btn-grid"><span class="txt">그리드</span></a></li>
        <li><a href="#none" class="btn-img"><span class="txt">이미지</span></a></li>
        <li><a href="#none" class="btn-video"><span class="txt">비디오</span></a></li>
        <li><a href="#none" class="btn-map"><span class="txt">지도</span></a></li>
        <li><a href="#none" class="btn-attach"><span class="txt">첨부파일</span></a></li>
        <li><a href="#none" class="btn-hr"><span class="txt">구분선</span></a></li>
    </ul>
</div>
`;

var lnbTop = `
<div class="lnb lnb-top">
    <div class="lnb-dep1">
        <ul>
            <li><a href="#none" class="btn-title on"><span class="txt">제목</span></a></li>
            <li><a href="#none" class="btn-text"><span class="txt">본문</span></a></li>
            <li><a href="#none" class="btn-list"><span class="txt">리스트</span></a></li>
            <li><a href="#none" class="btn-grid"><span class="txt">그리드</span></a></li>
            <li><a href="#none" class="btn-img"><span class="txt">이미지</span></a></li>
            <li><a href="#none" class="btn-video"><span class="txt">비디오</span></a></li>
            <li><a href="#none" class="btn-map"><span class="txt">지도</span></a></li>
            <li><a href="#none" class="btn-attach"><span class="txt">첨부파일</span></a></li>
            <li><a href="#none" class="btn-hr"><span class="txt">구분선</span></a></li>
        </ul>
    </div>
    <div class="lnb-dep2 dep2-title">
        <ul>
            <li></li>
        </ul>
    </div>
</div>
`;

var add = `
<div class="add">
    <button type="button" class="btn-add-section"></button>
    <p>여기에 원하는 레이아웃을 추가해 보세요&nbsp;&nbsp;&nbsp;<span>+</span></p>
</div>
`;

var edit = `
<div class="edit">
    <button type="button" class="btn-edit">EDIT</button>
    <div class="options">
        <ul>
            <li>
                <p class="label-dep1">좌우 너비</p>
                <div class="value">
                    <button type="button" class="btn-width">Full</button>
                </div>
            </li>
            <li>
                <p class="label-dep1">상하 여백</p>
                <div class="value">
                    <div class="value-rows">
                        <span class="label-dep2">상</span>
                        <div id="slider-01">
                            <div id="handle-01" class="ui-slider-handle custom-handle"></div>
                        </div>
                    </div>
                    <div class="value-rows">
                        <span class="label-dep2">하</span>
                        <div id="slider-02">
                            <div id="handle-02" class="ui-slider-handle custom-handle"></div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <p class="label-dep1">타이틀 스타일</p>
                <div class="value">
                    <button type="button" class="btn-title-change">변경하기</button>
                </div>
            </li>
        </ul>
    </div>
</div>
`;

var wrapperMask = `
<div class="wrapper-mask"></div>
`;

$(function() {
    // $("body").prepend(lnbLeft);
    $("body").prepend(lnbTop);
    $(".wrapper").prepend(wrapperMask);
    $(".section").after(add);
    $(".section").eq(0).before(add);
    $(".con-box").after(edit);

    $('.section').mouseenter(function () {
        $(this).addClass('on')
    })
    $('.section').mouseleave(function () {
        $(this).removeClass('on')
    })
    $('.btn-width').click(function () {
        $(this).closest('.section').toggleClass('w-full')
    })
    $('.btn-edit').click(function () {
        $(this).parent().toggleClass('on')
    })
    $('.add').mouseenter(function () {
        $(this).addClass('on')
        $(this).find('button').animate({'left':'-40px'},100)
    })
    $('.add').mouseleave(function () {
        $(this).removeClass('on')
        $(this).find('button').animate({'left':'-58px'},100)
    })
    $('.add').click(function () {
        $('.lnb').addClass('on')
        $('.wrapper-mask').addClass('on')
    })

    $('.lnb-dep1 li a').click(function () {
        $('.lnb-dep2').addClass('on')
        $(this).addClass('on').parent().siblings().children().removeClass('on')
    })
    $('.wrapper-mask').click(function () {
        $('.lnb').removeClass('on')
        $('.wrapper-mask').removeClass('on')
    })
    $('.btn-title-change').click(function () {
        $('.lnb').addClass('on')
        $('.wrapper-mask').addClass('on')
        $('.lnb-dep2').addClass('on')
        $('.btn-title').addClass('on').parent().siblings().children().removeClass('on')
    })
})
