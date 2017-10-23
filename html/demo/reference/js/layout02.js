var lnb = `
<div class="lnb">
    <div class="lnb-dep1">
        <ul>
            <li><a href="#none" class="btn-logo"><span class="txt">로고</span></a></li>
            <li><a href="#none" class="btn-title"><span class="txt">제목</span></a></li>
            <li><a href="#none" class="btn-text"><span class="txt">본문</span></a></li>
            <li><a href="#none" class="btn-contents"><span class="txt">컨텐츠</span></a></li>
            <li><a href="#none" class="btn-grid"><span class="txt">갤러리</span></a></li>
            <li><a href="#none" class="btn-img"><span class="txt">이미지</span></a></li>
            <li><a href="#none" class="btn-video"><span class="txt">비디오</span></a></li>
            <li><a href="#none" class="btn-map"><span class="txt">지도</span></a></li>
            <li><a href="#none" class="btn-social"><span class="txt">소셜</span></a></li>
            <li><a href="#none" class="btn-hr"><span class="txt">구분선</span></a></li>
        </ul>
    </div>
    <div class="lnb-dep2 dep2-panel-l dep2-logo">
        <ul>
            <li>
                <a href="#none" class=""><img src="./img/snb_logo_img.png"><span>이미지로 삽입</span></a>
            </li>
            <li>
                <a href="#none" class=""><img src="./img/snb_logo_txt.png"><span>텍스트로 삽입</span></a>
            </li>
        </ul>
    </div>
    <div class="lnb-dep2 dep2-panel-l dep2-title">
        <ul>
            <li></li>
        </ul>
    </div>
    <div class="lnb-dep2 dep2-panel-l dep2-text">
        <ul>
            <li></li>
        </ul>
    </div>
    <div class="lnb-dep2 dep2-panel-l dep2-contents">
        <ul>
            <li></li>
        </ul>
    </div>
    <div class="lnb-dep2 dep2-panel-l dep2-grid">
        <ul>
            <li></li>
        </ul>
    </div>
    <div class="lnb-dep2 dep2-panel-s dep2-img">
        <div class="file-box">
            <input type="text" class="fileName" readonly="readonly">
            <label for="uploadBtn" class="btn-file">파일 찾기</label>
            <input type="file" id="uploadBtn" class="uploadBtn" multiple>
            <button type="button" class="btn-confirm">업로드</button>
        </div>
        <p class="upload-info">※ 파일은 최대 100MB(메가바이트)까지 업로드 가능합니다.</p>
    </div>
    <div class="lnb-dep2 dep2-panel-s dep2-video">
        <ul>
            <li></li>
        </ul>
    </div>
    <div class="lnb-dep2 dep2-panel-s dep2-map">
        <ul>
            <li></li>
        </ul>
    </div>
    <div class="lnb-dep2 dep2-panel-s dep2-social">
        <ul>
            <li></li>
        </ul>
    </div>
    <div class="lnb-dep2 dep2-panel-l dep2-hr">
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
    <div class="sec-control">
        <button type="button" title="설정" class="btn-section-edit">설정</button>
        <button type="button" title="위로" class="btn-section-up">위로</button>
        <button type="button" title="아래로" class="btn-section-down">아래로</button>
        <button type="button" title="복제" class="btn-section-copy">복제</button>
        <button type="button" title="삭제" class="btn-section-delete">삭제</button>
    </div>

    <!-- <button type="button" class="btn-edit">EDIT</button> -->
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

var sectionBdr = `
<span class="sec-bdr top"></span>
<span class="sec-bdr bottom"></span>
`;

var imgEdit = `
<span class="img-edit">
    <button type="button" class="btn-img-edit" title="이미지 수정">수정</button>
</span>
`;

$(function() {
    $("body").prepend(lnb);
    $(".wrapper").prepend(wrapperMask);
    $(".section").after(add);
    $(".section").append(sectionBdr);
    $(".section").eq(0).before(add);
    $(".con-box").after(edit);
    $('.img-div').append(imgEdit);

    
    // section
    $('.section').mouseenter(function () {
        $(this).addClass('on')
    })
    $('.section').mouseleave(function () {
        $(this).removeClass('on')
    })
    
    // btn
    $('.btn-width').click(function () {
        $(this).closest('.section').toggleClass('w-full')
    })
    $('.btn-section-edit').click(function () {
        $(this).parent().parent().toggleClass('on')
        $(this).toggleClass('on')
    })
    
    // add
    $('.add').mouseenter(function () {
        $(this).addClass('on')
        // $(this).find('button').animate({'left':'-40px', 'top':'-3px'},100)
        $(this).find('button').animate({'left':'-40px'},100)
    })
    $('.add').mouseleave(function () {
        $(this).removeClass('on')
        // $(this).find('button').animate({'left':'-58px', 'top':'-20px'},100)
        $(this).find('button').animate({'left':'-58px'},100)
    })
    $('.add').click(function () {
        $('.lnb').addClass('on')
        $('.wrapper-mask').addClass('on')
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
