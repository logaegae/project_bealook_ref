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
    var _this = this;
    $(document).on('click', '.hTDepth1 button', function() {
        $(this).removeClass('on');
        _this.getDepth1Styles();
    });
    $(document).on('change', '.hTDepth1 #fontFamily, .hTDepth1 #fontSize', function() {
        _this.getDepth1Styles();
    });
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
    _this._editor = document.querySelector(target);
    var _noArgBtn = $(".d1noArgBtn");
    var btns = $('.hTDepth1 > button');
    var selects = $('select');

    btns.each(function(i, e) {
        $(e).off('click');
    });
    selects.each(function(i, e) {
        $(e).off('change');
    });
    //버튼 off
    _this.clearOn();

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
        document.execCommand('fontSize', false, $(this).children("option:selected").val());
        _this._editor.removeAttribute("contenteditable");
    });

    //버튼 on
    _this.getDepth1Styles();
}
// depth2 버튼 이벤트
X.prototype.btnConfigDepth2 = function(target) {
    var _this = this;
    _this._editor = document.querySelector(target);
    var _noArgBtn = document.getElementsByClassName("d2noArgBtn");
    var btns = $('.hTDepth2 > button');
    var selects = $('select');
    btns.each(function(i, e) {
        $(e).off('click');
    });
    selects.each(function(i, e) {
        $(e).off('change');
    });
    //버튼 off
    _this.clearOn();

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

    //버튼 on
    _this.getDepth2Styles();

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
//버튼 on 초기화 함수
X.prototype.clearOn = function() {
    console.log("????")
    $('.hTDepth1 button, .hTDepth2 button').each(function(i, e) {
        $(e).removeClass('on');
    });
    $('.hTDepth1 .select-box label').each(function(i, e) {
        $(e).text('');
    });
    $('.hTDepth1 #fontSize option, .hTDepth2 #fontSize option').each(function(i, e) {
        $(e).prop('selected', false);
    });
}

//스타일 추출 함수
//1.적용된 스타일 가져오는 함수
X.prototype.getComputedStyleProperty = function(el, propName) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(el, null)[propName];
    } else if (el.currentStyle) {
        return el.currentStyle[propName];
    }
}
//2.범위 추출 함수
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
//1+2 사이즈 가져오는 함수
X.prototype.getSomthingStyle = function(something) {
    var containerEl = this.getRange();

    if (containerEl) {
        var fontSize = this.getComputedStyleProperty(containerEl, something);
        return fontSize;
    }
}
//depth1 스타일 가져오는 함수 > 버튼 on
X.prototype.getDepth1Styles = function() {
    var _this = this;
    _this._editor.setAttribute("contenteditable", "true");
    var j_editor = $("[data-id=" + _this._editor.getAttribute("data-id") + "]");
    _this._editor.focus();
    document.execCommand('selectAll', false, null);
    // console.log(_this.getSomthingStyle("fontSize"));
    var fontVariable = {
        "7": "30px",
        "6": "25px",
        "5": "20px",
        "4": "15px",
        "3": "12px"
    }
    $('.hTDepth1 #fontSize option').each(function(i, e) {
        if (j_editor.find('font').prop('size') === $(e).prop('value') || _this.getSomthingStyle("fontSize") === fontVariable[$(e).prop('value')]) {
            $(e).parents('.select-box').children('label').text($(e).text());
            $(e).prop('selected', true);
        } else {
            $(e).prop('selected', false);
        }
    });
    console.log(_this.getSomthingStyle("fontFamily"));
    $('.hTDepth1 #fontFamily option').each(function(i, e) {
        if (_this.getSomthingStyle("fontFamily") == $(e).prop('value') + '') {
            console.log($(e).text())
            $(e).parents('.select-box').children('label').text($(e).text());
            $(e).prop('selected', true);
        } else {
            $(e).prop('selected', false);
        }

    });

    // console.log(_this.getSomthingStyle("fontWeight"));
    if (_this.getSomthingStyle("fontWeight") === 'bold') $("button[exec=bold]").addClass('on');

    // console.log(_this.getSomthingStyle("fontStyle"));
    if (_this.getSomthingStyle("fontStyle") === 'italic') $("button[exec=italic]").addClass('on');

    // console.log(j_editor.find("u").length != 0);
    if (j_editor.find("u").text().length === j_editor.text().length) $("button[exec=underline]").addClass('on');

    // console.log(j_editor.find("strike").length != 0);
    if (j_editor.find("strike").text().length === j_editor.text().length) $("button[exec=StrikeThrough]").addClass('on');
    _this.clearSelection();
    _this._editor.removeAttribute("contenteditable");
}
//depth2 스타일 가져오는 함수 > 버튼 on
X.prototype.getDepth2Styles = function() {
    //셀렉트 박스 디폴트 설정
    var getFontFamily = this.getSomthingStyle("fontFamily");
    $('.hTDepth2 #fontFamily option').each(function(i, e) {
        $(e).prop('selected', false);
        if ($(e).prop('value') == getFontFamily) {
            $(e).parents('.select-box').children('label').text($(e).text());
            $(e).prop('selected', true);
        }
    });
    var getFontSize = this.getSomthingStyle("fontSize");
    $('.hTDepth2 #fontSize option').each(function(i, e) {
        $(e).prop('selected', false);
        if ($(e).prop('value') == getFontSize) {
            $(e).parents('.select-box').children('label').text($(e).text());
            $(e).prop('selected', true);
        }
    });
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

            _this.btnConfigDepth1("[data-id=" + $(this).attr("data-id") + "]");

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

        _this.btnConfigDepth2("[data-id=" + $(this).attr("data-id") + "]");

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
