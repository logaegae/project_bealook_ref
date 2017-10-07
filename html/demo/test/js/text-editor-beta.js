var X = function() {

    //영역 선택 함수 전역 변수
    this.removed = false;
    //입력 함수 배열
    this.clickSet = [];
    //최근 선택한 요소
    this._editor = null;

}

//초기화 함수
X.prototype.init = function() {
    this.clickDepth1();
    this.clickDepth2();
    this.drag();
    this.remove();
    this.default();
}


// 버튼에 클릭 이벤트 추가
//기본버튼 이벤트
X.prototype.default = function() {
    $('button[exec=redo]').click(function() {
        document.execCommand('redo');
    });
    $('button[exec=undo]').click(function() {
        document.execCommand('undo');
    });
}
// depth1 버튼 이벤트
X.prototype.btnConfigDepth1 = function(target) {
    var _this = this;
    _this._editor = document.getElementById(target);
    var _noArgBtn = $(".d1noArgBtn");
    var btns = $('.hTDepth1 > button');
    var selects = $('select');

    btns.each(function(i, e) {
        $(e).off('click');
    });
    selects.each(function(i, e) {
        $(e).off('change');
    });
    _noArgBtn.each(function(i, e) {
        var exec = $(e).attr("exec");
        $(e).click(function() {
            _this._editor.setAttribute("contenteditable", "true");
            _this._editor.focus();
            document.execCommand('selectAll', false, null);
            document.execCommand(exec);
            _this._editor.removeAttribute("contenteditable");
        });
    });

    $('.hTDepth1 button[exec=foreColor]').click(function() {
        var color = prompt('색 입력: ', 'red') || null;
        if (color != null) {
            _this._editor.setAttribute("contenteditable", "true");
            _this._editor.focus();
            document.execCommand('selectAll', false, null);
            document.execCommand('foreColor', false, color);
            _this._editor.removeAttribute("contenteditable");
        }
    });
    $('.hTDepth1 #fontFamily').change(function() {
        var name = $(this).children("option:selected").val() || null;
        if (name != null) {
            _this._editor.setAttribute("contenteditable", "true");
            _this._editor.focus();
            document.execCommand('selectAll', false, null);
            document.execCommand('fontName', false, name);
            _this._editor.removeAttribute("contenteditable");
        }
    });
    $('.hTDepth1 #fontSize').change(function() {
        _this._editor.setAttribute("contenteditable", "true");
        _this._editor.focus();
        document.execCommand('selectAll', false, null);

        // var spanString = $('<span/>', {
        //     'text': document.getSelection()
        // }).css('font-size', $(this).children("option:selected").val()).prop('outerHTML');
        // document.execCommand('insertHTML', false, spanString);
        document.execCommand('fontSize', false, $(this).children("option:selected").val());
        document.execCommand('selectAll', false, null);
        _this._editor.removeAttribute("contenteditable");
    });

    //셀렉트 박스 디폴트 설정 ???
    // var getFontFamily = _this.getFontFamily();
    // $('.hTDepth1 #fontFamily option').each(function(i, e) {
    //     $(e).prop('selected', false);
    //     if ($(e).prop('value') == getFontFamily) {
    //         $(e).parents('.select-box').children('label').text($(e).text());
    //         $(e).prop('selected', true);
    //     }
    // });
    // var getFontSize = _this.getFontSize();
    // $('.hTDepth1 #fontSize option').each(function(i, e) {
    //     $(e).prop('selected', false);
    //     if ($(e).prop('value') == getFontSize) {
    //         $(e).parents('.select-box').children('label').text($(e).text());
    //         $(e).prop('selected', true);
    //     }
    // });

    // console.log(this._editor);
    // var styleVal = this.getComputedStyleProperty(this._editor, 'fontSize');
    // console.log(styleVal);

    getFontSize
    _this._editor.setAttribute("contenteditable", "true");
    _this._editor.focus();
    document.execCommand('selectAll', false, null);
}
// depth2 버튼 이벤트
X.prototype.btnConfigDepth2 = function(target) {
    var _this = this;
    _this._editor = document.getElementById(target);
    var _noArgBtn = document.getElementsByClassName("d2noArgBtn");
    var btns = $('.hTDepth2 > button');
    var selects = $('select');
    btns.each(function(i, e) {
        $(e).off('click');
    });
    selects.each(function(i, e) {
        $(e).off('change');
    });
    for (i = 0; i < _noArgBtn.length; i++) {
        _noArgBtn[i].onclick = function(e) {
            var exec = this.getAttribute("exec");
            _this._editor.focus();
            document.execCommand(exec);
        }
    }
    $('.hTDepth2 button[exec=html]').click(function() {

        var html = prompt("html 태그 넣기", '<img src="http://main.nateimg.co.kr/img/cms/content_pool/2011/07/normal_bi.gif"/>');
        _this._editor.focus();
        document.execCommand('insertHTML', false, html);
    });
    $('.hTDepth2 button[exec=print]').click(function() {
        var html = _this._editor.innerHTML;
        alert(html);
    });
    $('.hTDepth2 button[exec=createLink]').click(function() {
        var selection = document.getSelection();
        //영역이 선택되었을때
        if ("" + selection != '') {
            var linkURL = prompt('URL을 입력하세요:', 'http://') || null;
            if (linkURL != null) {
                document.execCommand('createlink', false, linkURL);
                selection.anchorNode.parentElement.target = '_blank';
                _this._editor.focus();
            }
        }
    });
    $('.hTDepth2 button[exec=backColor]').click(function() {
        var color = prompt('색 입력: ', 'red') || null;
        if (color != null) {
            document.execCommand('backColor', false, color);
            _this._editor.focus();
        }
    });
    $('.hTDepth2 button[exec=foreColor]').click(function() {
        var color = prompt('색 입력: ', 'red') || null;
        if (color != null) {
            _this._editor.focus();
            document.execCommand('foreColor', false, color);
        }
    });
    $('.hTDepth2 #fontFamily').change(function() {
        var name = $(this).children("option:selected").val() || null;
        if (name != null) {
            _this._editor.focus();
            document.execCommand('fontName', false, name);
        }
    });
    $('.hTDepth2 #fontSize').change(function() {
        _this._editor.focus();
        document.execCommand('fontSize', false, $(this).children("option:selected").val());
    });
    $('.hTDepth2 button[exec=unlink]').onclick = function() {
        _this._editor.focus();
        document.execCommand('unlink');
    };

    //셀렉트 박스 디폴트 설정
    var getFontFamily = _this.getFontFamily();
    $('.hTDepth2 #fontFamily option').each(function(i, e) {
        $(e).prop('selected', false);
        if ($(e).prop('value') == getFontFamily) {
            $(e).parents('.select-box').children('label').text($(e).text());
            $(e).prop('selected', true);
        }
    });
    var getFontSize = _this.getFontSize();
    $('.hTDepth2 #fontSize option').each(function(i, e) {
        $(e).prop('selected', false);
        if ($(e).prop('value') == getFontSize) {
            $(e).parents('.select-box').children('label').text($(e).text());
            $(e).prop('selected', true);
        }
    });
}


//툴 노출 애니메이션 함수
X.prototype.toolTxtShow = function(e) {
    e.show().animate({
        'opacity': '1',
        'top': '20px'
    }, 150);
    $('.header .mask').stop().show().animate({
        'opacity': '1'
    }, 150);
}
X.prototype.toolTxtHide = function(e) {
    e.animate({
        'opacity': '0',
        'top': '0px',
        'display': 'none'
    }, 150, function() {
        $(this).css('display', 'none');
    });
    $('.header .mask').stop().animate({
        'opacity': '0',
        'display': 'none'
    }, 150, function() {
        $(this).css('display', 'none');
    });
}
//툴 노출 애니메이션 함수 끝

//영역션택 취소 함수
X.prototype.clearSelection = function() {
    if (window.getSelection) {
        if (window.getSelection().empty()) { //chrome
            window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) { //firefox
            window.getSelection().removeAllRanges();
        }
    } else if (document.selection) { //ie
        document.selection.empty();
    }
}

//스타일 추출 함수
//적용된 스타일 가져오는 함수
X.prototype.getComputedStyleProperty = function(el, propName) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(el, null)[propName];
    } else if (el.currentStyle) {
        return el.currentStyle[propName];
    }
}
//범위 추출 함수
X.prototype.getRange = function() {
    var containerEl, sel;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            containerEl = sel.getRangeAt(0).commonAncestorContainer;
            // Make sure we have an element rather than a text node
            if (containerEl.nodeType == 3) {
                containerEl = containerEl.parentNode;
            }
        }
    } else if ((sel = document.selection) && sel.type != "Control") {
        containerEl = sel.createRange().parentElement();
    }
    return containerEl;
}
//폰트 사이즈 가져오기
X.prototype.getFontSize = function() {
    var containerEl = this.getRange();

    if (containerEl) {
        var fontSize = this.getComputedStyleProperty(containerEl, "fontSize");
        return fontSize;
    }
}
//폰트 패밀리 가져오기
X.prototype.getFontFamily = function() {
    var containerEl = this.getRange();

    if (containerEl) {
        var fontFamily = this.getComputedStyleProperty(containerEl, "fontFamily");
        return fontFamily;
    }
}
//스타일 추출 함수 끝


//영역 선택 설정
//depth1 노출
X.prototype.clickDepth1 = function() {
    var _this = this;
    $(".editor-wrapper").on('mousedown', '.text-editable', function(e) {
        console.log("selected");
        if (!$(this).hasClass("ed-selected")) {
            _this.toolTxtShow($('.tool-txt-click'));

            $(".ed-selected").removeClass("ed-selected");
            $(this).addClass("ed-selected");
            _this.removed = true;

            _this.btnConfigDepth1($(this).attr("id"));

            $(this).focus();
        }
        e.stopPropagation();
    });
}
//처음부터 드래그 할 경우
X.prototype.drag = function() {
    $(".editor-wrapper").on('mouseup', '.text-editable', function(e) {
        var selection = document.getSelection();
        if ($(this).hasClass("ed-selected") && "" + selection != '') {
            $(this).mousedown();
        }
        e.stopPropagation();
    });
}
//depth2 노출
X.prototype.clickDepth2 = function() {
    var _this = this;
    $(".editor-wrapper").on('mousedown', '.text-editable.ed-selected', function(e) {
        console.log("editable");

        _this.toolTxtHide($('.tool-txt-click'));
        _this.toolTxtShow($('.tool-txt-drag'));

        _this.btnConfigDepth2($(this).attr("id"));

        $("*[contenteditable=true]").removeAttr("contenteditable");
        $(this).attr("contenteditable", "true");
        $(this).focus();
        _this.removed = true;
        e.stopPropagation();
    });
}
// 선택 해제
X.prototype.remove = function() {
    var _this = this;

    function removeCommon() {
        console.log("removed");
        $("*[contenteditable=true]").removeAttr("contenteditable");
        $(".ed-selected").removeClass("ed-selected");
        _this.toolTxtHide($('.tool-txt-click'));
        _this.toolTxtHide($('.tool-txt-drag'));

        _this.removed = false;
    }
    $(".editor-wrapper").on('mousedown', '*', function(e) {
        if (!_this.removed && $(this).parents(".text-editable").length == 0) {
            removeCommon();
        } else {
            $(this).parents(".text-editable").mousedown();
            _this.removed = false;
        }
        e.stopPropagation();
    });
    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            removeCommon();
        }
    });
}
//영역 선택 설정 끝

function TextEditor() {
    X.apply(this, arguments);
}
TextEditor.prototype = Object.create(X.prototype);
TextEditor.prototype.constructor = TextEditor;

function LayoutEditor() {
    X.apply(this, arguments);
}
LayoutEditor.prototype = Object.create(X.prototype);
LayoutEditor.prototype.constructor = LayoutEditor;
