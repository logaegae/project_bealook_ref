var lnb = `<div id="lnb"></div>`;

var add = `
<div class="add">
    <button type="button" class="btn-add-section"></button>
    <p>여기에 원하는 레이아웃을 추가해 보세요&nbsp;&nbsp;&nbsp;<span>+</span></p>
</div>
`;

var edit = `
<div class="edit">
    <div class="sec-control">
        <button type="button" title="설정" class="btn-section-edit">설정</button>
        <button type="button" title="위로" class="btn-section-up">위로</button>
        <button type="button" title="아래로" class="btn-section-down">아래로</button>
        <button type="button" title="복제" class="btn-section-copy">복제</button>
        <button type="button" title="삭제" class="btn-section-delete">삭제</button>
    </div>

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

var sectionBdr = `
<span class="sec-bdr top"></span>
<span class="sec-bdr bottom"></span>
`;

var wrapperMask = `
<div class="wrapper-mask"></div>
`;



var imgEdit = `
<span class="img-edit">
    <button type="button" class="btn-img-edit" title="이미지 수정">수정</button>
</span>
`;

var section = `
<div class="section">
    <div class="con-box">
    </div>
</div>
`;

$(function() {
    // $('body').prepend(lnb);
    $('#lnb').load( "ajax/lnb.html", function() {
    //   alert( "Load was performed." );
    });
    $('.wrapper').prepend(wrapperMask);
    $('.section').after(add);
    $('.section').eq(0).before(add);
    $('.img-div').append(imgEdit);


    // section
    $(document).on('mouseenter', '.section', function () {
        $(this).addClass('on')
        $(this).children('.con-box').after(edit)
        $(this).append(sectionBdr);
    })
    $(document).on('mouseleave', '.section', function () {
        $(this).removeClass('on')
        $(this).find('.edit').remove();
        $(this).find('.sec-bdr').remove();
    })

    // btn
    $(document).on('click', '.btn-width', function () {
        $(this).closest('.section').toggleClass('w-full')
    })
    $(document).on('click', '.btn-section-edit', function () {
        $(this).parent().parent().toggleClass('on')
        $(this).toggleClass('on')
    })

    // add
    $(document).on('mouseenter', '.add', function () {
        $(this).addClass('on')
        // $(this).find('button').animate({'left':'-40px', 'top':'-3px'},100)
        $(this).find('button').animate({'left':'-40px'},100)
    })
    $(document).on('mouseleave', '.add', function () {
        $(this).removeClass('on')
        // $(this).find('button').animate({'left':'-58px', 'top':'-20px'},100)
        $(this).find('button').animate({'left':'-58px'},100)
    })


    var _thisAdd =  null;
    $(document).on('click', '.add', function () {
        _thisAdd = $(this)
        $('.lnb').addClass('on')
        $('.wrapper-mask').addClass('on')
    })
    $('.lnb-dep2 ul li').click(function () {
        console.log(_this)
        _thisAdd.after(add).after(section)
        $('.lnb').removeClass('on')
        $('.lnb-dep1 li a').removeClass('on')
        $('.lnb-dep2').removeClass('on')
        $('.wrapper-mask').removeClass('on')
    })

    // lnb
    $('.lnb-dep1 li a').click(function () {
        var lnbLiIndex = $(this).parent().index();
        $('.lnb-dep2').removeClass('on').eq(lnbLiIndex).addClass('on')
        $(this).addClass('on').parent().siblings().children().removeClass('on')
    })
    $('.wrapper-mask').click(function () {
        $('.lnb').removeClass('on')
        $('.lnb-dep1 li a').removeClass('on')
        $('.lnb-dep2').removeClass('on')
        $('.wrapper-mask').removeClass('on')
    })
    $('.lnb-dep2 li a').mouseenter(function() {
        $(this).parent().addClass('on')
    })
    $('.lnb-dep2 li a').mouseleave(function() {
        $(this).parent().removeClass('on')
    })


    $('.btn-title-change').click(function () {
        $('.lnb').addClass('on')
        $('.wrapper-mask').addClass('on')
        $('.lnb-dep2').addClass('on')
        $('.btn-title').addClass('on').parent().siblings().children().removeClass('on')
    })


    $('.img-div').mouseenter(function() {
        $(this).addClass('on')
    })
    $('.img-div').mouseleave(function() {
        $(this).removeClass('on')
    })

    var uploadFile = $('.file-box .uploadBtn');
    uploadFile.on('change', function(){
    	if(window.FileReader){
            var text ='';
            if($(this)[0].files.length > 1){
                for(i=0; i< $(this)[0].files.length; i++){
                    console.log(i);
                    if(i == 0) {
                        text += $(this)[0].files[i].name;
                        continue;
                    }
                    text += filename = ', ' + $(this)[0].files[i].name;
                }
            }else{
                text = $(this)[0].files[0].name;
            }

    	} else {
    		var filename = $(this).val().split('/').pop().split('\\').pop();
    	}
    	$(this).siblings('.fileName').val(text);
    });
})
