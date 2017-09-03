/*! Brunch Editor - v0.1.0-snapshot - 2017-08-02
 * Copyright (c) 2017 Daum Communications; Licensed  */
if (function (a, b, c) {
        "$:nomunge";

        function d(a) {
            return a = a || location.href, "#" + a.replace(/^[^#]*#?(.*)$/, "$1")
        }
        var e, f = "hashchange",
            g = document,
            h = a.event.special,
            i = g.documentMode,
            j = "on" + f in b && (i === c || i > 7);
        a.fn[f] = function (a) {
            return a ? this.bind(f, a) : this.trigger(f)
        }, a.fn[f].delay = 50, h[f] = a.extend(h[f], {
            setup: function () {
                return j ? !1 : void a(e.start)
            },
            teardown: function () {
                return j ? !1 : void a(e.stop)
            }
        }), e = function () {
            function e() {
                var c = d(),
                    h = l(i);
                c !== i ? (k(i = c, h), a(b).trigger(f)) : h !== i && (location.href = location.href.replace(/#.*/, "") + h), g = setTimeout(e, a.fn[f].delay)
            }
            var g, h = {},
                i = d(),
                j = function (a) {
                    return a
                },
                k = j,
                l = j;
            return h.start = function () {
                g || e()
            }, h.stop = function () {
                g && clearTimeout(g), g = c
            }, h
        }()
    }(jQuery, this), "undefined" == typeof jQuery) throw new Error("CloudEidtor requires jQuery");
! function (a) {
    var b = function (c, d) {
        this.options = a.extend({}, b.DEFAULTS, a(c).data(), "object" == typeof d && d), window.be = {}, window.be.log = a.proxy(function () {
            this.isReal() || console.log.apply(console, arguments)
        }, this), this.browser = b.browser(), this._id = ++b.count, this.blurred = !0, this.init(c), this.ajaxPoolset = {}
    };
    b.count = 0, b.initializers = [], b.VALID_NODES = ["P", "PRE", "BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6", "DIV", "LI", "TD"], b.VALID_URL_EXPR = /^(?:((h|H)(t|T)(t|T)(p|P)(s|S)?):)(\/\/)([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/, b.VALID_URL_EXPR_CONTAINS = /(?:((h|H)(t|T)(t|T)(p|P)(s|S)?):)(\/\/)([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#\s]*))?(?:\?([^#\s]*))?(?:#([^\s]*))?/, b.ERROR_CODE = {
        UNKNOWN: 0,
        BAD_LINK: 1,
        NO_LINK: 2,
        UPLOAD: 3,
        PARSING: 4,
        IMAGE_TOO_LARGE: 5,
        IMAGE_INVALID_TYPE: 6,
        CROSS_DOMAIN: 7,
        FILE_TOO_LARGE: 8,
        FILE_INVALID_TYPE: 9,
        FILE_TOO_LARGE_PER_ARTICLE: 10,
        VIDEO_TOO_LARGE: 11,
        VIDEO_INVALID_TYPE: 12,
        OVERFLOW_CAPTION_LIMIT: 13,
        OVERFLOW_TITLE_LIMIT: 14,
        OVERFLOW_SUB_TITLE_LIMIT: 15,
        NO_CHECK_SPELL: 16,
        IS_PENDING_AJAX: 17,
        COVER_ONLY_IMAGE: 18,
        NOT_FOUND_ERROR: 19,
        UNLOAD: 20,
        CHECKING_SPELL: 21,
        PROCESSING_PASTE: 22,
        CANCEL_UPLOAD: 23,
        EMPTY_TITLE: 24,
        EMPTY_CONTENT: 25,
        IMAGE_TOO_PIXEL: 26,
        IMAGE_TOO_SMALL_TO_EDIT: 27,
        IS_UPLOADING_EDIT_IMAGE: 28
    }, b.ERROR_MESSAGE = {}, b.ERROR_MESSAGE[b.ERROR_CODE.UNKNOWN] = "�� �� �녿뒗 �먮윭媛� 諛쒖깮�섏��듬땲��.", b.ERROR_MESSAGE[b.ERROR_CODE.BAD_LINK] = "�대�吏� �낅줈�쒖뿉 �ㅽ뙣�덉뒿�덈떎.", b.ERROR_MESSAGE[b.ERROR_CODE.NO_LINK] = "�낅줈�� 寃쎈줈媛� 議댁옱�섏� �딆뒿�덈떎.", b.ERROR_MESSAGE[b.ERROR_CODE.UPLOAD] = "�낅줈�� 以� �먮윭媛� 諛쒖깮�섏��듬땲��.", b.ERROR_MESSAGE[b.ERROR_CODE.PARSING] = "�낅줈�� 寃곌낵媛� �뺤긽�곸씠吏� �딆뒿�덈떎.", b.ERROR_MESSAGE[b.ERROR_CODE.IMAGE_TOO_LARGE] = "理쒕� 20MB�� �대�吏�瑜� �낅줈�� �� �� �덉뒿�덈떎.", b.ERROR_MESSAGE[b.ERROR_CODE.IMAGE_TOO_PIXEL] = "理쒕� 50硫붽� �쎌��� �대�吏�瑜� �낅줈�� �� �� �덉뒿�덈떎.", b.ERROR_MESSAGE[b.ERROR_CODE.IMAGE_INVALID_TYPE] = "�뺤긽�곸씤 �대�吏� ���낆씠 �꾨떃�덈떎.", b.ERROR_MESSAGE[b.ERROR_CODE.CROSS_DOMAIN] = "�꾨찓�� 臾몄젣濡� �낅줈�� �� �� �놁뒿�덈떎.", b.ERROR_MESSAGE[b.ERROR_CODE.FILE_TOO_LARGE] = "理쒕� 50MB�� �뚯씪�� �낅줈�� �� �� �덉뒿�덈떎.", b.ERROR_MESSAGE[b.ERROR_CODE.FILE_INVALID_TYPE] = "�낅줈�� �� �� �녿뒗 �뚯씪�낅땲��.", b.ERROR_MESSAGE[b.ERROR_CODE.FILE_TOO_LARGE_PER_ARTICLE] = "寃뚯떆臾� �� 500MB源뚯� 泥⑤��� �� �덉뒿�덈떎.", b.ERROR_MESSAGE[b.ERROR_CODE.VIDEO_TOO_LARGE] = "理쒕� 500MB�� �숈쁺�곸쓣 �낅줈�� �� �� �덉뒿�덈떎.", b.ERROR_MESSAGE[b.ERROR_CODE.VIDEO_INVALID_TYPE] = "�낅줈�� �� �� �녿뒗 �숈쁺�곸엯�덈떎.", b.ERROR_MESSAGE[b.ERROR_CODE.OVERFLOW_CAPTION_LIMIT] = "罹≪뀡�� 100湲��� �댁긽 �낅젰�� �� �놁뒿�덈떎.", b.ERROR_MESSAGE[b.ERROR_CODE.OVERFLOW_TITLE_LIMIT] = "�쒕ぉ�� 30湲��� �댁긽 �낅젰�� �� �놁뒿�덈떎.", b.ERROR_MESSAGE[b.ERROR_CODE.OVERFLOW_SUB_TITLE_LIMIT] = "�뚯젣紐⑹� 40湲��� �댁긽 �낅젰�� �� �놁뒿�덈떎.", b.ERROR_MESSAGE[b.ERROR_CODE.NO_CHECK_SPELL] = "寃��ы븷 �댁슜�� �놁뒿�덈떎.", b.ERROR_MESSAGE[b.ERROR_CODE.IS_PENDING_AJAX] = "�낅줈�� 以묒씤 �댁슜�� �덉뒿�덈떎. �꾨즺�� �� �ㅼ떆 �쒕룄�댁＜�몄슂.", b.ERROR_MESSAGE[b.ERROR_CODE.COVER_ONLY_IMAGE] = "而ㅻ쾭�먮뒗 �대�吏�留� �낅줈�� �� �� �덉뒿�덈떎.", b.ERROR_MESSAGE[b.ERROR_CODE.NOT_FOUND_ERROR] = "�ㅻ쪟媛� 諛쒓껄�섏� �딆븯�듬땲��.", b.ERROR_MESSAGE[b.ERROR_CODE.UNLOAD] = "湲��� ���λ릺吏� �딆븯�듬땲��.", b.ERROR_MESSAGE[b.ERROR_CODE.CHECKING_SPELL] = "留욎땄踰� 寃��ъ쨷�낅땲��.", b.ERROR_MESSAGE[b.ERROR_CODE.PROCESSING_PASTE] = "�댁슜 遺숈뿬�ｊ린 諛� �대�吏� �낅줈�� 以묒엯�덈떎.", b.ERROR_MESSAGE[b.ERROR_CODE.CANCEL_UPLOAD] = "�낅줈�쒓� 痍⑥냼�섏뿀�듬땲��.", b.ERROR_MESSAGE[b.ERROR_CODE.EMPTY_TITLE] = "�쒕ぉ�� �낅젰�섏꽭��.", b.ERROR_MESSAGE[b.ERROR_CODE.EMPTY_CONTENT] = "�댁슜�� �낅젰�섏꽭��.", b.ERROR_MESSAGE[b.ERROR_CODE.IMAGE_TOO_SMALL_TO_EDIT] = "�몄쭛�� �ш린 200px �댁긽�� �대�吏�遺��� 吏��먮맗�덈떎.", b.ERROR_MESSAGE[b.ERROR_CODE.IS_UPLOADING_EDIT_IMAGE] = "�몄쭛 �� �낅줈�쒖쨷�� �대�吏�媛� �덉뒿�덈떎. �꾨즺�� �� �쒕룄�댁＜�몄슂", b.SERVICE_STATUS_REAL = "real", b.DEFAULTS = {
        alwaysBlank: !0,
        alwaysVisible: !1,
        animationDuration: 220,
        apiDomain: "http://api.brunch.dev.daum.net",
        allowedAttrs: ["accept", "accept-charset", "accesskey", "action", "align", "alt", "async", "autocomplete", "autofocus", "autoplay", "autosave", "background", "bgcolor", "border", "charset", "cellpadding", "cellspacing", "checked", "cite", "class", "color", "cols", "colspan", "contenteditable", "contextmenu", "controls", "coords", "data", "data-.*", "datetime", "default", "defer", "dir", "dirname", "disabled", "download", "draggable", "dropzone", "enctype", "for", "form", "formaction", "headers", "height", "hidden", "high", "href", "hreflang", "icon", "id", "ismap", "itemprop", "keytype", "kind", "label", "lang", "language", "list", "loop", "low", "max", "maxlength", "media", "method", "min", "multiple", "name", "novalidate", "open", "optimum", "pattern", "ping", "placeholder", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "reversed", "rows", "rowspan", "sandbox", "scope", "scoped", "scrolling", "seamless", "selected", "shape", "size", "sizes", "span", "src", "srcdoc", "srclang", "srcset", "start", "step", "summary", "spellcheck", "style", "tabindex", "target", "title", "type", "translate", "usemap", "value", "valign", "width", "wrap"],
        allowedTags: ["!--", "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "queue", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"],
        autosave: !1,
        autosaveInterval: 1e4,
        blockTags: ["n", "div", "p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
        blockquoteStyles: ["blockquote_type1", "blockquote_type2", "blockquote_type3"],
        blockquoteStyleKinds: ["quote", "bar", "box"],
        bodyMinHeight: 300,
        brunch: {},
        buttons: ["bold", "italic", "underline", "strikeThrough", "fontSize", "fontFamily", "color", "foreColor", "backColor", "titleColor", "sep", "formatBlock", "blockStyle", "align", "insertOrderedList", "insertUnorderedList", "outdent", "indent", "sep", "createLink", "insertImage", "insertVideo", "insertHorizontalRule", "undo", "redo", "html"],
        customButtons: {},
        customDropdowns: {},
        customText: !1,
        defaultImageWidth: 300,
        direction: "ltr",
        disableRightClick: !1,
        editorClass: "",
        hasStyleSelector: "span, strike, u, .wrap_img_float, .cover_title, .vertical_marker, .horizontal_marker, .inner_wrap_og_image",
        removeStyleSelector: ".f-video-editor, .text_caption",
        headers: {},
        height: "auto",
        icons: {},
        initOnClick: !1,
        inlineMode: !0,
        language: "en_us",
        linkList: [],
        linkText: !0,
        linkClasses: {},
        maxHeight: "auto",
        minHeight: "auto",
        noFollow: !0,
        selectableWrapItems: ["item_type_img", "item_type_gridGallery", "item_type_video", "item_type_place", "item_type_sticker", "item_type_hr", "item_type_file", "item_type_opengraph"],
        moduleClassNameMap: {
            item_type_img: "image",
            item_type_gridGallery: "gridGallery",
            item_type_video: "video",
            item_type_place: "place",
            item_type_sticker: "sticker",
            item_type_hr: "line",
            item_type_file: "file",
            item_type_opengraph: "opengraph"
        },
        saveCheckItemClass: ".item_type_img, .item_type_gridGallery, .item_type_video, .item_type_place, .item_type_sticker, .item_type_hr, .item_type_file, .item_type_opengraph",
        paragraphy: !0,
        placeholder: "Type something",
        plainPaste: !1,
        preloaderSrc: "",
        saveURL: null,
        saveParams: {},
        saveRequestType: "POST",
        simpleAmpersand: !0,
        shortcuts: !0,
        spellcheck: !1,
        theme: null,
        toolbarFixed: !0,
        trackScroll: !1,
        unlinkButton: !0,
        useImageUploadButton: [],
        typingTimer: 200,
        articleSummaryLength: 200,
        width: "auto",
        crossDomain: !0,
        withCredentials: !0,
        zIndex: 1e3
    }, b.prototype.initBrunch = function () {
        this.brunch = a.extend({}, this.options.brunch), void 0 == this.brunch.userId && (this.brunch.userId = "brunch"), void 0 == this.brunch.active && (this.brunch.active = "dev"), void 0 == this.brunch.articleNo && (this.brunch.articleNo = ""), void 0 == this.brunch.publishCount && (this.brunch.publishCount = "0"), this.brunch.publishCount = parseInt(this.brunch.publishCount, 10), isNaN(this.brunch.publishCount) && (this.brunch.publishCount = 0)
    }, b.prototype.getUserId = function () {
        return this.brunch.userId
    }, b.prototype.isReal = function () {
        return b.SERVICE_STATUS_REAL == this.brunch.active ? !0 : !1
    }, b.prototype.getPublishCount = function () {
        return this.brunch.publishCount
    }, b.prototype.getArticleNo = function () {
        return this.brunch.articleNo
    }, b.prototype.destroy = function () {
        this.sync(), this.hide(), this.focus(), this.clearSelection(), this.$element.blur(), this.$bttn_wrapper && this.$bttn_wrapper.html("").removeData().remove(), this.$editor && this.$editor.html("").removeData().remove(), this.$image_editor && this.$image_editor.html("").removeData().remove(), this.$image_wrapper && this.$image_wrapper.html("").removeData().remove(), this.$link_wrapper && this.$link_wrapper.html("").removeData().remove(), this.$video_wrapper && this.$video_wrapper.html("").removeData().remove(), this.$popup_editor && this.$popup_editor.html("").removeData().remove(), this.$element.replaceWith(this.getHTML()), this.$box && !this.editableDisabled && (this.$box.removeClass("froala-box"), this.$box.find(".html-switch").remove(), this.$box.removeData("fa.editable"), clearTimeout(this.typingTimer)), clearTimeout(this.ajaxInterval), clearTimeout(this.typingTimer), this.$element.off("mousedown mouseup click keydown keyup focus keypress touchstart touchend touch drop"), this.$element.off("mousedown mouseup click keydown keyup focus keypress touchstart touchend touch drop", "**"), a(window).off("mouseup." + this._id), a(window).off("keydown." + this._id), a(window).off("keyup." + this._id), a(window).off("hide." + this._id), a(window).off("scroll." + this._id), a(document).off("selectionchange." + this._id), void 0 !== this.$upload_frame && this.$upload_frame.remove()
    }, b.prototype.callback = function (b, c, d) {
        void 0 === d && (d = !0);
        var e = b + "Callback";
        return this.options[e] && a.isFunction(this.options[e]) && (c ? this.options[e].apply(this, c) : this.options[e].call(this)), c ? this.$box.trigger("editable." + b, c) : this.$box.trigger("editable." + b), d === !0 && this.sync(), c ? c : !0
    }, b.prototype.triggerEvent = function (b, c, d, e) {
        void 0 === d && (d = !0), void 0 === e && (e = !1), d === !0 && ((this.isDisabled() || this.editableDisabled || !e) && this.cleanify(), this.sync());
        var f = !0;
        return c || (c = []), f = this.$original_element.triggerHandler("editable." + b, a.merge([this], c)), void 0 === f ? !0 : f
    }, b.prototype.syncCleanHTML = function (a, b) {
        var c;
        if (b)
            for (c = a.replace(/<span((?!class\s*=\s*["']?(f-marker|text_caption)["']?)[^>])*?><\/span>/gi, ""); a != c;) a = c, c = a.replace(/<span((?!class\s*=\s*["']?(f-marker|text_caption)["']?)[^>])*?><\/span>/gi, "");
        else
            for (c = a.replace(/<span((?!class\s*=\s*["']?text_caption["']?)[^>])*?><\/span>/g, ""); a != c;) a = c, c = a.replace(/<span((?!class\s*=\s*["']?text_caption["']?)[^>])*?><\/span>/g, "");
        return a
    }, b.prototype.sync = function () {
        this.raiseEvent("sync");
        var a = this.getModule("image");
        a && a.disableImageResize(), this.$element.trigger("placeholderCheck"), this.isDisabled() || this.android() || a && a.isActive() || this.cleanify();
        var b = this.getHTML();
        this.trackHTML !== b && null != this.trackHTML ? (this.callback("contentChanged", [], !1), a && a.refreshImageList(), this.refreshButtons(), this.trackHTML = b) : null == this.trackHTML && (this.trackHTML = b)
    }, b.prototype.emptyElement = function (b) {
        if ("IMG" == b.tagName || a(b).find("img").length > 0) return !1;
        if (a(b).find("input, iframe, hr").length > 0) return !1;
        for (var c = a(b).text(), d = c.length; d--;) {
            var e = c[d];
            if ("\n" !== e && "\r" !== e && "	" !== e) return !1
        }
        return !0
    }, b.prototype.continueInit = function () {
        this.browserFixes(), this.$element.on("DOMNodeRemoved", a.proxy(function (b) {
            var c = a(b.target);
            if (c.hasClass("item_type_preview") && !c.hasClass("delete_by_module") && c.data("file-id")) {
                var d = c.data("file-id");
                this.cancelAjax(d)
            }
        }, this)), this.initUndoRedo(), this.enableTyping(), this.initShortcuts(), this.initEditor(), this.isLink || this.initDrag(), this.initOptions(), this.setSelectionButtons(), this.setCoverButtons(), this.setSideButtons(), this.initModules(), this.beforeunload = a.proxy(function () {
            return this.undoIndex > 1 ? (this.getModule("image").historyReset(), b.ERROR_MESSAGE[b.ERROR_CODE.UNLOAD]) : void 0
        }, this), this.initEditorSelection(), this.initAjaxSaver(), this.initLink();
        for (var c = 0; c < a.Editable.initializers.length; c++) a.Editable.initializers[c].call(this);
        this.setCustomText(), this.registerPaste(), this.$element.blur(), this.initialized = !0, this.refreshButtons(!0), this.callback("initialized", [], !1);
        var d = this.options.directFunction;
        if (d)
            for (var e in d) {
                var f = e,
                    g = d[e];
                this.addDirectFunction(f, g)
            }
        this.initAttachList(), this.enabledEditorTool = !0, a(window).on("unload", a.proxy(function () {
            this.destroy()
        }, this))
    }, b.prototype.hasContents = function () {
        return 0 == this.getHtmlForSave().contentText.length && this.getModule("cover").isEmpty() && 0 == this.$body.find(".wrap_item:not(.item_type_text)").length ? !1 : !0
    }, b.prototype.initAttachList = function () {
        this.$original_element.on("editable.attached", a.proxy(function (a, b, c, d, e, f) {
            b.selectionInEditor() || f || this.resetCursor(c, e), this.saveUndoStep()
        }, this))
    }, b.prototype.resetCursor = function (b, c, d) {
        if (b && b.select && c && 0 != c.length) {
            c.length > 1 && (c = a(c.get(c.length - 1)));
            var e = c.next();
            e && e.length > 0 && !d ? this.isTextWrapItem(e) ? this.setSelection(e.get(0)) : b.select(c) : (e = this.makeTextWrap(), c.after(e), this.focus(), this.addFontFamily(e, !0))
        }
    }, b.prototype.addDirectFunction = function (b, c) {
        var d = c.direct,
            e = c.callback;
        a(b).on(this.mouseup, a.proxy(function () {
            this.hide(), this[d](e)
        }, this))
    }, b.prototype.isSelectableWrapItem = function (b) {
        var c = !1,
            d = a(b);
        if (0 == d.length) return !0;
        var b = d.get(0);
        if (b) {
            var e = this.options.selectableWrapItems,
                f = b.className;
            f && a(e).each(function (a, b) {
                return f.indexOf(b) > -1 ? (c = !0, !1) : void 0
            });
            var g = a(this.getWrapItem(b));
            g.hasClass("item_type_gridGallery") && (c = !0)
        }
        return c
    }, b.prototype.getTextWrapItemElements = function (a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var e = a[c];
            (this.isTextWrapItem(e) || this.isBulletWrapItem(e)) && b.push(e)
        }
        return b
    }, b.prototype.isTextWrapItem = function (b) {
        return a(b).hasClass("wrap_item item_type_text")
    }, b.prototype.isBulletWrapItem = function (b) {
        return a(b).hasClass("wrap_item item_type_bullet")
    }, b.prototype.isOrInTextWrapItem = function (b) {
        return a(b).hasClass("wrap_item item_type_text") || 0 != a(b).closest(".wrap_item.item_type_text").length
    }, b.prototype.mobile = function () {
        return this.iOS() || this.android() || this.blackberry()
    }, b.prototype.iOS = function () {
        return /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
    }, b.prototype.iPad = function () {
        return /(iPad)/g.test(navigator.userAgent)
    }, b.prototype.iPhone = function () {
        return /(iPhone)/g.test(navigator.userAgent)
    }, b.prototype.iPod = function () {
        return /(iPod)/g.test(navigator.userAgent)
    }, b.prototype.android = function () {
        return /(Android)/g.test(navigator.userAgent)
    }, b.prototype.blackberry = function () {
        return /(Blackberry)/g.test(navigator.userAgent)
    }, b.prototype.trim = function (a) {
        return String(a).replace(/^\s+|\s+$/g, "")
    }, b.prototype.setHTML = function (a, b) {
        this.no_verify = !0, void 0 === b && (b = !0), a = this.clean(a, !0, !1), a = a.replace(/>\s+</g, "><"), this.$element.html(a), this.getModule("image").refreshImageList(), this.options.paragraphy && this.wrapText(), b === !0 && (this.restoreSelectionByMarkers(), this.sync()), this.no_verify = !1
    }, b.prototype.webkitParagraphy = function () {}, b.prototype.wrapText = function () {
        this.webkitParagraphy();
        var b = [],
            c = ["SPAN", "A", "B", "I", "EM", "U", "S", "STRONG", "STRIKE", "FONT", "IMG"],
            d = this,
            e = function () {
                if (0 !== b.length) {
                    var c;
                    c = a(d.options.paragraphy === !0 ? "<p>" : "<div>");
                    var e = a(b[0]);
                    if (1 == b.length && "f-marker" == e.attr("class")) return void(b = []);
                    for (var f = 0; f < b.length; f++) e = a(b[f]), c.append(e.clone()), f == b.length - 1 ? e.replaceWith(c) : e.remove();
                    b = []
                }
            },
            f = this.$element.find(".wrap_body");
        f.contents().filter(function () {
            var d = a(this);
            3 == this.nodeType && d.text().trim().length > 0 || c.indexOf(this.tagName) >= 0 ? b.push(this) : 3 == this.nodeType && 0 === d.text().trim().length ? d.remove() : e()
        }), e(), f.find("> p, > div").each(function (b, c) {
            var d = jQuery(c);
            0 === a.trim(d.text()).length && 0 === d.find("img").length && 0 === d.find("br").length && d.append("<br/>")
        }), f.find("div:not(.image_wrapper_overlay, .ui-progressbar-value):empty").remove(), f.find("> br").remove()
    }, b.prototype.unwrapText = function () {
        this.options.paragraphy || this.$element.find("div").each(function (b, c) {
            "undefined" == typeof a(c).attr("style") && a(c).replaceWith(a(c).html() + "<br/>")
        })
    }, b.prototype.wrapTextInElement = function (b, c) {
        void 0 === c && (c = !1);
        var d = [],
            e = ["SPAN", "A", "B", "I", "EM", "U", "S", "STRONG", "STRIKE", "FONT", "IMG", "SUB", "SUP"],
            f = this;
        this.no_verify = !0;
        var g = function () {
                if (0 === d.length) return !1;
                var b;
                b = a(f.options.paragraphy === !0 ? "<p>" : "<div>");
                var c = a(d[0]);
                if (1 == d.length && "f-marker" == c.attr("class")) return void(d = []);
                for (var e = 0; e < d.length; e++) {
                    var g = a(d[e]);
                    b.append(g.clone()), e == d.length - 1 ? g.replaceWith(b) : g.remove()
                }
                d = []
            },
            h = !1,
            i = !1;
        b.contents().filter(function () {
            var b = a(this);
            if (b.hasClass("f-marker") || b.find(".f-marker").length) {
                var j = b;
                b.find(".f-marker").length && (j = a(b.find(".f-marker")[0])), "true" === j.attr("data-type") ? (h = !0, i = !1) : i = !0
            }
            this.nodeType == Node.TEXT_NODE && b.text().trim().length > 0 || e.indexOf(this.tagName) >= 0 ? d.push(this) : this.nodeType == Node.TEXT_NODE && 0 === b.text().trim().length && f.options.beautifyCode ? b.remove() : (h || c ? (g(), "BR" === this.tagName && b.remove()) : d = [], i && (h = !1))
        }), (h || c) && g(), b.find("> p").each(function (b, c) {
            0 === a(c).text().trim().length && 0 === a(c).find("img").length && 0 === a(c).find("br").length && a(c).append("<br/>")
        }), b.find("div:empty").remove(), b.is(":empty") && b.append(f.options.paragraphy === !0 ? "<p><br/></p>" : "<br/>"), this.no_verify = !1
    }, b.prototype.getHTMLByClipboardText = function (b) {
        for (var c = "", d = b.getData("text/plain"), e = d.split("\n"), f = 0, g = e.length; g > f; f++) {
            var h = e[f],
                i = a("<div><p></p></div>");
            i.find("p").text(h), c += i.html()
        }
        return c
    }, b.prototype.registerPaste = function () {
        this.$element.on("paste", a.proxy(function (b) {
            if (!this.enabledEditorTool || !this.selectionInEditor()) return !1;
            var c = b.originalEvent.clipboardData;
            if (this.clipboardPaste(b)) return !1;
            this.clipboardHTML = "", this.pasting = !0, this.scrollPosition = a(window).scrollTop();
            var d = !1;
            if (c && c.getData) {
                this.selectionInEditor() && this.getRange().deleteContents();
                var e = "",
                    f = c.types;
                if (a.Editable.isArray(f))
                    for (var g = 0; g < f.length; g++) e += f[g] + ";";
                else e = f;
                /text\/html/.test(e) ? this.clipboardHTML = c.getData("text/html").replace(/[\r\n]+/gi, "").replace(/[\t]+/gi, " ") : /text\/rtf/.test(e) && this.browser.safari ? (this.clipboardHTML = c.getData("text/rtf"), "" == this.clipboardHTML && /text\/plain/.test(e) && (this.clipboardHTML = this.getHTMLByClipboardText(c))) : /text\/plain/.test(e) && !this.browser.mozilla && (this.clipboardHTML = this.getHTMLByClipboardText(c))
            }
            return "" !== this.clipboardHTML ? d = !0 : this.clipboardHTML = null, d ? (this.processPaste(), b.preventDefault && (b.stopPropagation(), b.preventDefault()), !1) : (this.beforePaste(), void setTimeout(a.proxy(function () {
                this.processIE()
            }, this), 1))
        }, this)), this.browser.msie && this.$element.on("keydown", a.proxy(function (b) {
            if (!this.enabledEditorTool || !this.selectionInEditor()) return !1;
            var c = a.Editable.getKey(b);
            c.isPaste() && (b.stopPropagation(), this.beforePaste())
        }, this))
    }, b.prototype.processIE = function () {
        be.log("processIE");
        var b = this.$element.find(".paste_div");
        this.$pasteDiv || (this.$pasteDiv = a("<div></div>"));
        var c = "";
        b.length > 0 && (c = b.get(b.length - 1).innerHTML), this.$pasteDiv.html(c), b.remove(), this.processPaste()
    }, b.prototype.beforePaste = function () {
        if (!this.isStartMSIEPaste) {
            this.isStartMSIEPaste = !0, this.saveSelectionByMarkers(), this.clipboardHTML = null, this.scrollPosition = a(window).scrollTop();
            var b = null;
            b = this.selectionInCover() || this.selectionInCaption() ? this.getSelectionElement() : this.$body, a(b).append(a('<div class="paste_div" data-fr-verified="true"></div>'));
            var c = a(".paste_div");
            c.focus(), c.get(0) && c.get(0).firstChild && this.setSelection(c.get(0).firstChild)
        }
    }, b.prototype.afterPaste = function () {
        this.isStartMSIEPaste = !1, this.hidePopups(), this.removeMarkers(), this.$element.trigger("placeholderCheck"), this.pasting = !1, this.$pasteDiv && this.$pasteDiv.html(""), this.triggerEvent("afterPaste", [], !0, !0)
    }, b.prototype.clipboardPaste = function (b) {
        if (b && b.clipboardData && b.clipboardData.items) {
            var c = b.clipboardData.items[0].getAsFile();
            if (c) {
                var d = new FileReader;
                return d.onload = a.proxy(function (a) {
                    var b = a.target.result;
                    this.insertHTML('<img data-fr-image-pasted="true" src="' + b + '" />'), this.afterPaste()
                }, this), d.readAsDataURL(c), !0
            }
        }
        return !1
    }, b.prototype._extractContent = function (a) {
        for (var b, c = document.createDocumentFragment(); b = a.firstChild;) c.appendChild(b);
        return c
    }, b.prototype.extractCurrentPoint = function () {
        var b = this.getRange().cloneRange();
        if (b.collapsed) {
            var c = this.getWrapItem(),
                d = a(c);
            b.setEndAfter(c.lastChild);
            var e = b.extractContents(),
                f = c.cloneNode();
            f.appendChild(e), d.after(f)
        }
    }, b.prototype.processPaste = function () {
        var c = this.clipboardHTML;
        null === this.clipboardHTML && (c = this.$pasteDiv.html(), this.restoreSelectionByMarkers(), a(window).scrollTop(this.scrollPosition));
        var d, e = this.triggerEvent("onPaste", [c], !1);
        if ("string" == typeof e && (c = e), c.match(/(class=\"?Mso|style=\"[^\"]*\bmso\-|w:WordDocument)/gi) ? (d = this.wordClean(c), d = this.clean(a("<div>").append(d).html(), !1, !0)) : d = this.clean(c, !1, !0), d = this.removeEmptyTags(d), "" !== d)
            if (this.selectionInCover()) this.getModule("cover").processPaste(d), this.finishRemainPasteProcess();
            else if (this.selectionInCaption()) {
            var f = this.getSelectionElement();
            try {
                var g = a(f).text(),
                    h = a("<div></div>").html(d).text().trim();
                if (h = a.Editable.unionToComplete(h), g.length + h.length > 100) {
                    this.log(b.ERROR_MESSAGE[b.ERROR_CODE.OVERFLOW_CAPTION_LIMIT]);
                    var i = 100 - g.length;
                    h = h.substring(0, i)
                }
                this.insertHTML(h, !1, f), this.finishRemainPasteProcess()
            } catch (j) {
                console.error(j)
            }
        } else this.processPasteBrunch(d), this.options.paragraphy && this.wrapText(!0), this.cleanupLists()
    }, b.prototype.processPasteBrunch = function (b) {
        var c = document.createDocumentFragment();
        a(c).append(a('<div class="be_paste_root">' + b + "</div>"));
        var d = document.createDocumentFragment(),
            e = this;
        if (c.childNodes.length > 0) {
            var f = c.firstChild,
                g = a(f);
            g.find("br.Apple-interchange-newline").remove(), g.find(".Apple-converted-space").removeClass("Apple-converted-space"), g.find(".inner_wrap_active").each(function (b, c) {
                c.firstChild ? a(c.firstChild).unwrap() : a(c).remove()
            }), this.browser.msie && (g.find("a u").each(function (b, c) {
                c.firstChild && a(c.firstChild).unwrap()
            }), g.find("a font").each(function (b, c) {
                c.firstChild && a(c.firstChild).unwrap()
            })), g.find(".active").removeClass("active"), g.find(".f-marker").remove(), g.find(".f-img-editor").each(function (b, c) {
                c.firstChild ? a(c.firstChild).unwrap() : a(c).remove()
            });
            for (var h = 0, i = f.childNodes.length; i > h; h++) {
                var j = f.childNodes[h];
                j && (1 == j.nodeType || 3 == j.nodeType && (j.nodeValue || 0 != j.nodeValue.length)) && this.processPasteWrapItem(d, j)
            }
            var k = d.querySelectorAll("img[data-uploading=true]");
            if (k && k.length > 0) {
                this.showProgressCode(a.Editable.ERROR_CODE.PROCESSING_PASTE);
                var l = k.length,
                    m = this.getModule("image"),
                    n = 1;
                m && a(k).each(function (b, c) {
                    m.uploadUrl(c.src, function (b, f) {
                        b ? a(c).replaceWith(a(b)) : a(c).remove(), NProgress.inc(n / l), n++, e.finishPasteProcess(d)
                    })
                })
            } else this.finishPasteProcess(d)
        } else this.finishPasteProcess(d)
    }, b.prototype.finishRemainPasteProcess = function () {
        this.hideProgress(), this.afterPaste()
    }, b.prototype.changeFirstSpace = function (b) {
        var c = a(b),
            d = c.text();
        if (d && 0 != d.trim().length && -1 != d.indexOf(" ")) {
            var e = this.getFirstTextNode(b),
                d = e.nodeValue;
            e.nodeValue = d.replace(/^\u0020/, "혻")
        }
    }, b.prototype.getFirstTextNode = function (a) {
        if (!a) return null;
        if (1 == a.nodeType) {
            if (a.hasChildNodes()) var b = a.childNodes;
            for (var c = 0, d = b.length; d > c; c++) {
                var e = b[c],
                    f = this.getFirstTextNode(e);
                if (f) return f
            }
        } else if (3 == a.nodeType) return a
    }, b.prototype.finishPasteProcess = function (b) {
        var c = b.querySelectorAll("[data-uploading]");
        if (be.log("finishPasteProcess", b, c.length), c && c.length > 0);
        else {
            var d = b.querySelectorAll(".item_type_text");
            a(d).each(a.proxy(function (c, d) {
                var e = a(d);
                "" == e.text().trim() && 0 == e.children().length ? b.removeChild(d) : this.clearUglyTextInBrunchWrapItem(e)
            }, this));
            var e = this.getModule("gridGallery");
            if (e) {
                var f = b.querySelectorAll(".item_type_gridGallery");
                f.length > 0 && a(f).each(function (a, b) {
                    jQuery(".wrap_img_float", b).removeAttr("style"), e.updateColumn(b)
                })
            }
            if (b.childNodes.length > 0) {
                var g = a(this.getWrapItem());
                g && 0 != g.length || this.insertHTML(a("<div>").append(this.makeTextWrap()).html()), g = a(this.getWrapItem()), this.isTextWrapItem(g.get(0)) && "" == g.text() && g.html(""), this.finishRemainPasteProcess();
                var h = b.lastChild,
                    i = !0,
                    j = !1,
                    k = this.getSelection(),
                    l = this.getSelectionTextInfo(g.get(0));
                if (this.isEmptyText(g)) g.replaceWith(b.childNodes);
                else if (this.browser.msie && 0 == k.isCollapsed) g.before(b), k.deleteFromDocument();
                else if (l.atStart && !l.atEnd) {
                    var m = this.isTextWrapItem(b.lastChild);
                    if (m) {
                        for (var n, o = document.createDocumentFragment(), p = b.lastChild, q = p.lastChild; n = p.firstChild;) o.appendChild(n);
                        var r = this.getRange();
                        k.removeAllRanges(), r.insertNode(o), r.setStartAfter(q), k.addRange(r), b.removeChild(p)
                    }
                    g.before(b), i = !1
                } else {
                    !l.atEnd && (b.childNodes.length > 1 || 1 == b.childNodes.length && !this.isTextWrapItem(b.firstChild)) ? (this.extractCurrentPoint(), j = !0) : l.atEnd || (i = !1, h = null);
                    var s = b.firstChild;
                    if (this.isTextWrapItem(s)) {
                        if (i) {
                            var t = g.get(0).lastChild;
                            t && 1 == t.nodeType && "BR" == t.tagName && a(t).remove(), g.append(a(s).contents()), this.clearUglyTextInBrunchWrapItem(g), 1 == b.childNodes.length && (h = g.get(0))
                        } else {
                            var u = a(s).contents(),
                                v = (u.length, document.createDocumentFragment()),
                                h = null;
                            a(s).contents().each(a.proxy(function (a, b) {
                                v.appendChild(b), h = b
                            }, this)), this.saveSelectionByMarkers(), this.getRange().insertNode(v), this.restoreSelectionByMarkers()
                        }
                        b.removeChild(b.firstChild)
                    }
                    if (b.childNodes.length > 0) {
                        var w = a(this.getWrapItem());
                        if (j) {
                            var x = a(b.lastChild),
                                y = w.next();
                            if (this.isTextWrapItem(x) && y.length > 0 && this.isTextWrapItem(y)) {
                                var z = y.get(0).firstChild;
                                a(z).before(x.html()), b.removeChild(b.lastChild), this.setSelection(z), this.clearUglyTextInBrunchWrapItem(y), i = !1
                            }
                        }
                        w.after(b), this.clearUglyTextInBrunchWrapItem(w)
                    }
                }
                if (this.callback("afterInsertModule", []), i)
                    if (h)
                        if (this.isTextWrapItem(h) || this.isBulletItem(h)) this.setSelectionEnd(h);
                        else {
                            var A = h.nextSibling;
                            if (A)
                                if (this.isTextWrapItem(A)) this.setSelection(A);
                                else {
                                    var B = this.getModuleByWrapItem(h);
                                    B && B.select && B.select(h)
                                }
                            else {
                                var C = this.makeTextWrap();
                                a(h).after(C), this.addFontFamily(C, focus)
                            }
                        }
                else this.setSelectionEnd(this.getWrapItem())
            } else this.finishRemainPasteProcess();
            this.resetBlockquoteStyle(!0), this.saveUndoStep()
        }
    };
    var c = ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre", "table", "tr", "td", "code", "tbody"],
        d = ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote"],
        e = ["h1", "h2", "h3", "h4", "h5", "h6"],
        f = ["img", "hr", "li"],
        g = ["span", "u", "strike", "b", "i", "s"],
        h = d.concat(g, "a");
    b.prototype.processPasteWrapItem = function (b, c) {
        if (c && c.nodeType) switch (c.nodeType) {
            case 1:
                var d = a(c);
                if (d.hasClass("wrap_item") && d.data("app") || d.hasClass("wrap_item item_type_text") || d.hasClass("wrap_item item_type_bullet")) d = this.processPasteBrunchWrapItem(d), d && 1 == d.length && (this.clearUglyStyleInBrunchWrapItem(d), b.appendChild(d.get(0)));
                else if (d.find(".wrap_item").length > 0) d.find(".wrap_item").each(a.proxy(function (a, c) {
                    this.processPasteWrapItem(b, c)
                }, this));
                else if ("IMG" == d.prop("tagName")) {
                    var e = d.data("app");
                    if (e && e.widthRatio) {
                        var f = this.getModule("image").make(e);
                        b.appendChild(f.get(0))
                    } else {
                        var g = this.validParent(b, b.lastChild);
                        this.processPasteRecursive(b, g, c)
                    }
                } else {
                    var g = this.validParent(b, b.lastChild);
                    this.processPasteRecursive(b, g, c)
                }
                break;
            case 3:
                var g = this.validParent(b, b.lastChild);
                this.processPasteRecursive(b, g, c)
        }
    }, b.prototype.processPasteBrunchWrapItem = function (a) {
        if (this.isTextWrapItem(a) || this.isBulletWrapItem(a)) {
            if (!this.hasPasteContents(a.get(0))) return null
        } else {
            a.find("br").remove();
            var b = this.getModuleByWrapItem(a);
            if (!b) return null;
            if (b.valid(a)) a.find('span[class=""]').remove();
            else {
                var c = a.data("app");
                if (!b.validData(c, !0)) return null;
                a = b.make(c)
            }
        }
        return a
    }, b.prototype.clearUglyStyleInBrunchWrapItem = function (b) {
        b.removeAttr("style"), b.find("[style]:not(" + this.options.hasStyleSelector + ")").removeAttr("style"), b.find(this.options.removeStyleSelector).removeAttr("style"), b.find("span[style], strike[style], u[style], b[style]").each(a.proxy(function (a, b) {
            this.resetStyleTag(b)
        }, this)), this.isTextWrapItem(b) && b.find("span:not([style])").each(function (b, c) {
            c.firstChild && a(c.firstChild).unwrap()
        })
    }, b.prototype.clearUglyTextInBrunchWrapItem = function (b) {
        b = a(b), b.html(b.html());
        var c = b.get(0);
        this.recursiveClearUglyText(c)
    }, b.prototype.recursiveClearUglyText = function (a) {
        if (a)
            if (1 == a.nodeType) {
                var b = a.childNodes;
                if (b && b.length > 0)
                    for (var c = 0, d = b.length; d > c; c++) this.recursiveClearUglyText(b[c])
            } else if (3 == a.nodeType) {
            var e = this.getClearUglyText(a.nodeValue);
            e = this.getValidText(e), a.nodeValue = e
        }
    }, b.prototype.getClearUglyText = function (a) {
        return a && (a = a.replace(/[\r\n]+/gi, "")), a && (a = a.replace(/\t/gi, "    ")), a && (a = a.replace(/\u00A0/gi, " ")), a || ""
    }, b.prototype.getValidText = function (b) {
        return b = this.getValidSpaceText(b), b = a.Editable.unionToComplete(b)
    }, b.prototype.getValidSpaceText = function (a) {
        for (var b = "혻", c = "", d = /([^\u0020]*)\u0020(\u0020*)(.*)/, e = a.match(d); e && 4 == e.length;) c += e[1] + " " + e[2].replace(/\u0020/g, b), a = e[3], e = a.match(d);
        return c += a, c.match(/^\u0020+/) && (c = c.replace(/^\u0020/, c.match(/^\u0020+/)[0].replace(/\u0020/g, b))), c = c.replace(/\u0020$/, b)
    }, b.prototype.processPasteRecursive = function (b, d, h) {
        if (void 0 !== h) {
            var i = this,
                j = d;
            if (a(d).hasClass("wrap_item") && d.nextSibling && (b.appendChild(this.makeTextWrap().html("").get(0)), j = b.lastChild), "string" != typeof h && h && 3 != h.nodeType) {
                if (1 == h.nodeType) {
                    var k = h.tagName.toLowerCase(),
                        l = a(h);
                    if (-1 != a.inArray(k, f)) {
                        if ("img" == k) {
                            var m = l.attr("src");
                            m && /^https?:\/\//.test(m) && (l.removeAllAttr(), l.attr("src", m), l.attr("data-uploading", !0), b.appendChild(h.cloneNode()))
                        } else if ("hr" == k) {
                            if (this.getModule("line")) {
                                var n = this.getModule("line").makeDefaultLineElement();
                                n && n.length > 0 && b.appendChild(n.get(0))
                            }
                        } else if ("li" == k) {
                            var o = a(h).find("a");
                            if (o && 1 == o.length && 0 == o.find("img").length) {
                                var p = a(i.makeTextWrap()).attr("class", i.getBulletWrapClass()).html("");
                                if (o.text() == a(h).text()) {
                                    var q = this.resetStyleTag(o[0]);
                                    q.innerHtml = o.text();
                                    var r = o.attr("href");
                                    a.Editable.isUrl(r) && (o.addClass("link"), o.attr("target", "_blank"), b.appendChild(p.append(q)[0]))
                                } else b.appendChild(p[0]), this.processPasteRecursiveChildren(b, p[0].lastChild, h)
                            } else if (a(h).text() && 0 != a(h).text().length && 0 == a(h).find("img, hr, br").length) {
                                var p = a(i.makeTextWrap()).attr("class", i.getBulletWrapClass());
                                p.html(a(h).text()), j.appendChild(p[0])
                            } else this.hasPasteContents(h) && this.processPasteRecursiveChildren(b, j.lastChild, h)
                        }
                    } else if (-1 != a.inArray(k, g)) {
                        if (this.hasPasteContents(h)) {
                            if ("i" != k) {
                                if ("s" == k) {
                                    var s = a("<strike></strike>");
                                    s.attr("style", l.attr("style")), s.html(l.html()), l = s, h = s.get(0)
                                }
                                h = this.resetStyleTag(h), ("span" != k || h.getAttribute("style")) && (j = this.validParent(b, j), j.appendChild(h.cloneNode()), j = j.lastChild)
                            } else j = j;
                            this.processPasteRecursiveChildren(b, j, h)
                        }
                    } else if ("a" == k) {
                        if ("" != a(h).text().trim()) {
                            h = this.resetStyleTag(h), j = this.validParent(b, j);
                            var r = l.attr("href");
                            a.Editable.isUrl(r) && (l.addClass("link"), l.attr("target", "_blank"), j.appendChild(h.cloneNode()))
                        }
                        this.hasPasteContents(h) && this.processPasteRecursiveChildren(b, j.lastChild, h)
                    } else if ("br" == k) {
                        j = this.validParent(b, j);
                        var t = document.createElement("br");
                        j.appendChild(t)
                    } else if (-1 != a.inArray(k, c) && h.childNodes.length > 0) {
                        if (this.hasPasteContents(h)) {
                            if (l.closest("a").length > 0) this.processPasteRecursiveChildren(b, b.lastChild.lastChild, h);
                            else {
                                if (-1 != a.inArray(k, e)) {
                                    var u = k; - 1 == a.inArray(u, ["h1", "h2", "h3"]) && (u = "h3"), b.appendChild(this.makeTextWrap(u).html("").get(0))
                                } else "blockquote" == k ? b.appendChild(this.makeTextWrap(k, "blockquote_type2").html("").get(0)) : this.hasOwnContents(h) && b.appendChild(this.makeTextWrap().html("").get(0));
                                this.processPasteRecursiveChildren(b, b.lastChild, h)
                            }
                        }
                    } else "br" == k ? "be_paste_root" == h.parentNode.className ? b.appendChild(this.makeTextWrap().get(0)) : j.appendChild(h.cloneNode()) : this.hasPasteContents(h) && this.processPasteRecursiveChildren(b, b.lastChild, h)
                }
            } else {
                if (h) {
                    var v = "";
                    "string" == typeof h ? v = h : h && (v = h.nodeValue), v = this.getClearUglyText(v)
                }
                if ("" != v) {
                    j = this.validParent(b, j);
                    var w = a("<div></div>");
                    a.Editable.isUrl(v) && 0 == a(h).closest("a").length ? w.append(this.makeLinkElement(v)) : w.text(v), j.innerHTML = j.innerHTML + w.html()
                }
                h.nextSibling || (j = this.validParent(b, j))
            }
        }
    }, b.prototype.hasPasteContents = function (b) {
        return a(b).text() && 0 != a(b).text().length || a(b).find("img, hr, br").length > 0
    }, b.prototype.hasOwnContents = function (b) {
        for (var d = b.childNodes, e = 0, f = d.length; f > e; e++) {
            var g = d[e];
            if (3 == g.nodeType) {
                var h = g.nodeValue;
                if ("" != h.replace(/[\s]+/g, "").trim()) return !0
            } else if (1 == g.nodeType) {
                var i = g.nodeName.toLowerCase();
                if (-1 == a.inArray(i, c)) return !0
            }
        }
        return !1
    }, b.prototype.isTag = function (a) {
        return void 0 === a || null === a ? !1 : 1 == a.nodeType
    }, b.prototype.validParent = function (b, c, d) {
        return this.isTag(c) && -1 != a.inArray(c.tagName.toLowerCase(), h) || (c = this.makeTextWrap().html("").get(0), b.appendChild(c)), c
    }, b.prototype.getLastElement = function (a) {
        for (var b = a.lastChild; b;) {
            var c = b.lastChild;
            if (!c || 1 != c.nodeType) return b;
            b = c
        }
    }, b.prototype.processPasteRecursiveChildren = function (a, b, c) {
        for (var d = 0, e = c.childNodes.length; e > d; d++) this.processPasteRecursive(a, b, c.childNodes[d])
    }, b.prototype.resetStyleTag = function (b) {
        var c = a(b),
            d = b.tagName.toLowerCase(),
            e = c.attr("style"),
            f = "",
            g = "",
            h = "",
            i = "",
            j = "";
        e && (e = e.toLowerCase(), f = -1 != e.indexOf("background-color:") ? c.css("background-color") : null, e = e.replace(/background\-color\:/gi, ""), g = -1 != e.indexOf("color:") ? c.css("color") : null, h = -1 != e.indexOf("font-family:") ? c.css("font-family") : null, h = this.getBrunchFontFamilyValue(h), i = -1 != e.indexOf("font-weight:") ? c.css("font-weight") : null, j = -1 != e.indexOf("text-decoration:") ? c.css("text-decoration") : null), f && (f = a.Editable.getHexColorByName(f), f = a.Editable.RGBToHex(f), -1 == a.inArray(f, this.options.backColors) && (f = null)), g && (g = a.Editable.getHexColorByName(g), g = a.Editable.RGBToHex(g), -1 == a.inArray(g, this.options.foreColors) && (g = null)), f && g && h && h == this.options.defaultFontFamily && g == this.options.defaultForeColor && f == this.options.defaultBackColor && (h = null, g = null, f = null);
        var k = {};
        if ("a" == b.tagName.toLowerCase() && (k.href = c.attr("href"), k.title = c.attr("title"), k.target = "_blank", "#00c3bd" == g && (g = null)), c.removeAllAttr(), c.attr(k), "span" != d) {
            if (f || g || h) {
                var l = a("<span></span>");
                f && l.css("background-color", f), g && l.css("color", g), h && l.css("fontFamily", h), l.html(c.html()), c.html(""), c.append(l)
            }
        } else if ("span" == d) {
            f && c.css("background-color", f), g && c.css("color", g), h && c.css("fontFamily", h);
            var m = null;
            if (i >= 700 || "bold" == i) {
                var n = a("<b></b>");
                n.html(c.html()), c.html(""), c.append(n), m = n
            }
            var o = null;
            if (j) {
                if (-1 != j.indexOf("line-through")) {
                    o = m ? m : c;
                    var p = a("<strike></strike>");
                    p.html(o.html()), o.html(""), o.append(p), m = p
                }
                if (-1 != j.indexOf("underline")) {
                    o = m ? m : c;
                    var q = a("<u></u>");
                    q.html(o.html()), o.html(""), o.append(q)
                }
            }
        }
        return c.get(0)
    }, b.prototype.plainPasteClean = function (b) {
        var c = a("<div>").html(b);
        c.find("h1, h2, h3, h4, h5, h6, pre, blockquote").each(function (b, c) {
            a(c).replaceWith("<p>" + a(c).html() + "</p>")
        });
        for (var d = function (b, c) {
                a(c).replaceWith(a(c).html())
            }; c.find("strong, em, strike, b, u, i, sup, sub, span, a").length;) c.find("strong, em, strike, b, u, i, sup, sub, span, a").each(d);
        return c.html()
    }, b.prototype.removeEmptyTags = function (b) {
        var c = a("<div>").html(b);
        return c.find("*:empty:not(br, img, td, th)").remove(), c.html(c.html().replace(/\u0009/gi, "").trim()), c.html()
    }, b.prototype.cleanupLists = function () {
        this.$element.find("ul, ol").each(function (b, c) {
            var d = a(c);
            if (d.find(".close-ul, .open-ul, .close-ol, .open-ol, .open-li, .close-li").length > 0) {
                var e = "<" + c.tagName.toLowerCase() + ">" + d.html() + "</" + c.tagName.toLowerCase() + ">";
                e = e.replace(new RegExp('<span class="close-ul" data-fr-verified="true"></span>', "g"), "</ul>"), e = e.replace(new RegExp('<span class="open-ul" data-fr-verified="true"></span>', "g"), "<ul>"), e = e.replace(new RegExp('<span class="close-ol" data-fr-verified="true"></span>', "g"), "</ol>"), e = e.replace(new RegExp('<span class="open-ol" data-fr-verified="true"></span>', "g"), "<ol>"), e = e.replace(new RegExp('<span class="close-li" data-fr-verified="true"></span>', "g"), "</li>"), e = e.replace(new RegExp('<span class="open-li" data-fr-verified="true"></span>', "g"), "<li>"), d.replaceWith(e)
            }
        });
        for (var b = this.$element.find("ol + ol, ul + ul"), c = 0; c < b.length; c++) {
            var d = a(b[c]);
            d.prev().append(d.html()), d.remove()
        }
        this.$element.find("li > td").remove(), this.$element.find("li:empty").remove(), this.$element.find("li td:empty").append("</br>"), this.$element.find("ul, ol").each(a.proxy(function (b, c) {
            var d = a(c);
            0 === d.find(this.valid_nodes.join(",")).length && d.remove()
        }, this)), this.$element.find("li > td").remove(), this.$element.find("li:empty").remove(), this.$element.find("li td:empty").append("</br>")
    }, b.prototype.wordClean_old = function (a) {
        a = a.replace(/<p(.*?)class="MsoListParagraph"([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<ul><li><p>$3</p></li></ul>"), a = a.replace(/<p(.*?)class="MsoListParagraphCxSpFirst"([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<ul><li><p>$3</p></li>"), a = a.replace(/<p(.*?)class="MsoListParagraphCxSpMiddle"([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li><p>$3</p></li>"), a = a.replace(/<p(.*?)class="MsoListParagraphCxSpLast"([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li><p>$3</p></li></ul>"), a = a.replace(/<span([^<]*?)style="mso-list:Ignore"([\s\S]*?)>([\s\S]*?)<span/gi, "<span><span"), a = a.replace(/<!--\[if \!supportLists\]-->([\s\S]*?)<!--\[endif\]-->/gi, ""), a = a.replace(/(\n|\r| class=(")?Mso[a-zA-Z]+(")?)/gi, " "), a = a.replace(/<!--[\s\S]*?-->/gi, ""), a = a.replace(/<(\/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>/gi, "");
        for (var b = ["style", "script", "applet", "embed", "noframes", "noscript"], c = 0; c < b.length; c++) {
            var d = new RegExp("<" + b[c] + ".*?" + b[c] + "(.*?)>", "gi");
            a = a.replace(d, "")
        }
        a = a.replace(/([\w\-]*)=("[^<>"]*"|'[^<>']*'|\w+)/gi, ""), a = a.replace(/&nbsp;/gi, "");
        var e;
        do e = a, a = a.replace(/<[^\/>][^>]*><\/[^>]+>/gi, ""); while (a != e);
        return a
    }, b.prototype.wordClean = function (a) {
        var b = a.match(/<!--StartFragment-->(.*)<!--EndFragment-->/);
        return b && b.length > 1 ? b[1] : this.wordClean_old(a)
    }, b.prototype.isClosingTag = function (a) {
        return null !== a.match(/^<\/([a-zA-Z0-9]+)([^<]+)*>$/gi)
    }, b.prototype.tagName = function (a) {
        return a.replace(/^<\/?([a-zA-Z0-9]+)([^\'\"]*[^<]+[^\'\"]*)*>$/gi, "$1").toLowerCase()
    }, b.prototype.isSelfClosingTag = function (a) {
        var b = ["br", "button", "input", "img", "hr"],
            c = "string" == typeof a ? this.tagName(a) : a.tagName.toLowerCase();
        return b.indexOf(c) >= 0
    }, b.prototype.tabs = function (a) {
        for (var b = "", c = 0; a > c; c++) b += "  ";
        return b
    }, b.prototype.cleanTags = function (a) {
        var b, c, d, e, f = ["P", "PRE", "BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6", "DIV", "UL", "OL", "LI", "TABLE", "TBODY", "THEAD", "TFOOT", "TR", "TH", "TD"],
            g = [],
            h = [];
        for (a = a.replace(/\n/gi, ""), c = 0; c < a.length; c++)
            if (b = a.charAt(c), "<" == b) {
                var i = a.indexOf(">", c + 1);
                if (-1 !== i) {
                    var j = a.substring(c, i + 1),
                        k = this.tagName(j),
                        l = this.isClosingTag(j);
                    if (this.isSelfClosingTag(j)) h.push(j);
                    else if (l)
                        for (d = !1, e = !0; d === !1 && void 0 !== e;) e = g.pop(), void 0 !== e && e.tag_name !== k ? h.splice(e.i, 1) : (d = !0, void 0 !== e && h.push(j));
                    else h.push(j), g.push({
                        tag_name: k,
                        i: h.length - 1
                    });
                    c = i
                }
            } else h.push(b);
        for (; g.length > 0;) e = g.pop(), h.splice(e.i, 1);
        for (a = "", g = 0, c = 0; c < h.length; c++) 1 == h[c].length ? a += h[c] : f.indexOf(this.tagName(h[c]).toUpperCase()) < 0 ? a += h[c] : this.isSelfClosingTag(h[c]) ? a += h[c] : this.isClosingTag(h[c]) ? (g -= 1, a.length > 0 && "\n" == a[a.length - 1] && (a += this.tabs(g)), a += h[c] + "\n") : (a += "\n" + this.tabs(g) + h[c], g += 1);
        return "\n" == a[0] && (a = a.substring(1, a.length)), "\n" == a[a.length - 1] && (a = a.substring(0, a.length - 1)), a
    }, b.prototype.clean = function (b, c, d, e, f) {
        f || (f = a.merge([], this.options.allowedAttrs)), e || (e = a.merge([], this.options.allowedTags)), c || f.indexOf("id") > -1 && f.splice(f.indexOf("id"), 1), b = b.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ""), b = b.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
        var g = new RegExp("<\\/?((?!(?:" + e.join("|") + "))\\w+)[^>]*?>", "gi");
        b = b.replace(g, "");
        var h = new RegExp('<([^>]*)(src|href)=(\'[^\']*\'|""[^""]*""|[^\\s>]+)([^>]*)>', "gi");
        return b = b.replace(h, a.proxy(function (a, b, c, d, e) {
            var f = d.replace(/^["'](.*)["']\/?$/gi, "$1");
            return !/^img/i.test(b) || /^https?:\/\//i.test(f) || /^\/\//.test(f) ? "<" + b + c + '="' + this.sanitizeURL(f) + '"' + e + ">" : /^data:/.test(f) ? "" : "<div>" + f + "</div>"
        }, this)), this.pasting && this.copiedText === a("<div>").html(b).text() && (d = !1, c = !0), d, b = this.cleanTags(b, !0)
    }, b.prototype.cleanNewLine = function (a) {
        var b = new RegExp("\\n", "g");
        return a.replace(b, "")
    }, b.prototype.initElementStyle = function () {
        this.editableDisabled || this.enableContenteditable(!0);
        var a = "cloud-element froala-element " + this.options.editorClass;
        this.browser.msie && b.getIEversion() < 9 && (a += " ie8"), this.$element.css("outline", 0), this.browser.msie || (a += " not-msie"), this.$element.addClass(a)
    }, b.prototype.enableContenteditable = function (a) {
        this.$body && (this.getModule("cover") && this.getModule("cover").enableContenteditable(a), this.$body.attr("contenteditable", a))
    }, b.prototype.enableEditorTool = function (b) {
        this.enabledEditorTool = b, b ? (this.$header.show(), this.$side_bttn_wrapper.show(), setTimeout(a.proxy(function () {
            this.$side_bttn_wrapper.css("opacity", 1)
        }, this), 0), a(".brunch_header").show()) : (this.clearSelection(), this.$header.hide(), this.$side_bttn_wrapper.css("opacity", 0), setTimeout(a.proxy(function () {
            this.$side_bttn_wrapper.hide()
        }, this), this.options.animationDuration)), this.enableEditorCoverTool(b)
    }, b.prototype.enableEditorCoverTool = function (a) {
        a ? (this.$cover_bttn_wrapper.show(), this.$cover_bttn_wrapper.css("opacity", 1)) : (this.$cover_bttn_wrapper.css("opacity", 0), this.$cover_bttn_wrapper.hide())
    }, b.prototype.initUndoRedo = function () {
        (this.isEnabled("undo") || this.isEnabled("redo")) && (this.undoStack = [], this.undoIndex = 0), this.disableBrowserUndo()
    }, b.prototype.enableTyping = function () {
        this.typingTimer = null, this.$element.on("keydown", a.proxy(function (c) {
            if (this.enabledEditorTool && (!this.isModuleActive() || this.selectionInCaption())) {
                var d = b.getKey(c);
                clearTimeout(this.typingTimer), this.ajaxSave = !1, this.typingTimer = setTimeout(a.proxy(function () {
                    d.isUndoRedoKey() || d.isMetaKey() || this.saveUndoStep(), this.sync()
                }, this), Math.max(this.options.typingTimer, 500))
            }
        }, this))
    }, b.prototype.removeMarkersByRegex = function (a) {
        return a.replace(/<span[^>]*? class\s*=\s*["']?f-marker["']?[^>]+>([\S\s][^\/])*<\/span>/gi, "")
    }, b.prototype.getImageHTML = function () {
        return JSON.stringify({
            src: this.$body.find("img").attr("src"),
            style: this.$body.find("img").attr("style"),
            alt: this.$body.find("img").attr("alt"),
            width: this.$body.find("img").attr("width"),
            link: this.$body.find("a").attr("href"),
            link_title: this.$body.find("a").attr("title"),
            link_target: this.$body.find("a").attr("target")
        })
    }, b.prototype.getLinkHTML = function () {
        return JSON.stringify({
            body: this.$body.html(),
            href: this.$body.attr("href"),
            title: this.$body.attr("title"),
            popout: this.$body.hasClass("popout"),
            nofollow: "nofollow" == this.$body.attr("ref"),
            blank: "_blank" == this.$body.attr("target"),
            left: this.$body.closest(".navbar-left").length > 0,
            "class": this.$body.attr("class").replace(/froala-element/, "").replace(/not-msie/, "").replace(/ +(?= )/g, "").split(" ").sort().join(" ")
        })
    }, b.prototype.getHTML = function (a, b) {
        void 0 === b && (b = !1), void 0 === a && (a = !1), this.$element.find("a").data("fr-link", !0), b && this.$element.find("p, h1, h2, h3, h4, h5, h6, pre, blockquote, table, ul, ol, img").addClass("fr-tag");
        var c = this.$element.html();
        for (this.$element.find(".f-img-editor > img").removeClass("fr-fin fr-fil fr-fir"), this.$element.find("p, h1, h2, h3, h4, h5, h6, pre, blockquote, table, ul, ol, img").removeClass("fr-tag"), c = this.syncCleanHTML(c, a), c = c.replace(/\s*contenteditable="[^"]*"/gi, ""), c = c.replace(/<a[^>]*?><\/a>/g, ""), a || (c = this.removeMarkersByRegex(c)), c = c.replace(/<span[^>]*? class\s*=\s*["']?f-img-handle[^>]+><\/span>/gi, ""); c.match(/^([\S\s]*)<span[^>]*? class\s*=\s*["']?f-img-editor[^>]+>([\S\s]*?)<\/span>([\S\s]*)$/);) c = c.replace(/^([\S\s]*)<span[^>]*? class\s*=\s*["']?f-img-editor[^>]+>([\S\s]*?)<\/span>([\S\s]*)$/i, "$1$2$3");
        for (; c.match(/^([\S\s]*)<span[^>]*? class\s*=\s*["']?f-img-wrap[^>]+>([\S\s]*?)<\/span>([\S\s]*)$/);) c = c.replace(/^([\S\s]*)<span[^>]*? class\s*=\s*["']?f-img-wrap[^>]+>([\S\s]*?)<\/span>([\S\s]*)$/i, "$1$2$3");
        return c = c.replace(/ data-fr-verified="true"/gi, ""), this.options.simpleAmpersand && (c = c.replace(/\&amp;/gi, "&")), c = c.replace(/\n/gi, ""), c = c.replace(/\u200B/gi, "")
    }, b.prototype.getText = function () {
        return this.$element.text()
    }, b.prototype.initAjaxSaver = function () {
        this.ajaxHTML = this.getHTML(), this.ajaxSave = !0, this.ajaxInterval = setInterval(a.proxy(function () {
            var a = this.getHTML();
            this.ajaxHTML != a && this.ajaxSave && (this.options.autosave && this.save(), this.ajaxHTML = a), this.ajaxSave = !0
        }, this), Math.max(this.options.autosaveInterval, 100))
    }, b.prototype.disableBrowserUndo = function () {
        a("body").keydown(function (a) {
            var b = a.which,
                c = (a.ctrlKey || a.metaKey) && !a.altKey;
            if (c) {
                if (75 == b) return a.preventDefault(), !1;
                if (90 == b && a.shiftKey) return a.preventDefault(), !1;
                if (90 == b) return a.preventDefault(), !1
            }
        })
    }, b.prototype.getSelectionIndices = function (b, c) {
        if (b.parentNode) {
            for (var d = a(b.parentNode), e = d.hasClass("cloud-element"), f = d.contents(), g = !1, h = -1, i = 0, j = f.length; j > i; i++) {
                var k = f[i];
                if (k && (3 == k.nodeType ? (g || h++, g = !0) : h++, k == b)) {
                    c.push(h);
                    break
                }
            }
            e || this.getSelectionIndices(d.get(0), c)
        }
    }, b.prototype.saveUndoStep = function () {
        if (this.isEnabled("undo") || this.isEnabled("redo")) {
            for (; this.undoStack.length > this.undoIndex;) this.undoStack.pop();
            this.getModule("cover").beforeSaveUndoStep();
            var a = this.getHTML(!0);
            if (this.previewDraw(), this.undoStack[this.undoIndex - 1] && this.removeMarkersByRegex(this.undoStack[this.undoIndex - 1].html) == a) return !1;
            var b = [];
            if (this.selectionInEditor()) {
                var c = this.getSelection(),
                    d = c.anchorNode;
                b.push(c.anchorOffset), this.getSelectionIndices(d, b)
            }
            this.undoStack.push({
                position: b,
                html: this.getHTML(!0)
            }), this.undoIndex++, this.refreshUndoRedo(), this.onChangeUndoRedoStack()
        }
    }, b.prototype.resaveUndoStep = function () {
        (this.isEnabled("undo") || this.isEnabled("redo")) && this.undoStack.length == this.undoIndex && (this.undoStack.pop(), this.undoIndex--, this.saveUndoStep())
    }, b.prototype.initShortcuts = function () {
        this.options.shortcuts && this.$element.on("keydown", a.proxy(function (a) {
            if (!this.enabledEditorTool) return !0;
            if (!this.selectionInEditor()) return !0;
            var c = a.which,
                d = ((a.ctrlKey || a.metaKey) && !a.altKey, b.getKey(a));
            if ((this.selectionInCover() || this.selectionInCaption()) && (d.isShortcutBold() || d.isShortcutUnderline() || d.isShortcutStrikeThrough() || d.isShortcutLink() || d.isShortcutItalic())) return !1;
            if (d.isMetaKey()) {
                if (d.isShortcutBold()) return this.execDefaultShortcut("bold"), !1;
                if (d.isShortcutUnderline()) return this.execDefaultShortcut("underline"), !1;
                if (d.isShortcutStrikeThrough()) return this.execDefaultShortcut("strikeThrough"), !1;
                if (d.isShortcutLink()) return this.execDefaultShortcut("createLink"), !1;
                if (d.isRedo()) return this.redo(), a.stopPropagation(), !1;
                if (d.isUndo()) return this.undo(), a.stopPropagation(), !1;
                if (d.isShortcutItalic()) return !1
            }
            this.isModuleActive() || this.selectionInCaption() || 9 != c || a.shiftKey ? 9 == c && a.shiftKey && a.preventDefault() : (a.stopPropagation(), a.preventDefault(), this.insertHTML("&nbsp;&nbsp;&nbsp;&nbsp;", !1))
        }, this))
    }, b.prototype.textEmpty = function (b) {
        var c = a(b).text().replace(/(\r\n|\n|\r|\t)/gm, "");
        return ("" === c || b === this.$element.get(0)) && 0 === a(b).find("br").length
    }, b.prototype.focus = function (c) {
        if (void 0 !== c && null != c) return void a(c).focus();
        if (void 0 === c && "" !== this.text() && !this.$body.is(":focus")) return void(this.browser.msie || this.$body.focus());
        var d = a(window).scrollTop();
        !this.pasting && (this.browser.webkit || this.$body.blur(), this.$body.focus()), this.pasting && !this.$body.is(":focus") && this.$body.focus(), a(window).scrollTop(d);
        var e = this.getRange();
        if ("" === this.text() && e && (0 === e.startOffset || e.startContainer === this.$body.get(0))) {
            var f, g, h = this.getSelectionElements();
            if (h.length >= 1 && h[0] !== this.$body.get(0) && h[0] !== this.$element.get(0))
                for (f = 0; f < h.length; f++)
                    if (g = h[f], !this.textEmpty(g)) return void this.setSelection(g);
            for (h = this.$body.find(b.VALID_NODES.join(",")), f = 0; f < h.length; f++)
                if (g = h[f], !this.textEmpty(g)) return void this.setSelection(g);
            this.setSelection(this.$body.get(0))
        }
    }, b.prototype.initFocus = function (b) {
        if (void 0 !== b && null != b) return void a(b).focus();
        if (void 0 === b && "" !== this.text() && !this.$body.is(":focus")) return void(this.browser.msie || this.$body.focus());
        var c = a(window).scrollTop();
        !this.pasting && (this.browser.webkit || this.$body.blur(), this.$body.focus()), this.pasting && !this.$body.is(":focus") && this.$body.focus(), a(window).scrollTop(c);
        var d = this.getRange();
        if ("" === this.text() && d && (0 === d.startOffset || d.startContainer === this.$body.get(0))) {
            var e, f, g = this.getSelectionElements();
            if (g.length >= 1 && g[0] !== this.$body.get(0) && g[0] !== this.$element.get(0))
                for (e = 0; e < g.length; e++)
                    if (f = g[e], this.isOrInTextWrapItem(f)) return void this.setSelection(f);
            for (g = this.$body.find(".wrap_item"), e = 0; e < g.length; e++)
                if (f = g[e]) {
                    if (this.isTextWrapItem(f)) return void this.setSelection(f);
                    if (this.isSelectableWrapItem(f)) {
                        var h = this.getModuleByWrapItem(f);
                        if (h) return void h.select(f)
                    }
                }
            this.setSelection(this.$body.get(0))
        }
    }, b.prototype.insertHTML = function (b, c, d) {
        d ? a(d).focus() : this.focus();
        var e, f;
        if (this.browser.msie)
            if (window.getSelection) {
                if (e = window.getSelection(), e.getRangeAt && e.rangeCount) {
                    f = e.getRangeAt(0), f.deleteContents();
                    var g = document.createElement("div");
                    g.innerHTML = b;
                    for (var h, i, j = document.createDocumentFragment(); h = g.firstChild;) i = j.appendChild(h);
                    var k = j.firstChild;
                    f.insertNode(j), i && (f = f.cloneRange(), f.setStartAfter(i), c ? f.setStartBefore(k) : f.collapse(!0), e.removeAllRanges(), e.addRange(f))
                }
            } else(e = document.selection) && "Control" != e.type && (f = e.createRange(), f.collapse(!0), e.createRange().pasteHTML(b), c && (f = e.createRange(), f.setEndPoint("StartToStart", f), f.select()));
        else document.execCommand("inserthtml", null, b), d ? a(d).focus() : this.focus()
    }, b.prototype.execDefaultShortcut = function (a, b) {
        return this.isEnabled(a) ? (this.exec(a, b), !1) : !0
    }, b.prototype.initEditor = function () {
        var c = "be_editor_toolbar";
        this.isTouch() && (c += " touch"), this.browser.msie && b.getIEversion() < 9 && (c += " ie8"), this.$editor = a('<div class="' + c + '" style="display: none;">'), a("body").append(this.$editor), this.options.inlineMode ? this.initInlineEditor() : this.initBasicEditor()
    }, b.prototype.toolbarTop = function () {
        a(window).on("scroll resize", a.proxy(function () {
            this.options.toolbarFixed || this.options.inlineMode || (a(window).scrollTop() > this.$box.offset().top && a(window).scrollTop() < this.$box.offset().top + this.$box.height() ? (this.$editor.addClass("f-scroll"), this.$box.css("padding-top", this.$editor.height()), this.$editor.css("top", a(window).scrollTop() - this.$box.offset().top)) : a(window).scrollTop() < this.$box.offset().top && (this.$editor.removeClass("f-scroll"), this.$box.css("padding-top", ""), this.$editor.css("top", "")))
        }, this))
    }, b.prototype.initBasicEditor = function () {
        this.$element.addClass("f-basic"), this.$popup_editor = this.$editor.clone(), this.$popup_editor.appendTo(a("body")), this.$editor.addClass("f-basic").show(), this.$editor.insertBefore(this.$element), this.toolbarTop()
    }, b.prototype.initInlineEditor = function () {
        this.$popup_editor = this.$editor, this.$editor.addClass("f-inline")
    }, b.prototype.initDrag = function () {
        this.drag_support = {
            filereader: "undefined" != typeof FileReader,
            formdata: !!window.FormData,
            progress: "upload" in new XMLHttpRequest
        }
    }, b.prototype.initOptions = function () {
        this.setDimensions(), this.setSpellcheck(), this.setTextNearImage(), this.setZIndex(), this.setTheme()
    }, b.prototype.isTouch = function () {
        return !1
    }, b.prototype.setTextNearImage = function (a) {
        void 0 !== a && (this.options.textNearImage = a), this.options.textNearImage === !0
    }, b.prototype.setPlaceholder = function (a) {
        a && (this.options.placeholder = a), this.$element.attr("data-placeholder", this.options.placeholder)
    }, b.prototype.isFocus = function () {
        return this.$body.is(":focus")
    }, b.prototype.isEmpty = function () {
        var a = this.$body.text().replace(/(\r\n|\n|\r|\t|\u0020|\u200B)/gm, "");
        return "" === a && 0 === this.$body.find(".item_type_preview").length && 0 === this.$body.find("img, iframe, input, hr").length && 0 === this.$body.find("p > br, div > br").length && 0 === this.$body.find("li, h1, h2, h3, h4, h5, h6, blockquote, pre").length
    }, b.prototype.isEmptyText = function (a) {
        return "" === a.text().replace(/(\r\n|\n|\r|\t|\u0020|\u200B)/gm, "")
    }, b.prototype.fakeEmpty = function (a) {
        void 0 === a && (a = this.$element);
        var b = a.text().replace(/(\r\n|\n|\r|\t)/gm, "");
        return "" === b && 1 == a.find("p, div").length && 1 == a.find("p > br, div > br").length && 0 === a.find("img, table, iframe, input, hr").length
    }, b.prototype.setPlaceholderEvents = function () {
        this.$element.on("focus", a.proxy(function () {
            "" === this.$element.text() && this.focus(!1)
        }, this)), this.$element.on("keyup keydown focus placeholderCheck", a.proxy(function (b) {
            if (!this.enabledEditorTool) {
                var c = (b.which, (b.ctrlKey || b.metaKey) && !b.altKey);
                if (!c) return !1
            }
            if (this.pasting) return !1;
            if (!this.isEmpty() || this.fakeEmpty())
                if (!this.$element.find("p").length && this.options.paragraphy) {
                    this.wrapText();
                    var d = this.$element.find("p, div").not(".cover_wrap, .cover_wrap *");
                    d.length && "" === this.text() || this.$element.removeClass("f-placeholder")
                } else this.fakeEmpty() === !1 || this.$element.find(a.Editable.VALID_NODES.join(",")).length > 1 ? this.$element.removeClass("f-placeholder") : this.$element.addClass("f-placeholder");
            else {
                var e, f = this.selectionInEditor() || this.$body.is(":focus");
                this.options.paragraphy ? (e = a("<p><br/></p>"), this.$element.html(e), f && this.setSelection(e.get(0)), this.$element.addClass("f-placeholder")) : this.$element.addClass("f-placeholder")
            }
        }, this)), this.$element.trigger("placeholderCheck")
    }, b.prototype.setDimensions = function (a, b, c, d) {
        a && (this.options.height = a), b && (this.options.width = b), c && (this.options.minHeight = c), d && (this.options.maxHeight = d), "auto" != this.options.height && this.$element.css("height", this.options.height), "auto" != this.options.minHeight && this.$element.css("minHeight", this.options.minHeight), "auto" != this.options.maxHeight && this.$element.css("maxHeight", this.options.maxHeight), "auto" != this.options.width && this.$box.css("width", this.options.width)
    }, b.prototype.setZIndex = function (a) {
        a && (this.options.zIndex = a), this.$editor.css("z-index", this.options.zIndex), this.$popup_editor.css("z-index", this.options.zIndex + 1)
    }, b.prototype.setTheme = function (a) {
        a && (this.options.theme = a), null != this.options.theme && (this.$editor.addClass(this.options.theme + "-theme"), this.$popup_editor.addClass(this.options.theme + "-theme"), this.$box && this.$box.addClass(this.options.theme + "-theme"))
    }, b.prototype.setSpellcheck = function (a) {
        void 0 !== a && (this.options.spellcheck = a), this.$element.attr("spellcheck", this.options.spellcheck)
    }, b.prototype.customizeText = function (b) {
        if (b) {
            var c = this.$editor.find("[title]").add(this.$popup_editor.find("[title]"));
            c.each(a.proxy(function (c, d) {
                for (var e in b) a(d).attr("title").toLowerCase() == e.toLowerCase() && a(d).attr("title", b[e])
            }, this)), c = this.$editor.find('[data-text="true"]').add(this.$popup_editor.find('[data-text="true"]')), c.each(a.proxy(function (c, d) {
                for (var e in b) a(d).text().toLowerCase() == e.toLowerCase() && a(d).text(b[e])
            }, this))
        }
    }, b.prototype.setCustomText = function (a) {
        a && (this.options.customText = a), this.options.customText && this.customizeText(this.options.customText)
    }, b.prototype.execHTML = function () {
        this.html()
    }, b.prototype.command_dispatcher = {
        align: function (a) {
            var b = this.buildDropdownAlign(a),
                c = this.buildDropdownButton(a, b, "fr-selector");
            return c
        },
        formatBlock: function (a) {
            var b = this.buildDropdownFormatBlock(a),
                c = this.buildDropdownWithArrow(a, b, "fr-formatBlock");
            return c
        },
        blockquote: function (a) {
            var b = this.buildDropdownBlockquote(a),
                c = this.buildDropdownButton(a, b, "fr-blockquote");
            return c
        },
        bullet: function (a) {
            return this.buildDefaultButton(a)
        },
        createLink: function (a) {
            return this.buildDefaultButton(a)
        },
        insertImage: function (a) {
            return this.buildDefaultButton(a)
        },
        undo: function (a) {
            return this.buildDefaultButton(a)
        },
        redo: function (a) {
            return this.buildDefaultButton(a)
        },
        addImage: function () {}
    }, b.prototype.setButtons = function (a, c) {
        this.isTouch() && c.addClass("touch");
        for (var d, e, f = 0; f < a.length; f++) {
            var g = a[f];
            if ("sep" != g) {
                var h = b.commands[g];
                if (void 0 !== h) {
                    h.cmd = g;
                    var i = this.command_dispatcher[h.cmd];
                    i ? c.append(i.apply(this, [h])) : h.seed ? (d = this.buildDefaultDropdown(h), e = this.buildDropdownButton(h, d)) : (e = this.buildDefaultButton(h), c.append(e))
                } else {
                    if (h = this.options.customButtons[g], void 0 === h) {
                        if (h = this.options.customDropdowns[g], void 0 === h) continue;
                        e = this.buildCustomDropdown(h), this.$bttn_wrapper.append(e);
                        continue
                    }
                    e = this.buildCustomButton(h), this.$bttn_wrapper.append(e)
                }
            } else this.options.inlineMode ? c.append('<div class="f-clear"></div><hr/>') : c.append('<span class="f-sep"></span>')
        }
        c.find('button[data-cmd="undo"], button[data-cmd="redo"]').prop("disabled", !0)
    }, b.prototype.setSelectionButtons = function (b) {
        b && (this.options.buttons = b), this.$editor.append('<div class="be_editor_selection" id="bttn-wrapper-' + this._id + '" style="display: none;">'), this.$bttn_wrapper = this.$editor.find("#bttn-wrapper-" + this._id), this.setButtons(this.options.buttons, this.$bttn_wrapper), this.buildCreateLink(), this.options.mediaManager && this.buildMediaManager(), this.bindButtonEvents(this.$bttn_wrapper);
        var c = a.proxy(this.resetBlockquoteStyle, this);
        this.options.fontFamilyCallback = c, this.options.boldCallback = c, this.options.underlineCallback = c, this.options.strikeThroughCallback = c, this.options.foreColorCallback = c, this.options.backColorCallback = c
    }, b.prototype.resetBlockquoteStyle = function (b) {
        var c = !1;
        this.saveSelectionByMarkers();
        var d = this;
        a(this.getSelectionElements()).each(function (a, b) {
            (d.resetBlockquoteElementStyle(b) || d.resetBulletElementStyle(b)) && (c = !0)
        }), this.restoreSelectionByMarkers(), c && b && this.resaveUndoStep()
    }, b.prototype.resetBlockquoteElementStyle = function (b) {
        var c = !1;
        if ("blockquote" == b.tagName.toLowerCase()) {
            var d = a(b);
            d.find("span[style], b, u, strike").each(function (b, d) {
                var e = d.firstChild;
                e && (a(e).unwrap(), c = !0)
            })
        }
        return c
    }, b.prototype.resetBulletElementStyle = function (b) {
        var c = !1;
        if (this.isBulletWrapItem(b)) {
            var d = a(b);
            d.find("span[style], b, u, strike").each(function (b, d) {
                var e = d.firstChild;
                e && (a(e).unwrap(), c = !0)
            })
        }
        return c
    }, b.prototype.makeTiaraData = function (a) {
        return a && a.tiara ? ' data-tiara="' + a.tiara + '"' : ""
    }, b.prototype.buildDefaultButton = function (a) {
        var b = a.isNew ? "be_button add_new_ico" : "be_button",
            c = '<button type="button" class="' + b + '" title="' + a.title + '" data-cmd="' + a.cmd + '"' + this.makeTiaraData(a) + ">";
        return a.isNew && (c += '<i class="ico_menubar_new"></i>'), c += void 0 === this.options.icons[a.cmd] ? this.addButtonIcon(a) : this.prepareIcon(this.options.icons[a.cmd], a.title), c += "</button>"
    }, b.prototype.prepareIcon = function (a, b) {
        switch (a.type) {
            case "font":
                return this.addButtonIcon({
                    icon: a.value
                });
            case "img":
                return this.addButtonIcon({
                    icon_img: a.value,
                    title: b
                });
            case "txt":
                return this.addButtonIcon({
                    icon_txt: a.value
                })
        }
    }, b.prototype.addButtonIcon = function (a) {
        if (a.icon_alt) {
            var b = a.icon ? a.icon : "for-text";
            return '<i class="' + b + '">' + a.icon_alt + "</i>"
        }
        return a.icon ? '<i class="' + a.icon + '"></i>' : a.icon_img ? '<img src="' + a.icon_img + '" alt="' + a.title + '"/>' : a.icon_txt ? "<i>" + a.icon_txt + "</i>" : a.title
    }, b.prototype.buildCustomButton = function (b) {
        var c = a('<button type="button" class="be_button" title="' + b.title + '">' + this.prepareIcon(b.icon, b.title) + "</button>");
        return c.on("click touchend", a.proxy(function (a) {
            a.stopPropagation(), a.preventDefault(), b.callback.apply(this)
        }, this)), c
    }, b.prototype.callDropdown = function (b, c, d) {
        b.on("click touch", a.proxy(function () {
            c.options[d].apply(this)
        }, this))
    }, b.prototype.buildCustomDropdown = function (b) {
        var c = '<div class="fr-bttn fr-dropdown">';
        c += '<button type="button" class="fr-trigger" title="' + b.title + '">' + this.prepareIcon(b.icon, b.title) + "</button>";
        var d = a('<ul class="fr-dropdown-menu"></ul>');
        for (var e in b.options) {
            var f = a('<a href="#">' + e + "</a>"),
                g = a("<li>").append(f);
            this.callDropdown(f, b, e), d.append(g)
        }
        return a(c).append(d)
    }, b.prototype.buildDropdownButton = function (a, b, c) {
        c = c || "";
        var d = '<div class="fr-bttn fr-dropdown ' + c + '" data-name="' + a.cmd + '">',
            e = '<button type="button" class="fr-trigger" title="' + a.title + '">' + this.addButtonIcon(a) + "</button>";
        return d += e, d += b, d += "</div>"
    }, b.prototype.buildDropdownWithArrow = function (a, b, c) {
        c = c || "";
        var d = '<div class="fr-bttn fr-dropdown ' + c + '" data-name="' + a.cmd + '">',
            e = '<button type="button" class="fr-trigger" title="' + a.title + '">' + this.addButtonIcon(a) + '<span class="be_icon be_icon_arrow"></span></button>';
        return d += e, d += b, d += "</div>"
    }, b.prototype.buildDropdownColorButton = function (a, b, c) {
        c = c || "";
        var d = '<div class="fr-bttn fr-dropdown ' + c + '" data-name="' + a.cmd + '">',
            e = '<button type="button" class="fr-trigger" title="' + a.title + '">' + this.addButtonIcon(a) + "</button>";
        return d += e, d += b, d += "</div>"
    }, b.prototype.buildDropdownAlign = function (a) {
        for (var b = '<ul class="fr-dropdown-menu f-align">', c = 0; c < a.seed.length; c++) {
            var d = a.seed[c];
            b += '<li data-cmd="' + d.cmd + '" title="' + d.title + '"><a href="#"><i class="' + d.icon + '"></i></a></li>'
        }
        return b += "</ul>"
    }, b.prototype.buildDropdownFormatBlock = function (b) {
        for (var c = '<ul class="fr-dropdown-menu">', d = 0; d < b.seed.length; d++) {
            var e = b.seed[d];
            if (-1 != a.inArray(e.value, this.options.blockTags)) {
                var f = '<li data-cmd="' + b.cmd + '" data-val="' + e.value + '">';
                f += '<a href="#" data-text="true" class="format-' + e.value + '" title="' + e.title + '">' + e.title + "</a></li>", c += f
            }
        }
        return c += "</ul>"
    }, b.prototype.buildDropdownBlockquote = function (b) {
        for (var c = '<ul class="fr-dropdown-menu be_dropdown_blockquote">', d = 0; d < b.seed.length; d++) {
            var e = b.seed[d];
            if (-1 != a.inArray(e.value, this.options.blockquoteStyles)) {
                var f = '<li data-cmd="' + b.cmd + '" data-val="' + e.value + '">';
                f += '<a href="#" title="' + e.title + '"><i class="' + e.icon + '"></i></a></li>', c += f
            }
        }
        return c += "</ul>"
    }, b.prototype.buildDefaultDropdown = function (a) {
        for (var b = '<ul class="fr-dropdown-menu">', c = 0; c < a.seed.length; c++) {
            var d = a.seed[c],
                e = '<li data-cmd="' + (d.cmd || a.cmd) + '" data-val="' + d.value + '" data-param="' + (d.param || a.param) + '">';
            e += '<a href="#" data-text="true" class="' + d.value + '" title="' + d.title + '">' + d.title + "</a></li>", b += e
        }
        return b += "</ul>"
    }, b.prototype.createCORSRequest = function (a, b) {
        var c = new XMLHttpRequest;
        if ("withCredentials" in c) {
            c.open(a, b, !0), this.options.withCredentials && (c.withCredentials = !0);
            for (var d in this.options.headers) c.setRequestHeader(d, this.options.headers[d])
        } else "undefined" != typeof XDomainRequest ? (c = new XDomainRequest, c.open(a, b)) : c = null;
        return c
    }, b.prototype.getAjax = function (b, c, d, e, f, g) {
        var h = {
            type: b,
            crossDomain: !0,
            url: c,
            data: d,
            progress: f
        };
        g && (h.xhrFields = g), "object" == typeof d && d.formData && (h.processData = !1, h.contentType = !1, h.data = d.formData);
        var i = a.ajax(h);
        return e && (i.complete(a.proxy(function (b, c) {
            "abort" == c && this.logCode(a.Editable.ERROR_CODE.CANCEL_UPLOAD), delete this.ajaxPoolset[e]
        }, this)), this.ajaxPoolset[e] = i), i
    }, b.prototype.isEnabled = function (b) {
        return "redo" == b || "undo" == b ? !0 : -1 != a.inArray(b, this.options.buttons)
    }, b.prototype.bindButtonEvents = function (a) {
        this.bindDropdownEvents(a), this.bindCommandEvents(a)
    }, b.prototype.canTouch = function (b) {
        var c = b.currentTarget;
        return "touchend" == b.type && a(c).data("touched", !0), "mouseup" == b.type && 1 != b.which ? !1 : "mouseup" == b.type && a(c).data("touched") ? !1 : !0
    }, b.prototype.buttonDropdownEvents = function (b, c, d) {
        return this.options.inlineMode === !1 && this.hide(), a(c).toggleClass("active").trigger("blur"), this.hideLinkWrapper(), this.deselectModule(), this.refreshButtons(), void b.find(".fr-dropdown").not(a(c).parent()).find(".fr-trigger").removeClass("active")
    }, b.prototype.bindDropdownEvents = function (b) {
        var c = this,
            d = b;
        b.on("mouseup touchend", ".fr-dropdown .fr-trigger", function (a) {
            return a.stopPropagation(), a.preventDefault(), c.canTouch(a) ? ("touchend" == a.type && c.android() && (c.saveSelectionByMarkers(), setTimeout(function () {
                c.restoreSelectionByMarkers()
            }, 10)), c.buttonDropdownEvents(d, this)) : !1
        }), a(window).on("mouseup selectionchange", a.proxy(function () {
            d.find(".fr-dropdown .fr-trigger").removeClass("active")
        }, this)), this.$element.on("mouseup", "img, a", a.proxy(function () {
            d.find(".fr-dropdown .fr-trigger").removeClass("active")
        }, this)), d.find(".fr-selector button.fr-bttn").bind("select", function () {
            a(this).parents(".fr-selector").find(" > button > i").attr("class", a(this).find("i").attr("class"))
        }).on("click touch", function () {
            a(this).parents("ul").find("button").removeClass("active"), a(this).parents(".fr-selector").removeClass("active").trigger("mouseout"), a(this).trigger("select")
        }), d.on("click", "li[data-cmd] > a", function (a) {
            a.preventDefault()
        })
    }, b.prototype.sendTiaraEvent = function (a) {
        if (a) {
            var b = ["__trackEvent", "editor"];
            b = b.concat(a.split(",")), _tiq.push(b)
        }
    }, b.prototype.doButtonWrap = function (b, c, d) {
        var e = b.currentTarget;
        if (a(e).find("button[data-cmd]").length > 0 && (e = a(e).find("button[data-cmd]").get(0)), "touchmove" != b.type) {
            if (b.stopPropagation(), b.preventDefault(), !this.canTouch(b)) return !1;
            if (a(e).data("dragging")) return a(e).removeData("dragging"), !1;
            var f = a(e).data("cmd"),
                g = a(e).data("val"),
                h = a(e).data("param");
            "touchend" == b.type && this.android() && this.saveSelectionByMarkers(), this.sendTiaraEvent(a(e).data("tiara")), this.exec(f, g, h, b), c.find(".fr-dropdown .fr-trigger").removeClass("active"), "touchend" == b.type && this.android() && this.restoreSelectionByMarkers()
        } else a(e).data("dragging", !0);
        d && d()
    }, b.prototype.bindCommandEvents = function (b) {
        b.on("mouseup touchend touchmove", ".dynamic_button_wrap:has(button[data-cmd]), button[data-cmd], li[data-cmd], span[data-cmd]", a.proxy(function (a) {
            this.doButtonWrap(a, b)
        }, this))
    }, b.prototype.bindCommandEvents_new = function (b) {
        var c = this;
        b.on(this.mousedown, "button[data-cmd], li[data-cmd], span[data-cmd], a[data-cmd]", function (b) {
            return "mousedown" === b.type && 1 !== b.which ? !0 : ("LI" === this.tagName && "touchstart" === b.type && c.android() || c.iOS() || b.preventDefault(), void a(this).attr("data-down", !0))
        }), b.on(this.mouseup + " " + this.move, "button[data-cmd], li[data-cmd], span[data-cmd], a[data-cmd]", a.proxy(function (b) {
            if (c.isDisabled) return !1;
            if ("mouseup" === b.type && 1 !== b.which) return !0;
            var d = b.currentTarget;
            if ("touchmove" != b.type) {
                if (b.stopPropagation(), b.preventDefault(), !a(d).attr("data-down")) return a("[data-down]").removeAttr("data-down"), !1;
                if (a("[data-down]").removeAttr("data-down"), a(d).data("dragging")) return a(d).removeData("dragging"), !1;
                var e = a(d).data("timeout");
                e && (clearTimeout(e), a(d).removeData("timeout"));
                var f = a(d).data("callback");
                if (f) c[f]();
                else {
                    var g = a(d).attr("data-cmd"),
                        h = a(d).attr("data-val"),
                        i = a(d).attr("data-param");
                    c.exec(g, h, i), c.$bttn_wrapper.find(".fr-dropdown .fr-trigger").removeClass("active")
                }
                return !1
            }
            a(d).data("timeout") || a(d).data("timeout", setTimeout(function () {
                a(d).data("dragging", !0)
            }, 200))
        }, this))
    }, b.prototype.onChangeUndoRedoStack = function () {
        "function" == typeof this.options.checkUndoRedo && this.options.checkUndoRedo(this.undoIndex)
    }, b.prototype.resetUndoRedo = function () {
        this.undoIndex = 0, this.undoStack = [], this.saveUndoStep()
    }, b.prototype.workUndoRedo = function (b) {
        if (b) {
            var c = b.position,
                d = b.html;
            if (this.$element.html(d), this.$body = this.$element.find(".wrap_body"), this.refreshPendingAjax(), this.getModule("cover").reset(!0), this.getModule("video").refreshVideo(), this.enableContenteditable(!0), c && c.length > 1)
                for (var e = this.$element, f = e.contents(); c.length > 0;) {
                    var g = c.pop();
                    if (0 == c.length) {
                        var h = e.get(0),
                            i = this.getWrapItem(h);
                        if (this.isSelectableWrapItem(i)) {
                            var j = this.getModuleByWrapItem(i);
                            j && j.select(i)
                        } else this.elementInCover(h) || this.isTextWrapItem(i) ? (this.focus(h), this.setSelection(h, g)) : this.focus();
                        break
                    }
                    e = a(f.get(g)), f = e.contents()
                } else this.focus();
            this.callback("redo", [this.getHTML(), d]), "" !== this.text() ? this.repositionEditor() : this.hide(), this.refreshUndoRedo(), this.refreshButtons(), this.onChangeUndoRedoStack()
        }
    }, b.prototype.undo = function () {
        if (this.undoIndex > 1) {
            var a = this.undoStack[--this.undoIndex - 1];
            this.workUndoRedo(a)
        }
    }, b.prototype.redo = function () {
        if (this.undoIndex < this.undoStack.length) {
            var a = this.undoStack[this.undoIndex++];
            this.workUndoRedo(a)
        }
    }, b.prototype.applyTempArticleContent = function (a) {
        return a ? (this.$element.html(a), this.$body = this.$element.find(".wrap_body"), this.refreshPendingAjax(), this.getModule("cover").reset(!0), this.getModule("video").refreshVideo(), void this.enableContenteditable(!0)) : !1
    }, b.prototype.makeContentSaveData = function (b) {
        var c = this.$body.clone();
        c.html(this.getCleanHTML(c.html()));
        var d = a("<div>");
        d.get(0).className = c.get(0).className;
        for (var e = c.get(0).childNodes, f = 0, g = e.length; g > f; f++) {
            var h = e[f];
            if (h)
                if (1 == h.nodeType && h.className && h.className.indexOf("wrap_item") > -1) d.append(h.cloneNode(!0));
                else if (1 == h.nodeType) {
                var i = this.makeTextWrap().html(h.innerHTML);
                d.append(i)
            } else if (3 == h.nodeType) {
                var i = this.makeTextWrap();
                i.html(""), i.append(h.cloneNode(!0));
                for (var j = h.nextSibling; j && j && 3 == j.nodeType;) i.append(j.cloneNode(!0)), j = j.nextSibling, f++;
                d.append(i)
            }
        }
        var k = a("<div>").append(d);
        return this.getModule("gridGallery") && this.getModule("gridGallery").clearAppData(k), this.getModule("image") && this.getModule("image").arrangeSaveData(k), this.getModule("video") && this.getModule("video").arrangeSaveData(k, b), k.find(".item_type_text, .item_type_bullet").each(a.proxy(function (b, c) {
            var d = {
                    type: "text",
                    data: []
                },
                e = c.tagName;
            if ("BLOCKQUOTE" == e) {
                for (var f = c.className, g = this.options.blockquoteStyleKinds[0], h = this.options.blockquoteStyles, i = 0, j = h.length; j > i; i++) {
                    var k = h[i]; - 1 != f.indexOf(k) && (g = this.options.blockquoteStyleKinds[i])
                }
                d.type = "quotation", d.kind = g
            } else this.isBulletWrapItem(c) ? (d.type = "bullet", d.kind = "circle") : -1 != a.inArray(e, ["H1", "H2", "H3", "H4"]) && (d.size = e.toLowerCase());
            this.makeContentData(c, d.data), a(c).attr("data-app", JSON.stringify(d))
        }, this)), k.find(".wrap_body").removeAttr("style"), k.find(".wrap_item").removeAttr("style"), k.find("[contenteditable]").removeAttr("contenteditable"), k.find(".text_caption").each(function (b, c) {
            var d = a(c);
            "" == a.trim(d.text()) && d.addClass("empty")
        }), k
    }, b.prototype.makeContentData = function (b, c) {
        for (var d = b.childNodes, e = a(b), f = 0, g = d.length; g > f; f++) {
            var h = {
                    type: "text"
                },
                i = d[f],
                j = i.nodeType;
            switch (j) {
                case 1:
                    var k = i.tagName;
                    if ("BR" == k) h.type = "br", c.push(h);
                    else {
                        if (h.data = [], "SPAN" == k) {
                            h.style = {};
                            var l, m, n, o = a(i),
                                p = o.attr("style"),
                                q = e.attr("style");
                            p && q != p && (p = p.toLowerCase(), l = -1 != p.indexOf("background-color:") ? o.css("background-color") : null, p = p.replace(/background\-color\:/gi, ""), m = -1 != p.indexOf("color:") ? o.css("color") : null, n = -1 != p.indexOf("font-family:") ? o.css("font-family") : null, n = this.getBrunchFontFamilyValue(n), l && (h.style["background-color"] = a.Editable.RGBToHex(l)), m && (h.style.color = a.Editable.RGBToHex(m)), n && (h.style["font-family"] = n), c.push(h))
                        } else if ("A" == k) h.type = "anchor", h.target = i.target, h.url = i.href, c.push(h);
                        else {
                            var r = "";
                            switch (k) {
                                case "U":
                                    r = "underline";
                                    break;
                                case "STRIKE":
                                    r = "strike";
                                    break;
                                case "B":
                                    r = "bold"
                            }
                            r && (h.styleType = r), c.push(h)
                        }
                        var s = c[c.length - 1];
                        s = s && s.data ? s.data : c, this.makeContentData(i, s)
                    }
                    break;
                case 3:
                    h.type = "text", h.text = i.nodeValue, c.data && c.data instanceof Array && c.data.length ? c.data.push(h) : c.push(h)
            }
        }
    }, b.prototype.getHtmlForSave = function (b) {
        var c = this.getModule("cover").getSaveHTML();
        if (!c) return null;
        var d = this.makeContentSaveData(b),
            e = d.html(),
            f = "";
        return a(".item_type_text, .item_type_bullet").each(function (b, d) {
            return f.length > this.articleSummaryLength ? {
                html: c + e,
                contentText: a.trim(f)
            } : void(f += " " + a.trim(a(d).text()))
        }), {
            html: c + e,
            contentText: a.trim(f)
        }
    }, b.prototype.getCleanHTML = function (a, b, c) {
        for (void 0 === c && (c = !1), void 0 === b && (b = !1), a = this.syncCleanHTML(a, b), a = a.replace(/\s*contenteditable="[^"]*"/gi, ""), a = a.replace(/<a[^>]*?><\/a>/g, ""), b || (a = this.removeMarkersByRegex(a)), a = a.replace(/<span[^>]*? class\s*=\s*["']?f-img-handle[^>]+><\/span>/gi, ""); a.match(/^([\S\s]*)<span[^>]*? class\s*=\s*["']?f-img-editor[^>]+>([\S\s]*?)<\/span>([\S\s]*)$/);) a = a.replace(/^([\S\s]*)<span[^>]*? class\s*=\s*["']?f-img-editor[^>]+>([\S\s]*?)<\/span>([\S\s]*)$/i, "$1$2$3");
        for (; a.match(/^([\S\s]*)<span[^>]*? class\s*=\s*["']?f-img-wrap[^>]+>([\S\s]*?)<\/span>([\S\s]*)$/);) a = a.replace(/^([\S\s]*)<span[^>]*? class\s*=\s*["']?f-img-wrap[^>]+>([\S\s]*?)<\/span>([\S\s]*)$/i, "$1$2$3");
        for (; a.match(/^([\S\s]*)<span[^>]*? class\s*=\s*["']?copy_helper[^>]+>([\S\s]*?)<\/span>([\S\s]*)$/);) a = a.replace(/^([\S\s]*)<span[^>]*? class\s*=\s*["']?copy_helper[^>]+>([\S\s]*?)<\/span>([\S\s]*)$/i, "$1$2$3");
        for (; a.match(/^([\S\s]*)<span[^>]*? class\s*=\s*["']?delete_empty[^>]+>([\S\s]*?)<\/span>([\S\s]*)$/);) a = a.replace(/^([\S\s]*)<span[^>]*? class\s*=\s*["']?delete_empty[^>]+>([\S\s]*?)<\/span>([\S\s]*)$/i, "$1$2$3");
        return a = a.replace(/ data-fr-verified="true"/gi, ""), a = a.replace(/\n/gi, ""), a = a.replace(/\u200B/gi, "")
    }, b.prototype.getImageDataForSave = function () {
        var b = [],
            c = this.getModule("cover").getSaveData();
        c.style && c.style["background-image"] && b.push({
            url: c.style["background-image"],
            type: "cover",
            width: c.width ? c.width : 0,
            height: c.height ? c.height : 0
        });
        var d = a(".item_type_img, .item_type_gridGallery");
        return d.each(function (c, d) {
            var e = a(d).data("app");
            if ("gridGallery" == e.type)
                for (var f, g = 0; f = e.gridImages[g]; g++) b.push({
                    url: f.url,
                    type: "gridGallery",
                    width: f.width ? f.width : 0,
                    height: f.height ? f.height : 0
                });
            else b.push({
                url: e.url,
                type: "image",
                width: e.width ? e.width : 0,
                height: e.height ? e.height : 0
            })
        }), b
    }, b.prototype.isUploading = function (b, c) {
        var d = !1;
        if (this.ajaxPoolset) {
            var e = this.getModule("image");
            if (e && (d = e.isPendingSerializeUploadFiles(), d || (d = e.isPendingDownloadImages())), !d)
                for (id in this.ajaxPoolset)
                    if (id && this.ajaxPoolset[id]) {
                        b && -1 == id.indexOf(b) || (d = !0);
                        break
                    }
        }
        return d ? (c && this.log(a.Editable.ERROR_MESSAGE[a.Editable.ERROR_CODE.IS_PENDING_AJAX]), !0) : !1
    }, b.prototype.isSpellCheck = function () {
        var a = this.getModule("spell"),
            b = a.getSpellStatus();
        return 3 > b ? !0 : !1
    }, b.prototype.saveUniversal = function (c, d, e) {
        if (d) {
            var f = a.proxy(function () {
                this.saveUniversal(c, d)
            }, this);
            if (this.showGuide(this.guideLabel.GUIDE_END, f)) return
        }
        if (!this.isUploading(null, !0) && c) {
            if (jQuery(".dummyGridGalleryItem").remove(), !this.validateModule()) return !1;
            var g = this.getModule("cover"),
                h = g.getSaveData(),
                i = g.getErrorCodeValidSaveData(h);
            if (i > 0) return void this.errorCode(i);
            var j = this.getHtmlForSave(e),
                k = a.trim(j.contentText),
                l = a(b.DEFAULTS.saveCheckItemClass),
                m = !(0 == k.length && 0 == l.length);
            if (d) {
                if (g.isTitleEmpty(h)) return void this.errorCode(a.Editable.ERROR_CODE.EMPTY_TITLE);
                if (!m) return void this.errorCode(a.Editable.ERROR_CODE.EMPTY_CONTENT)
            } else if (!e && g.isTitleEmpty(h) && g.isSubTitleEmpty(h) && !m) return void this.errorCode(a.Editable.ERROR_CODE.EMPTY_CONTENT);
            var n = this.getImageDataForSave(),
                o = null;
            this.getModule("video") && (o = this.getModule("video").getVideoDataForSave()), c.apply(this, [{
                cover: h,
                title: h.titleHtml,
                subTitle: h.subTitleHtml,
                article: j.html,
                contentText: j.contentText,
                images: n,
                videos: o
            }, a.proxy(this.resetUndoRedo, this)])
        }
    }, b.prototype.saveTemplate = function (a) {
        this.saveUniversal(a, !1, !0)
    }, b.prototype.saveDraft = function (a) {
        this.saveUniversal(a, !1)
    }, b.prototype.save = function (a) {
        this.saveUniversal(a, !0)
    }, b.prototype.spell = function (a) {
        a && a.apply(this, []);
        var b = this.getModule("spell");
        b && b.startSpellCheck()
    }, b.prototype.preview = function (b) {
        b && b.apply(this, []);
        var c = "preview.html";
        window.B && window.B.Config && (c = "/static/html/preview.html"), window.open(c, "preview", "width=320, height=600, menubar=no, status=no, toolbar=no, scrollbars=yes, location=no, resize=no"), window.previewRefresh = a.proxy(function (b) {
            this.previewFrame = b, this.previewFrame.focus(), this.previewFrame.handshake({
                close: a.proxy(function () {
                    this.closePreviewFrame()
                }, this)
            }), this.previewDraw()
        }, this)
    }, b.prototype.previewDraw = function () {
        if (this.previewFrame) {
            var b = a("<div></div>").html(this.getHtmlForSave().html),
                c = this.getModule("video");
            b.find(".item_type_video:not(.item_type_preview)").each(a.proxy(function (b, d) {
                var e = a(d),
                    f = e.data("app");
                if (f) {
                    var g = c.generateVideoTemplate(!0, f);
                    e.replaceWith(g)
                }
            })), this.previewFrame.draw(b.html())
        }
    }, b.prototype.closePreviewFrame = function () {
        this.previewFrame = null
    }, b.prototype.sanitizeURL = function (a) {
        return a = /^https?:\/\//.test(a) ? String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : encodeURIComponent(a).replace(/%23/g, "#").replace(/%2F/g, "/").replace(/%25/g, "%").replace(/mailto%3A/g, "mailto:").replace(/%3F/g, "?").replace(/%3D/g, "=").replace(/%26/g, "&").replace(/%2C/g, ",").replace(/%3B/g, ";").replace(/%2B/g, "+").replace(/%40/g, "@")
    }, b.prototype.option = function (b, c) {
        if (void 0 === b) return this.options;
        if (b instanceof Object) this.options = a.extend({}, this.options, b), this.initOptions(), this.setCustomText();
        else {
            if (void 0 === c) return this.options[b];
            switch (this.options[b] = c, b) {
                case "height":
                case "width":
                case "minHeight":
                case "maxHeight":
                    this.setDimensions();
                    break;
                case "spellcheck":
                    this.setSpellcheck();
                    break;
                case "placeholder":
                    this.setPlaceholder();
                    break;
                case "customText":
                    this.setCustomText();
                    break;
                case "textNearImage":
                    this.setTextNearImage();
                    break;
                case "zIndex":
                    this.setZIndex();
                    break;
                case "theme":
                    this.setTheme()
            }
        }
    }, b.prototype.init = function (b) {
        this.showProgress(" "), this.$original_element = a(b), this.mobile() ? (this.mousedown = "touchstart", this.mouseup = "touchend", this.move = "touchmove") : (this.mousedown = "mousedown", this.mouseup = "mouseup", this.move = ""), this.getToast(), this.initBrunch(), this.generateModules(), this.createModules(), this.initElement(b), this.initElementStyle(), this.buildDragUpload(), this.continueInit(), this.initEnd()
    }, b.prototype.initEnd = function () {
        setTimeout(a.proxy(function () {
            a(".editor_hidden").removeClass("editor_hidden"), this.hideProgress(), this.initFocus(), this.initGuide()
        }, this), this.options.animationDuration), a(window).on("unload", a.proxy(function () {
            return this.previewFrame && this.previewFrame.close(), !0
        }, this)), this.callback("initAfter", [this])
    }, b.prototype.initElement = function (b) {
        this.$element = a(b), this.$header = a(".service_header"), this.$box = this.$element, this.$element = a("<div>");
        var c = this.$box.html();
        this.setHTML(c, !0), this.$box.html(this.$element).addClass("cloud-box"), this.calculateWidth(), this.resetEditorMinHeight(), this.$body = this.$element.find(".wrap_body"), this.$element.on("keyup", a.proxy(function (a) {
            var b = a.which;
            13 == b && this.webkitParagraphy()
        }, this)), a(document.body).on("resizestart", function (a) {
            a.preventDefault(), a.stopPropagation()
        }), this.$element.on("drop", a.proxy(function (b) {
            b.stopPropagation(), b.preventDefault(), setTimeout(a.proxy(function () {
                a("html").click(), this.$element.find(".f-img-wrap").each(function (b, c) {
                    0 === a(c).find("img").length && a(c).remove()
                })
            }, this), 1)
        }, this)), this.$element.get(0).addEventListener ? this.$element.get(0).addEventListener("mscontrolselect", function (a) {
            a.preventDefault()
        }) : this.$element.get(0).attachEvent("oncontrolselect", function (a) {
            a.returnValue = !1
        })
    }, b.prototype.buildDragUpload = function () {
        var c = this;
        this.$element.on("dragover", function () {
            return a(this).addClass("f-hover"), !1
        }), this.$element.on("dragend", this._id, function () {
            return a(this).removeClass("f-hover"), !1
        }), this.$element.on("drop", ".wrap_cover, .wrap_body", function (d) {
            if (a(this).removeClass("f-hover"), d.preventDefault(), d.stopPropagation(), !c.isEditable()) return !1;
            var e = c.getModule("image");
            e && e.removeUploadInterface();
            var f = -1 != this.className.indexOf("wrap_cover"),
                g = {},
                h = d.originalEvent.dataTransfer.files;
            if (h && h.length > 0) {
                if (f) {
                    h[0];
                    h = a(h).slice(0, 1)
                }
                for (var i = 0, j = h.length; j > i; i++) {
                    var k = h[i],
                        l = null,
                        m = k.type,
                        n = (k.size, m.match(/^([a-zA-Z]+)\/(.+)$/));
                    n && 3 == n.length && (l = n[1]), "image" != l && "video" != l && (l = "file"), g[l] || (g[l] = []), c.isFile(d.originalEvent.dataTransfer, i) && g[l].push(k)
                }
                if (f) {
                    if ("image" != l) return void c.log(b.ERROR_MESSAGE[b.ERROR_CODE.COVER_ONLY_IMAGE]);
                    if (g.image && 1 == g.image.length) {
                        var o = c.getModule("cover");
                        o && (o.insertCoverImage(), e.uploadFiles(g.image))
                    }
                } else {
                    e && e.removeUploadInterface();
                    for (var p in g) {
                        var q = g[p];
                        if (q && q.length > 0) {
                            var r = c.getModule(p);
                            r && r.uploadFiles && r.uploadFiles(q)
                        }
                    }
                }
            }
        })
    }, b.prototype.isFile = function (a, b) {
        return a.files[b].type ? !0 : a.items[b].webkitGetAsEntry ? a.items[b].webkitGetAsEntry().isFile : !1
    }, b.prototype.cancelAjax = function (a) {
        if (this.ajaxPoolset) {
            if (a && this.ajaxPoolset[a]) {
                var b = this.ajaxPoolset[a];
                b && (b.abort(), delete this.ajaxPoolset[a])
            }
        } else this.ajaxPoolset = {}
    }, b.prototype.refreshPendingAjax = function () {
        if (!this.ajaxPoolset) return void this.$element.find(".item_type_preview[data-file-id]").remove();
        var b = this;
        this.$element.find(".item_type_preview[data-file-id]").each(function (c, d) {
            var e = a(d).data("file-id");
            b.ajaxPoolset[e] || a(d).remove()
        });
        for (id in this.ajaxPoolset)
            if (id && this.ajaxPoolset[id]) {
                var c = this.$element.find('.item_type_preview[data-file-id="' + id + '"]');
                0 == c.length && this.cancelAjax(id)
            }
    };
    var i = a.fn.editable;
    a.fn.editable = function (c) {
        for (var d = [], e = 0, f = arguments.length; f > e; e++) d.push(arguments[e]);
        if ("string" == typeof c) {
            var g = [];
            return this.each(function () {
                var b = a(this),
                    e = b.data("ce.editable");
                if (!e[i]) return a.error("Method " + c + " does not exist in Cloud Editor.");
                var f = e[i].apply(i, d.slice(1));
                void 0 === f ? g.push(this) : 0 === g.length && g.push(f)
            }), 1 == g.length ? g[0] : g
        }
        "object" != typeof c && c || this.each(function () {
            var d = this,
                e = a(d),
                f = e.data("ce.editable");
            f || e.data("ce.editable", f = new b(d, c)), window.brunchEditor = f
        })
    }, a.fn.removeAllAttr = function () {
        return this.each(function () {
            for (var a = this.attributes.length - 1; a >= 0; a--) jQuery(this).removeAttr(this.attributes[a].name)
        }), this
    }, a.fn.hasAttr = function (a) {
        return void 0 !== this.attr(a)
    }, a.fn.editable.Constructor = b, a.Editable = b, a.fn.editable.noConflict = function () {
        return a.fn.editable = i, this
    }
}(window.jQuery),
function (a) {
    a.Editable.prototype.show = function (a) {
        if (this.enabledEditorTool) {
            this.hidePopups(!1);
            var b = this.getSelectionElement();
            b && 1 == b.nodeType && 1 == b.innerHTML.length && b.innerHTML.match(/\u200B/) && (b.innerHTML = b.innerHTML.replace(/\u200B/gi, "")), a ? (this.options.inlineMode && (null !== a && "touchend" !== a.type ? (this.$editor.show(), this.repositionEditor(), 0 !== this.options.buttons.length || this.$editor.hide()) : (this.$editor.show(), this.repositionEditor())), this.options.editInPopup || this.showEditPopupWrapper(), a.target && (this.showBttnWrapper(), this.refreshButtons())) : (this.hidePopups(), this.$editor.show(), this.repositionEditor())
        }
    }, a.Editable.prototype.showLeft = function (b) {
        if (b && this.enabledEditorTool && (this.hidePopups(), null !== b && "touchend" !== b.type)) {
            var c = a(b.currentTarget),
                d = c.offset(),
                e = d.left,
                f = d.top;
            this.showMyCoordinates(e, f), a(".be_editor_toolbar:not(.f-basic)").hide(), this.$editor.show()
        }
    }, a.Editable.prototype.hideDropdowns = function () {
        this.$bttn_wrapper.find(".fr-dropdown .fr-trigger").removeClass("active"), this.$bttn_wrapper.find(".fr-dropdown .fr-trigger")
    }, a.Editable.prototype.hide = function (a) {
        return this.initialized ? ("undefined" == typeof a && (a = !1), a ? this.hideOtherEditors() : this.deselectModule(), this.$popup_editor.hide(), this.hidePopups(!1), this.hideDropdowns(), void(this.link = !1)) : !1
    }, a.Editable.prototype.hideOtherEditors = function () {
        for (var b = 1, c = a.Editable.count; c >= b; b++) b != this._id && a(window).trigger("hide." + b)
    }, a.Editable.prototype.hideBttnWrapper = function () {
        this.options.inlineMode && (this.$bttn_wrapper.css({
            transition: "",
            opacity: "0.2",
            transform: "translateY(-10px)"
        }), this.$bttn_wrapper.hide())
    }, a.Editable.prototype.showBttnWrapper = function (b) {
        if (this.options.inlineMode && this.enabledEditorTool) {
            if (!b && this.hideBttnWrapper(), this.selectionInCover()) {
                var c = this.getModule("cover");
                if (c && !c.showBttnWrapper(this.$bttn_wrapper)) return
            } else this.selectionInBlockquote() ? (this.$bttn_wrapper.find(">[data-cmd],>[data-name]").hide(), this.$bttn_wrapper.find('>[data-name="blockquote"], >[data-cmd="bullet"], >[data-cmd="createLink"]').show()) : this.selectionInBullet() ? (this.$bttn_wrapper.find(">[data-cmd],>[data-name]").hide(), this.$bttn_wrapper.find('>[data-name="blockquote"], >[data-cmd="bullet"], >[data-cmd="createLink"]').show()) : (this.$bttn_wrapper.find(">*:not(.be_popup)").show(), this.$bttn_wrapper.find('>[data-name="titleColor"]').hide());
            this.$bttn_wrapper.show(), setTimeout(a.proxy(function () {
                this.$bttn_wrapper.css({
                    transition: "opacity 200ms, transform 100ms",
                    opacity: "",
                    transform: ""
                })
            }, this), 1)
        }
    }, a.Editable.prototype.showEditPopupWrapper = function () {
        var b = a;
        this.enabledEditorTool && this.$edit_popup_wrapper && (this.$edit_popup_wrapper.show(), setTimeout(b.proxy(function () {
            this.$edit_popup_wrapper.find("input").val(this.$body.text()).focus().select()
        }, this), 1))
    }, a.Editable.prototype.hidePopups = function (a, b) {
        null === a && (a = !0), a && this.hideBttnWrapper(), this.raiseEvent("hidePopups", b)
    }, a.Editable.prototype.showEditPopup = function () {
        this.showEditPopupWrapper()
    }
}(jQuery),
function (a) {
    a.Editable.prototype.getBoundingRect = function () {
        var a = this.getRange().getBoundingClientRect();
        return a
    }, a.Editable.prototype.repositionEditor = function (b) {
        if (!this.isModuleActive()) {
            var c, d, e;
            (this.options.inlineMode || b) && (c = this.getBoundingRect(), this.showBttnWrapper(!0), c.ok || c.left >= 0 && c.right > 0 && c.bottom > 0 ? (d = c.left + c.width / 2, e = c.top + c.height + 10, this.iPad() || (d += a(window).scrollLeft(), e += a(window).scrollTop()), this.showByCoordinates(d, e)) : this.options.alwaysVisible ? this.hide() : (document.execCommand("selectAll", !1, !1), c = this.getBoundingRect(), d = c.left, e = c.top + c.height, this.iPad() || (d += a(window).scrollLeft(), e += a(window).scrollTop()), this.showByCoordinates(d, e - 20), this.getRange().collapse(!1)), 0 === this.options.buttons.length && this.hide())
        }
    }, a.Editable.prototype.showByCoordinates = function (b, c) {
        this.$popup_editor.removeClass("reverse");
        var d = this.$body.width(),
            e = this.$body.offset().left,
            f = this.$popup_editor.width();
        b -= f / 2, e > b ? b = e : b + f > e + d && (b -= b + f - (e + d));
        var g = a(window),
            h = g.scrollTop(),
            i = g.height() + h,
            j = c + 230,
            k = j - i,
            l = this.$element.height();
        k > 0 && (i + k > l ? (c -= 100, this.$popup_editor.addClass("reverse")) : a(document.body).animate({
            scrollTop: h + k
        }, this.options.animationDuration)), this.$popup_editor.css("top", c), this.$popup_editor.css("left", b), this.$popup_editor.show()
    }, a.Editable.prototype.showMyCoordinates = function (a, b) {
        var c = Math.max(this.$popup_editor.width(), 333);
        a -= c, this.$popup_editor.css("left", a), this.$popup_editor.css("top", b), this.$popup_editor.show()
    }, a.Editable.prototype.showByCoordinatesCenter = function (a, b, c) {
        this.$popup_editor.css("top", b), this.$popup_editor.css("left", a), this.$popup_editor.css("right", "auto"), this.$popup_editor.show(), this.$popup_editor.css("left", a - this.$popup_editor.width() / 2)
    }, a.Editable.prototype.positionPopup = function (b) {
        if (a(this.$editor.find('button.fr-bttn[data-cmd="' + b + '"]')).length) {
            var c = this.$editor.find('button.fr-bttn[data-cmd="' + b + '"]'),
                d = c.width(),
                e = c.height() - 15,
                f = c.offset().left + d / 2,
                g = c.offset().top + e;
            this.showByCoordinates(f, g)
        }
    }
}(jQuery),
function (a) {
    a.Editable.prototype.browserFixes = function () {
        this.liEnterSafari(), this.fixBadSpan()
    }, a.Editable.prototype.handleEnterKey = function (b) {
        if (this.isModuleActive()) return !0;
        this.selectionInEditor() && !this.getSelection().isCollapsed && this.getRange().deleteContents();
        var c = this.getSelectionElements()[0],
            d = this.getSelection(),
            e = this.getWrapItem(c);
        if (!e) return !0;
        if ("blockquote" == e.tagName.toLowerCase()) {
            b.preventDefault();
            var f = this.getRange(),
                g = f.commonAncestorContainer,
                h = null;
            if (3 === g.nodeType) {
                var i = 1,
                    j = g.nodeValue,
                    k = f.endOffset;
                if (0 === k) a(f.startContainer).before("<br>"), i = 0;
                else if (j.length === k) {
                    for (var l = f.endContainer.nextSibling; l && 3 == l.nodeType && "" == l.nodeValue;) l = l.nextSibling;
                    l && 1 === l.nodeType && "BR" === l.tagName ? a(f.endContainer).after("<br>") : (i++, null == l ? a(f.endContainer).after("<br><br>") : a(f.endContainer).after("<br>"))
                } else f.insertNode(document.createElement("br"));
                if (i)
                    for (h = d.anchorNode; i > 0;) h = h.nextSibling, i--
            } else this.isWrapItem(g) && 0 == f.startOffset ? f.insertNode(document.createElement("br")) : g.childNodes.length > f.endOffset - 1 && a(g.childNodes[f.endOffset - 1]).after("<br>"), h = g.childNodes[f.endOffset].nextSibling;
            h && (1 == h.nodeType ? f.setStartAfter(h) : f.setStartBefore(h)), f.collapse(!0), d.removeAllRanges(), d.addRange(f)
        } else {
            var m = null,
                n = a(e),
                o = this.isBulletItem(n);
            if (o && ("" == n.html() || "" == n.text() && n.children()[0] && "BR" == n.children()[0].tagName)) return b.preventDefault(), n.removeClass("item_type_bullet").addClass("item_type_text"), !1;
            if (this.isStartOfWrapItem()) b.preventDefault(), m = this.makeTextWrap(), o && m.attr("class", this.getBulletWrapClass()), n.before(m), this.addFontFamily(m), this.setSelection(e);
            else if (this.isEndOfWrapItem()) b.preventDefault(), m = this.makeTextWrap(), o && m.attr("class", this.getBulletWrapClass()), emptyBlock = m.get(0), n.after(m), this.addFontFamily(m), this.selectionIn(m) || this.setSelection(emptyBlock);
            else {
                var f = this.getRange(),
                    g = f.commonAncestorContainer;
                if (g && (g = g.nextSibling), g && 3 === g.nodeType) {
                    var p = g.nodeValue;
                    if (p && p.length > 0) {
                        var q = p.substring(0, 1);
                        " " == q && (g.nodeValue = q.replace(/\u0020/, "Â ") + (p.length > 1 ? p.substring(1) : ""))
                    }
                }
            }
        }
    }, a.Editable.prototype.isBulletItem = function (b) {
        return b ? a(b).hasClass("item_type_bullet") : !1
    }, a.Editable.prototype.addFontFamily = function (b, c) {
        if (b) {
            var d = a(b);
            if (!(d.length < 1)) {
                b = d.get(0);
                var e = this.getLastFontFamily(b.previousSibling);
                if (e) {
                    var f = a('<span data-fr-verified="true" style="font-family: ' + e + '">&#8203;</span>').get(0);
                    b.insertBefore(f, b.firstChild), this.setSelection(f.firstChild, 1)
                } else c && this.setSelection(d.get(0))
            }
        }
    }, a.Editable.prototype.getLastFontFamily = function (b) {
        if (!b) return null;
        for (; b && !this.isTextWrapItem(b);) b = b.previousSibling;
        if (b) {
            var c = this.getLastStyleElement(b),
                d = this.getFontFamilyValue(a(c));
            if (d && d != this.options.defaultFontFamily) return d
        }
        return null
    }, a.Editable.prototype.getLastStyleElement = function (a) {
        if (1 == a.nodeType)
            for (var b = a.childNodes, c = b.length - 1; c >= 0; c--) {
                var d = b[c];
                if (3 == d.nodeType) {
                    if ("" != d.nodeValue && "%u200B" != escape(d.nodeValue)) return this.getLastStyleElement(d)
                } else {
                    if (!this.isSelfClosingTag(d)) return this.getLastStyleElement(d);
                    if (0 == c) return a
                }
            }
        return 3 == a.nodeType ? a.parentNode : a
    }, a.Editable.prototype.liEnterSafari = function () {
        this.browser.safari && this.$element.on("keyup", a.proxy(function (b) {
            var c = b.which;
            if (13 == c && "" === this.text() && !b.shiftKey) {
                var d = this.getSelectionElement();
                if (a(d).closest("li").length > 0) {
                    var e = a(d).parents("li:first");
                    this.saveSelectionByMarkers();
                    var f = !0;
                    e.find(a.Editable.VALID_NODES.join(",")).each(function (b, c) {
                        f || a(c).before('<span data-fr-verified="true" class="end-li"></span>'), f = !1
                    });
                    var g = e.html();
                    g = g.replace(/<span data-fr-verified=\"true\" class=\"end-li\"><\/span>/g, "</li><li>"), e.replaceWith("<li>" + g + "</li>"), this.restoreSelectionByMarkers()
                }
            }
        }, this))
    }, a.Editable.prototype.fixBadSpan = function () {
        this.$element.on("DOMNodeInserted", a.proxy(function (b) {
            if (!this.pasting) {
                var c = b.target,
                    d = a(c),
                    e = c.tagName.toLowerCase(),
                    f = !1;
                if ("span" != e || d.attr("data-fr-verified") || d.hasClass("text_caption") || this.no_verify || (f = !0), f) {
                    var g = !1;
                    if ("span" == e) {
                        var h = d.attr("style");
                        if (h && (-1 != h.indexOf("color:") || -1 != h.indexOf("background-color:") || -1 != h.indexOf("font-family:"))) {
                            g = !0;
                            var i = -1 != h.indexOf("color:") ? d.css("color") : null,
                                j = -1 != h.indexOf("background-color:") ? d.css("background-color") : null,
                                k = -1 != h.indexOf("font-family:") ? d.css("font-family") : null;
                            d.removeAttr("style"), i && d.css("color", i), j && d.css("background-color", j), k && d.css("font-family", k)
                        }
                    }
                    if (!g) {
                        var l = this.getRange(),
                            m = a(c).contents(),
                            n = null;
                        m.length > 0 && m.get(0) == l.startContainer && (n = m.get(0)), d.before(m), d.remove(), n && this.setSelection(n)
                    }
                } else c.hasAttribute("style") && ("span" == e || d.hasClass("cover_title") || d.hasClass("wrap_img_float") || d.hasClass("vertical_marker") || d.hasClass("horizontal_marker") || d.hasClass("inner_wrap_og_image") || c.removeAttribute("style"));
                if ("BR" == e) {
                    var o = a(b.target).parent();
                    "LI" == o.get(0).tagName && (o.find(a.Editable.VALID_NODES.join(",")).length > 0 ? a(b.target).remove() : "LI" == o.get(0).tagName && 0 === o.find(a.Editable.VALID_NODES.join(",")).length && "" === o.text() && 0 === o.find("img").length && 1 === o.closest("ul, ol").find("li").length && o.remove())
                }
            }
        }, this))
    }
}(jQuery),
function (a) {
    Object.keys || (Object.keys = function () {
        "use strict";
        var a = Object.prototype.hasOwnProperty,
            b = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            d = c.length;
        return function (e) {
            if ("object" != typeof e && ("function" != typeof e || null === e)) throw new TypeError("Object.keys called on non-object");
            var f, g, h = [];
            for (f in e) a.call(e, f) && h.push(f);
            if (b)
                for (g = 0; d > g; g++) a.call(e, c[g]) && h.push(c[g]);
            return h
        }
    }()), Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
        for (var c = b || 0; c < this.length; c++)
            if (this[c] == a) return c
    })
}(jQuery),
function (a) {
    a.Editable.prototype.setDisabled = function (a) {
        a ? this.$element.attr("data-disabled", !0) : this.$element.removeAttr("data-disabled")
    }, a.Editable.prototype.isDisabled = function () {
        return this.$element.attr("data-disabled")
    }, a.Editable.prototype.isImageMode = function () {
        return this.getModule("image") ? this.getModule("image").isActive() : !1
    }, a.Editable.prototype.showImageEditor = function () {
        return this.getModule("image").showImageEditor()
    }
}(jQuery),
function (a) {
    a.Editable.prototype._events = {}, a.Editable.prototype.addListener = function (a, b) {
        this.removeListener(a, b);
        var c = this._events,
            d = c[a] = c[a] || [];
        d.push(b)
    }, a.Editable.prototype.removeListener = function (a, b) {
        for (var c = this._events, d = c[a] = c[a] || [], e = 0, f = d.length; f > e; e++) {
            var g = d[e];
            if (g === b) {
                d.splice(e, 1);
                break
            }
        }
    }, a.Editable.prototype.raiseEvent = function (a, b) {
        void 0 === b && (b = []);
        var c = this._events[a];
        if (c)
            for (var d = 0, e = c.length; e > d; d++) c[d].apply(this, b)
    }
}(window.jQuery),
function (a) {
    a.Editable.prototype.active = function (a, b) {
        switch (a) {
            case "fontFamily":
                return this._isActiveFontFamily(b);
            case "fontSize":
                return this._isActiveFontSize(b);
            case "backColor":
                return this._isActiveBackColor(b);
            case "foreColor":
                return this._isActiveForeColor(b);
            case "titleColor":
                return this._isActiveTitleColor(b);
            case "formatBlock":
                return this._isActiveFormatBlock(b);
            case "blockquote":
                return this._isActiveBlockquote(b);
            case "blockStyle":
                return this._isActiveBlockStyle(b);
            case "bullet":
                return this._isActiveBullet(b);
            case "createLink":
            case "insertImage":
                return !1;
            case "justifyLeft":
            case "justifyRight":
            case "justifyCenter":
            case "justifyFull":
                return this._isActiveAlign(a);
            case "undo":
            case "redo":
            case "save":
                return !1;
            default:
                return this._isActiveDefault(a)
        }
    }, a.Editable.prototype._isActiveFontFamily = function (b) {
        var c = this.getSelectionElement();
        return a(c).css("fontFamily").replace(/ /g, "") === b.replace(/ /g, "") ? !0 : !1
    }, a.Editable.prototype._isActiveFontSize = function (b) {
        var c = this.getSelectionElement();
        return a(c).css("fontSize") === b ? !0 : !1
    }, a.Editable.prototype._isActiveBackColor = function (b) {
        for (var c = this.getSelectionElement(); a(c).get(0) != this.$element.get(0);) {
            if (a(c).css("background-color") === b) return !0;
            if ("transparent" != a(c).css("background-color") && "rgba(0, 0, 0, 0)" != a(c).css("background-color")) return !1;
            c = a(c).parent()
        }
        return !1
    }, a.Editable.prototype._isActiveForeColor = function (a) {
        try {
            if (document.queryCommandValue("foreColor") === a) return !0
        } catch (b) {}
        return !1
    }, a.Editable.prototype._isActiveTitleColor = function (a) {
        try {
            if (document.queryCommandValue("titleColor") === a) return !0
        } catch (b) {}
        return !1
    }, a.Editable.prototype._isActiveFormatBlock = function (a) {
        "CODE" === a.toUpperCase() ? a = "PRE" : "N" === a.toUpperCase() && (a = "p");
        var b = this.getWrapItem(this.getSelectionElement());
        return b && b.tagName == a.toUpperCase() ? !0 : !1
    }, a.Editable.prototype._isActiveBlockquote = function (a) {
        var b = this.getWrapItem(this.getSelectionElement());
        if (b && "blockquote" == b.tagName.toLowerCase()) {
            var c = b.className || "";
            return -1 != c.indexOf(a)
        }
        return !1
    }, a.Editable.prototype._isActiveBlockStyle = function (b) {
        for (var c = a(this.getSelectionElement()); c.get(0) != this.$element.get(0);) {
            if (c.hasClass(b)) return !0;
            c = c.parent()
        }
        return !1
    }, a.Editable.prototype._isActiveAlign = function (b) {
        var c = this.getSelectionElements();
        return "justifyLeft" == b ? b = "left" : "justifyRight" == b ? b = "right" : "justifyCenter" == b ? b = "center" : "justifyFull" == b && (b = "justify"), b == a(c[0]).css("text-align") ? !0 : !1
    }, a.Editable.prototype._isActiveBullet = function () {
        var b = a(this.getSelectionElements()[0]);
        return b.hasClass("item_type_bullet") ? !0 : !1
    }, a.Editable.prototype._isActiveDefault = function (a) {
        try {
            if (document.queryCommandState(a) === !0) return !0
        } catch (b) {}
        return !1
    }
}(jQuery),
function (a) {
    a.Editable.prototype.refresh_disabled = ["createLink", "insertImage", "undo", "redo", "save"], a.Editable.prototype.refresh_dispatcher = {
        fontSize: function (a) {
            this.refreshFontSize(a)
        },
        fontFamily: function (a) {
            this.refreshFontFamily(a)
        },
        justifyLeft: function (a) {
            this.refreshAlign(a)
        },
        justifyRight: function (a) {
            this.refreshAlign(a)
        },
        justifyCenter: function (a) {
            this.refreshAlign(a)
        },
        justifyFull: function (a) {
            this.refreshAlign(a)
        },
        backColor: function () {
            this.refreshBackColor()
        },
        foreColor: function () {
            this.refreshForeColor()
        },
        titleColor: function () {
            this.refreshTitleColor()
        }
    }, a.Editable.prototype.registerRefreshEvent = function (a, b) {
        this.refresh_dispatcher[a] = b
    }, a.Editable.prototype.refreshBlocks = function () {
        a("[data-name=formatBlock] button i").html(a.Editable.commands.formatBlock.title), this.$bttn_wrapper.find('[data-cmd="formatBlock"]').each(a.proxy(function (a, b) {
            this.refreshFormatBlock(b)
        }, this)), a("[data-name=blockquote] button i").removeClass("active"), this.$bttn_wrapper.find('[data-cmd="blockquote"]').each(a.proxy(function (a, b) {
            this.refreshBlockquote(b)
        }, this))
    }, a.Editable.prototype.refreshButtons = function (b) {
        if (!(this.selectionInEditor() || this.browser.msie && a.Editable.getIEversion() < 9 || b)) return !1;
        this.refreshBlocks();
        for (var c = 0; c < this.options.buttons.length; c++) {
            var d = this.options.buttons[c];
            void 0 !== a.Editable.commands[d] && (void 0 !== a.Editable.commands[d].disabled && a.Editable.commands[d].disabled.call(this) === !0 ? this.$editor.find('[data-name="' + d + '"] button').prop("disabled", !0) : this.$editor.find('[data-name="' + d + '"] button').removeProp("disabled"))
        }
        this.refreshUndoRedo(), this.raiseEvent("refresh"), this.$bttn_wrapper.find("[data-cmd]").not('[data-cmd="formatBlock"],[data-cmd="blockquote"]').each(a.proxy(function (b, c) {
            var d = a(c).data("cmd");
            this.refresh_dispatcher[d] ? this.refresh_dispatcher[d].apply(this, [c]) : this.refreshDefault(c)
        }, this)), this.$bttn_wrapper.find("[data-name=foreColor], [data-name=backColor], [data-name=titleColor]").each(a.proxy(function (b, c) {
            var d = a(c).data("name");
            this.refresh_dispatcher[d] ? this.refresh_dispatcher[d].apply(this, [c]) : this.refreshDefault(c)
        }, this))
    }, a.Editable.prototype.refreshFormatBlock = function (b) {
        a(b).removeClass("active"), this.active(a(b).data("cmd"), a(b).data("val")) && (a("[data-name=formatBlock] button i").html(a(b).find("a").attr("title")), a(b).addClass("active"))
    }, a.Editable.prototype.refreshBlockquote = function (b) {
        a(b).removeClass("active"), this.active(a(b).data("cmd"), a(b).data("val")) && (a("[data-name=blockquote] button i").addClass("active"), a(b).addClass("active"))
    }, a.Editable.prototype.refreshUndoRedo = function () {
        if (this.isEnabled("undo") || this.isEnabled("redo")) {
            if (void 0 === this.$editor) return;
            this.$bttn_wrapper.find('[data-cmd="undo"], [data-cmd="redo"]').prop("disabled", !1), (0 === this.undoStack.length || this.undoIndex <= 1 || this.isHTML) && this.$bttn_wrapper.find('[data-cmd="undo"]').prop("disabled", !0), (this.undoIndex == this.undoStack.length || this.isHTML) && this.$bttn_wrapper.find('[data-cmd="redo"]').prop("disabled", !0)
        }
    }, a.Editable.prototype.refreshDefault = function (b) {
        a(b).removeClass("active"), this.active(a(b).data("cmd")) && a(b).addClass("active")
    }, a.Editable.prototype.refreshAlign = function (b) {
        var c = a(b).data("cmd");
        this.active(c) && (a(b).parents("ul").find("li").removeClass("active"), a(b).addClass("active"), a(b).parents(".fr-dropdown").find(".fr-trigger i").attr("class", a(b).find("i").attr("class")))
    }
}(jQuery),
function (a) {
    a.Editable.TAG_ORDER = ["table", "thead", "tbody", "tfoot", "tr", "th", "td", "ul", "ol", "li", "h1", "h2", "h3", "h4", "h5", "h6", "pre", "blockquote", "p", "div", "a", "strong", "em", "strike", "u", "span", "iframe"], a.Editable.SEPARATE = ["th", "td", "li", "h1", "h2", "h3", "h4", "h5", "h6", "pre", "blockquote", "p", "div"], a.Editable.prototype.tagKey = function (a) {
        return a.type + (a.attrs || []).sort().join("|")
    }, a.Editable.prototype.extendedKey = function (a) {
        return this.tagKey(a) + JSON.stringify(a.style)
    }, a.Editable.prototype.mergeStyle = function (a, b) {
        for (var c = {}, d = ["font_size", "font_family", "color", "background_color"], e = 0; e < d.length; e++) {
            var f = d[e];
            c[f] = null != b.style[f] ? b.style[f] : a.style[f]
        }
        return c
    }, a.Editable.prototype.mapDOM = function (b) {
        for (var c, d, e, f, g = 0, h = 0, i = [], j = "", k = [], l = {}, m = {}, n = 0; n < b.length; n++)
            if (c = b.charAt(n), "<" == c) {
                var o = b.indexOf(">", n + 1);
                if (-1 !== o) {
                    if (h++, d = b.substring(n, o + 1), f = this.tagName(d), "b" == f && (f = "strong"), "i" == f && (f = "em"), this.isSelfClosingTag(d)) {
                        m[g] || (m[g] = []), m[g].push({
                            i: h,
                            content: d
                        }), n = o;
                        continue
                    }
                    var p = this.isClosingTag(d),
                        q = null,
                        r = null,
                        s = null,
                        t = null,
                        u = null,
                        v = d.replace(/^<[\S\s]* style=("[^"]+"|'[^']+')[\S\s]*>$/gi, "$1");
                    if (v != d && (v = v.substring(1, v.length - 1), q = v.replace(/^[\S\s]*font-size: *([^;]+)[\S\s]*$/gi, "$1"), q == v && (q = null), r = v.replace(/^[\S\s]*font-family: *([^;]+)[\S\s]*$/gi, "$1"), r == v && (r = null), s = v.replace(/.*(;|^) *color: *([^;]+)[\S\s]*$/gi, "$2"), s == v && (s = null), t = v.replace(/^[\S\s]*background-color: *([^;]+)[\S\s]*$/gi, "$1"), t == v && (t = null)), u = d.match(/([\w\-]*)=("[^<>"]*"|'[^<>']*'|\w+)/gi))
                        for (var w = 0; w < u.length; w++) 0 === u[w].indexOf("style=") && u.splice(w, 1);
                    if (p) {
                        var x = l[f].pop();
                        g != i[x].start || "span" != f && "iframe" != f && "a" != f || (m[g] || (m[g] = []), m[g].push({
                            i: i[x].i,
                            content: i[x].original
                        }), m[g].push({
                            i: h,
                            content: d
                        }))
                    } else i.push({
                        type: f,
                        attrs: u,
                        style: {
                            font_size: q,
                            font_family: r,
                            color: s,
                            background_color: t
                        },
                        start: g,
                        i: h,
                        original: d
                    }), l[f] || (l[f] = []), l[f].push(i.length - 1);
                    n = o
                }
            } else {
                j += c, k[g] = {};
                for (f in l) {
                    e = l[f];
                    for (var y = 0; y < e.length; y++) {
                        d = i[e[y]];
                        var z = this.tagKey(d);
                        k[g][z] ? k[g][z].style = this.mergeStyle(k[g][z], d) : k[g][z] = a.extend({}, d)
                    }
                }
                g++
            }
        var A = [];
        for (n = 0; n < k.length; n++) {
            A[n] = {};
            for (var B in k[n]) A[n][this.extendedKey(k[n][B])] = k[n][B]
        }
        return {
            text: j,
            format: A,
            simple_tags: m
        }
    }, a.Editable.prototype.froalaDOM = function (b) {
        for (var c, d = [], e = {}, f = 0; f < b.length; f++) {
            var g = b[f];
            for (c in e) g[c] || (e[c].end = f, d.push(a.extend({}, e[c])), delete e[c]);
            for (var h in g) e[h] || (g[h].start = f, e[h] = g[h])
        }
        for (c in e) e[c].end = b.length, d.push(e[c]);
        return d
    }, a.Editable.prototype.sortNodes = function (b, c) {
        return a.Editable.TAG_ORDER.indexOf(b.type) > a.Editable.TAG_ORDER.indexOf(c.type)
    }, a.Editable.prototype.sortSimpleTags = function (a, b) {
        return a.i > b.i
    }, a.Editable.prototype.openTag = function (a) {
        var b = "<" + a.type;
        if (a.attrs) {
            a.attrs.sort();
            for (var c = 0; c < a.attrs.length; c++) b += " " + a.attrs[c]
        }
        var d = "";
        for (var e in a.style) null != a.style[e] && (d += e.replace("_", "-") + ": " + a.style[e] + ";");
        return "" !== d && (b += ' style="' + d + '"'), b += ">"
    }, a.Editable.prototype.cleanOutput = function (b) {
        var c, d, e, f, g = this.mapDOM(b),
            h = this.froalaDOM(g.format),
            i = g.simple_tags,
            j = g.text,
            k = {};
        for (d = 0; d < h.length; d++) c = h[d], k[c.start] || (k[c.start] = []), k[c.start].push(c);
        var l = {};
        for (b = "", d = 0; d <= j.length; d++) {
            var m = [];
            if (i[d])
                for (i[d] = i[d].sort(this.sortSimpleTags), f = 0; f < i[d].length; f++) b += i[d][f].content;
            if (l[d]) {
                for (var n in l)
                    if (n > d)
                        for (e = 0; e < l[n].length; e++) {
                            var o = l[n][e];
                            o.start >= l[d][l[d].length - 1].start && a.Editable.TAG_ORDER.indexOf(o.type) > a.Editable.TAG_ORDER.indexOf(l[d][l[d].length - 1].type) && a.Editable.SEPARATE.indexOf(o.type) < 0 && (b += "</" + o.type + ">", m.push(o), l[n].splice(e, 1))
                        }
                for (e = 0; e < l[d].length; e++) b += "</" + l[d][e].type + ">"
            }
            for (k[d] || (k[d] = []); m.length > 0;) {
                var p = m.pop();
                p.start = d, k[d].push(p)
            }
            if (k[d])
                for (k[d].sort(this.sortNodes), e = 0; e < k[d].length; e++) c = k[d][e], l[c.end] || (l[c.end] = []), l[c.end].push(c), b += this.openTag(c);
            d != j.length && (b += j[d])
        }
        return b
    }, a.Editable.prototype.cleanify = function (a) {
        return
    }, a.Editable.prototype.getWrapItem = function (b) {
        if (b || (b = this.getSelectionElement()), !b) return null;
        if (b = a(b), !(b.length > 0)) return null;
        b = b[0];
        for (var c = b, d = null; c;) {
            if (c.className && c.className.indexOf("wrap_item") > -1) {
                d = c;
                break
            }
            c = c.parentNode
        }
        return d
    }
}(jQuery), ! function (a) {
    var b = ["init", "getName", ""],
        c = function (b, c) {
            var d = new c(b);
            return {
                init: function () {
                    return d.init.apply(d, arguments)
                },
                get: function () {
                    return d
                },
                getName: function () {
                    return d.getName()
                },
                select: function () {
                    if (d.select) {
                        var a = d.select.apply(d, arguments);
                        return a
                    }
                },
                deselect: function () {
                    return d.deselect ? d.deselect() : void 0
                },
                isActive: function () {
                    return d.isActive ? d.isActive() : !1
                },
                getElement: function () {
                    return d.getElement ? d.getElement() : null
                },
                hasCaption: function () {
                    return d.hasCaption ? d.hasCaption() : !1
                },
                deleteItem: function () {
                    return d.deleteItem ? d.deleteItem() : null
                },
                doKeydown: function (a) {
                    return d.doKeydown ? d.doKeydown(a) : !0
                },
                validate: function () {
                    return d.validate ? d.validate() : !1
                },
                valid: function (a) {
                    return d.valid ? d.valid(a) : !0
                },
                validData: function (a) {
                    return d.validData ? d.validData(a) : !0
                },
                validTag: function (a) {
                    return d.validTag ? d.validTag(a) : !0
                },
                make: function (b) {
                    return d.make ? d.make(b) : a("")
                }
            }
        };
    c.generateButtonIcon = function (a) {
        return a.icon ? '<i class="' + a.icon.value + '"></i>' : a.icon_alt ? '<i class="for-text">' + a.icon_alt + "</i>" : a.icon_img ? '<img src="' + a.icon_img + '" alt="' + a.title + '"/>' : a.icon_txt ? "<i>" + a.icon_txt + "</i>" : a.title
    };
    var d = {},
        e = [],
        f = [];
    a.Editable.Module = c, a.Editable.addModule = function (a) {
        f.push(a)
    }, a.Editable.prototype.createModules = function () {
        for (var a = 0, b = f.length; b > a; a++) {
            var c = f[a],
                e = new c(this, c);
            d[e.getName()] = e
        }
    }, a.Editable.installModule = function (a) {
        for (var c = "", d = [], f = 0, g = b.length; g > f; f++) c = b[f], c && "function" != typeof a.prototype[c] && d.push(c);
        if (d.length > 0) {
            var h = a + "ì— êµ¬í˜„ë˜ì§€ ì•Šì€ í•¨ìˆ˜ê°€ ìžˆìŠµë‹ˆë‹¤.\n";
            throw h += d.join("\n"), new Error(h)
        }
        e.push(a)
    }, a.Editable.prototype.generateModules = function () {
        for (var a = 0, b = e.length; b > a; a++) {
            var f = new c(this, e[a]);
            d[f.getName()] = f
        }
    }, a.Editable.prototype.validateModule = function () {
        if (!this.isReal()) try {
            this.callModule("validate")
        } catch (a) {
            return this.error("jack ì—ê²Œ ì•Œë ¤ì£¼ì„¸ìš”(only dev) " + a.message), console.error(a), !1
        }
        return !0
    }, a.Editable.prototype.initModules = function (b) {
        var c = this;
        this.options.beforeDeleteModuleCallback = a.proxy(this.beforeDeleteModule, this), this.options.afterInsertModuleCallback = a.proxy(this.calculateWidth, this), this.options.moduleSelectedCallback = a.proxy(this.moduleSelected, this);
        for (var e in d) {
            var f = d[e];
            f.initModule ? f.initModule() : f.init()
        }
        a(".dynamic_button_wrap input[type=file]").on("mousedown", function () {
            c.browser.msie ? c.saveSelectionByMarkers() : c.saveSelection()
        });
        var g = this.getModule("image");
        history.state == g.options.stateEdit && window.history.replaceState(null, document.title)
    }, a.Editable.prototype.moduleSelected = function (a) {
        this.clearSelection(), this.focus(a), a.offset() && this.scrollToElement(a.offset().top)
    }, a.Editable.prototype.callbackModules = function (a) {
        for (var b in d) {
            var c = d[b];
            a.call(this, c)
        }
    }, a.Editable.prototype.callModule = function (a, b) {
        for (var c in d) {
            var e = d[c];
            e[a].apply(e, b)
        }
    }, a.Editable.prototype.getModule = function (a) {
        if (a) return d[a];
        for (var b in d)
            if (d[b].isActive()) return d[b];
        return null
    }, a.Editable.prototype.getModuleByWrapItem = function (b) {
        var c = this,
            d = null,
            e = a(b);
        if (0 == e.length) return null;
        var f = e.get(0);
        if (f) {
            var g = this.options.selectableWrapItems,
                h = f.className;
            if (h && a(g).each(function (a, b) {
                    return h.indexOf(b) > -1 ? (d = c.getModule(c.options.moduleClassNameMap[b]), !1) : void 0
                }), !d) {
                var i = this.getWrapItem(b);
                a(i).hasClass("item_type_gridGallery") && (d = this.getModule(c.options.moduleClassNameMap.item_type_gridGallery))
            }
        }
        return d
    }, a.Editable.prototype.beforeDeleteModule = function (b, c, d) {
        return c || this.setSelectionAfter(b), a(b).remove(), this.hide(), d || this.saveUndoStep(), this.wrapText(), this.focus(), !0
    }, a.Editable.prototype.setCoverButtons = function () {
        var b = this.options.coverButtons;
        if (!(b.length < 1)) {
            this.$element.position();
            a("body").append('<div class="cover-bttn-wrapper editor_hidden" id="cover--bttn--wrapper-' + this._id + '">'), this.$cover_bttn_wrapper = a("body").find("#cover--bttn--wrapper-" + this._id), this.$cover_bttn_wrapper.append('<div class="cover-bttn-inner"></div>'), this.$cover_bttn_inner = this.$cover_bttn_wrapper.find(".cover-bttn-inner"), this.setButtons(b, this.$cover_bttn_inner), this.bindButtonEvents(this.$cover_bttn_wrapper)
        }
    }, a.Editable.prototype.setSideButtons = function () {
        var b = this.options.sideButtons;
        if (!(b.length < 1)) {
            this.$element.position();
            a("body").append('<div class="side-bttn-wrapper editor_hidden fixed" id="side--bttn--wrapper-' + this._id + '">'), this.$side_bttn_wrapper = a("body").find("#side--bttn--wrapper-" + this._id), this.$side_bttn_wrapper.append('<div class="side-bttn-bg"></div>'), this.$side_bttn_wrapper.append('<div class="side-bttn-inner"></div>'), this.$side_bttn_inner = this.$side_bttn_wrapper.find(".side-bttn-inner"), this.setButtons(b, this.$side_bttn_inner), this.bindButtonEvents(this.$side_bttn_wrapper), this.addListener("resizeCover", a.proxy(function () {
                this.resetEditorMinHeight(), this.positionSideButtons()
            }, this)), a(window).on("scroll resize", a.proxy(function (a) {
                this.rePositionGuidePopup(), "resize" == a.type && (this.resetEditorMinHeight(), this.calculateWidth()), this.positionSideButtons(a)
            }, this)), this.positionSideButtons()
        }
    }, a.Editable.prototype.positionSideButtons = function (b) {
        var c = this.getModule("cover"),
            d = this.options.animationDuration + 1,
            e = this.$side_bttn_wrapper;
        b && "scroll" == b.type && (d = 0);
        var f = this;
        c && setTimeout(function () {
            var b = c.getHeight(),
                d = a(window).width(),
                g = a(window).scrollTop();
            1024 > d ? (e.removeClass("fixed"), e.css("left", d / 2 + 479 + "px"), g > b ? e.css("top", g + 97 + "px") : e.css("top", b + 37 + "px")) : (e.addClass("fixed"), e.css("left", ""), g > b ? e.css("top", "97px") : e.css("top", b - g + 37 + "px")), f.rePositionGuidePopup()
        }, d)
    }, a.Editable.prototype.insertItem = function (b, c, d, e) {
        var f = a(c),
            g = this.getCurrentElement();
        null == g || g.length < 1 ? this.$body.append(f) : this.isTextWrapItem(g) && "" == g.text() ? g.replaceWith(f) : g.after(f), this.callback("afterInsertModule", [c]), this.hide(), d && (this.focus(), this.clearSelection(), this.refreshBody(), this.resetCursor(b, f)), !e && this.saveUndoStep()
    }, a.Editable.prototype.replaceItem = function (b, c, d, e) {
        var f = a(d),
            g = this.$body;
        g.css("height", this.$body.height());
        var h = a(window).scrollTop(),
            i = a.proxy(function () {
                a(c).replaceWith(f), this.callback("afterInsertModule", [d]), f.hide(), this.hide(), this.saveUndoStep(), this.refreshBody(), e && null != b && b.select && b.select(f), setTimeout(function () {
                    f.fadeIn(100), g.css("height", ""), a(window).scrollTop(h)
                }, 1)
            }, this);
        a(c).hasClass("delete_by_module") ? i() : a(c).fadeOut(100, i)
    }, a.Editable.prototype.getCurrentElement = function () {
        var b;
        if (this.selectionInCover()) b = null;
        else if (this.selectionInEditor()) {
            var c = this.getSelectionElement();
            b = a(this.getWrapItem(c))
        } else this.isModuleActive() && (b = this.getModule().getElement());
        return b || (b = this.$element.find(".wrap_body .wrap_item:last-child").last()), a(b)
    }, a.Editable.prototype.addUseImageUploadButton = function (a, b) {
        this.options.useImageUploadButton.push({
            buttonClass: a,
            title: b
        })
    }, a.Editable.prototype.getUseImageUploadButton = function () {
        return this.options.useImageUploadButton
    }, a.Editable.prototype.isModuleActive = function (a) {
        if (a) {
            var b = d[a];
            return b ? b.isActive() : !1
        }
        for (var c in d)
            if (d[c].isActive()) return !0;
        return !1
    }, a.Editable.prototype.deselectModule = function () {
        for (var a in d)
            if (d[a].isActive()) return d[a].deselect()
    }, a.Editable.prototype.doModuleKeydown = function (b, c) {
        var d = this.getModule(),
            e = a.Editable.getKey(b),
            f = d.getElement();
        if (!d.doKeydown(b)) return !1;
        if (e.isEnterKey() && f) {
            var g = this.makeTextWrap();
            return e.isShiftKey() ? f.before(g.get(0)) : f.after(g.get(0)), this.hide(), this.focus(), this.addFontFamily(g, !0), !1
        }
        if (e.isTabKey()) return !1;
        if (e.isEscKey()) return d.deselect(), !1;
        if (d.hasCaption())
            if (this.selectionInCaption()) {
                if (this.limitText(this.getSelectionElement(), 100, b)) return !1
            } else if (!e.isMetaKey() && !e.isArrowKey()) {
            var h = f.find(".text_caption");
            h.get(0).firstChild ? this.setSelection(h.get(0).firstChild, h.text().length) : this.setSelection(h.get(0), 0)
        }
        return !0
    }, a.Editable.prototype.makeKeydownFlow = function (b) {
        if (this.isDisabled()) return !0;
        var c = a.Editable.getKey(b),
            d = !0,
            e = this.isModuleActive();
        if (c.isMetaKey()) {
            var f = null;
            if (e && (f = this.getModule(), !f.hasCaption() || !this.selectionInCaption()))
                if (c.isPaste()) this.clearSelection(), d = !1;
                else if (!c.isCopy() && !c.isCut()) {
                if ("gridGallery" == f.getName()) var g = f.get().getSelectImage();
                else {
                    var g = f.getElement();
                    g.before(a('<div class="copy_helper">&#8203;</div>')).after(a('<div class="copy_helper">&#8203;</div>'))
                }
                var h = g.get(0),
                    i = this.getRange().cloneRange();
                i.setStartBefore(h), i.setEndAfter(h);
                var j = this.getSelection();
                j.removeAllRanges(), j.addRange(i), i.detach(), a("body").addClass("be_sel_trans")
            }(c.isCopy() || c.isCut()) && (c.isCut() && (f && "gridGallery" == f.getName() ? window.setTimeout(jQuery.proxy(function () {
                f.get().updateColumn(null, !0), f.get().selectFirstImage(), this.saveUndoStep()
            }, this), 100) : this.selectionInCaption() || this.hide()), d = !0)
        }
        var k = this.selectionInCover(),
            l = null,
            m = null;
        if (this.isModuleActive())
            if (c.isDel()) {
                var f = this.getModule();
                if (f.hasCaption() && this.selectionInCaption()) {
                    var n = this.getSelectionElement(),
                        o = this.getSelectionTextInfo(n);
                    if (this.getSelection().isCollapsed) {
                        var p = o.atStart,
                            q = o.atEnd;
                        p && c.isBackKey() && (d = !1), q && c.isDelKey() && (d = !1)
                    } else this.getRange().deleteContents(), d = !1;
                    return this.refreshBody(c), d
                }
                var g = f.getElement();
                if (m = g.get(0), "gridGallery" == f.getName() ? l = f.get().getImageByActive("prev") : (l = m.nextSibling, a(l).hasClass("item_type_gridGallery") && (l = this.getModule("gridGallery").getFirstOrLastImage(l, "first"))), !l) {
                    l = m;
                    var r = this.makeTextWrap();
                    a(l).after(r), this.addFontFamily(r), l = r.get(0)
                }
                f.deleteItem(), d = !1
            } else if (this.doModuleKeydown(b)) {
            if (c.isArrowKey() && !this.selectionInCaption()) {
                var f = this.getModule();
                if ("gridGallery" != f.getName() && (m = f.deselect()), c.isArrowPrev()) "gridGallery" == f.getName() ? (l = f.get().getImageByActive("prev", "ArrowTrue"), this.isSelectableWrapItem(l) || (m = l)) : l = m.previousSibling, l || (l = m);
                else if ("gridGallery" == f.getName() ? (l = f.get().getImageByActive("next", "ArrowTrue"), this.isSelectableWrapItem(l) || (m = l)) : l = m.nextSibling, !l) {
                    l = m;
                    var r = this.makeTextWrap();
                    a(l).after(r), this.addFontFamily(r), l = r.get(0)
                }
            }
        } else d = !1;
        else if (!c.isShiftKey() && c.isArrowKey() || c.isDel()) {
            if (this.getSelection().isCollapsed) {
                var p = this.isStartOfWrapItem(),
                    q = this.isEndOfWrapItem(),
                    s = this.getWrapItem(),
                    t = a(s),
                    u = t.prev(),
                    v = t.next();
                if (c.isArrowKey()) u.hasClass("item_type_gridGallery") && (c.isArrowTopKey() || p && c.isArrowPrev()) ? l = this.getModuleByWrapItem(u).get().getFirstOrLastImage(u, "last") : q && v.hasClass("item_type_gridGallery") && (q && c.isArrowNext() || c.isArrowBottomKey()) ? l = this.getModuleByWrapItem(v).get().getFirstOrLastImage(v, "first") : p && c.isArrowPrev() ? l = s.previousSibling : q && c.isArrowNext() && (l = s.nextSibling);
                else if (c.isDel()) {
                    var w = null,
                        x = null;
                    if (p && q) c.isBackKey() ? (w = s.previousSibling, a(w).hasClass("item_type_gridGallery") && (w = a("img:last", w)[0]), null == w && (x = s.nextSibling, a(x).hasClass("item_type_gridGallery") && (w = a("img:first", w)[0]))) : c.isDelKey() && (x = s.nextSibling, a(x).hasClass("item_type_gridGallery") && (w = a("img:first", w)[0])), m = t.get(0), (c.isBackKey() || x) && t.remove(), w ? this.isTextWrapItem(w) || this.isBulletItem(w) ? this.setSelectionEnd(w) : l = w : l = x, d = !1;
                    else if (p && c.isBackKey())
                        if (w = s.previousSibling, -1 != a.inArray(s.tagName.toLowerCase(), ["blockquote", "h1", "h2", "h3"]) && this.isTextWrapItem(w) && "" == a(w).text() && a(w).find("br").length < 2) a(w).remove(), l = null, d = !1;
                        else if (w && "BLOCKQUOTE" == w.tagName && "BLOCKQUOTE" == s.tagName) {
                        if (s.firstChild) {
                            for (; w.lastChild && 1 == w.lastChild.nodeType && "BR" == w.lastChild.tagName;) w.removeChild(w.lastChild);
                            var y = w.lastChild;
                            a(w.lastChild).after(a(s)), a(s.firstChild).unwrap(), l = y.nextSibling, m = s
                        } else a(s).remove();
                        d = !1
                    } else if (w && a(w).hasClass("item_type_gridGallery")) l = a("img:last", w)[0];
                    else if (this.isBulletItem(s) && this.isTextWrapItem(w) || this.isTextWrapItem(s) && this.isBulletItem(w)) {
                        if (s.firstChild) {
                            for (; w.lastChild && 1 == w.lastChild.nodeType && "BR" == w.lastChild.tagName;) w.removeChild(w.lastChild);
                            var y = w.lastChild;
                            a(w.lastChild).after(a(s)), a(s.firstChild).unwrap(), l = y.nextSibling, m = s
                        } else a(s).remove();
                        d = !1
                    } else l = w;
                    else if (q && c.isDelKey()) {
                        var x = s.nextSibling;
                        if (x && "BLOCKQUOTE" == x.tagName && "BLOCKQUOTE" == s.tagName) {
                            if (x.firstChild) {
                                for (; s.lastChild && 1 == s.lastChild.nodeType && "BR" == s.lastChild.tagName;) s.removeChild(s.lastChild);
                                a(s.lastChild).after(a(x)), a(x.firstChild).unwrap()
                            } else a(x).remove();
                            d = !1
                        } else l = x && a(x).hasClass("item_type_gridGallery") ? a("img:first", x)[0] : x
                    }
                }
            } else if (c.isArrowKey() && this.getSelectionElement() == this.$body.get(0)) {
                var z = this.$body.children();
                0 != z.length && (c.isArrowPrev() ? this.setSelection(z[0]) : this.setSelectionEnd(z[z.length - 1]), d = !1)
            } else if (c.isDel() && this.selectionInEditor()) {
                var A = this.getSelectionElements();
                if (!this.selectionInCover() && A[0].className && -1 == A[0].className.indexOf("wrap_body")) {
                    l = null;
                    var B = A.length,
                        C = a(A),
                        D = null,
                        E = null,
                        F = 0;
                    C.each(a.proxy(function (b, c) {
                        0 == b ? D = c.previousSibling : b == B - 1 && (E = c.nextSibling);
                        var d = this.getWrapItem(c),
                            e = a(d);
                        !this.isTextWrapItem(d) && !this.isBulletItem(d) || this.isTextWrapItem(d) && this.isEmptyText(e) ? (e.remove(), F++) : null == l && (l = c)
                    }, this)), 0 != B && B == F ? E ? this.isTextWrapItem(E) ? this.setSelection(E) : l = E : D && (this.isTextWrapItem(D) ? this.setSelectionEnd(D) : l = D) : this.insertHTML('<i data-fr-verified="true" class="delete_empty">&#8203;</i>', !0)
                } else this.insertHTML('<i data-fr-verified="true" class="delete_empty">&#8203;</i>', !0, A[0]);
                d = !1
            }
        } else if (c.isSpace() && !k && this.selectionInEditor()) {
            var G = !1,
                j = this.getSelection();
            if (j.isCollapsed) {
                var H = j.anchorNode,
                    I = H;
                if (3 == H.nodeType && !this.getSelectionTextInfo(H).atEnd) {
                    var J = j.anchorOffset,
                        K = H.nodeValue,
                        L = K.substring(0, J),
                        M = K.substring(J, K.length);
                    M && M.length > 0 && (H.nodeValue = L, a(H).after(document.createTextNode(M)), this.setSelection(H, J))
                }
                if (3 == H.nodeType && 1 == this.getSelectionTextInfo(H).atEnd) {
                    var K = H.nodeValue,
                        N = -1;
                    if (K && (N = K.lastIndexOf(" ")), K && -1 != N) {
                        var O = K.substring(0, N + 1),
                            P = K.substring(N + 1);
                        I.nodeValue = P, a(I).before(document.createTextNode(O)), this.setSelection(I, P.length, I, P.length)
                    } else {
                        for (var Q = [], R = ""; H && 3 == H.nodeType && H && null == H.nodeValue.match(/\s+/);) H != I && Q.splice(0, 0, H), R = H.nodeValue + R, H = H.previousSibling;
                        Q.length > 1 && (I.nodeValue = R, a(Q).remove(), this.setSelection(I, R.length, I, R.length))
                    }
                }
                var S = (this.getModule("video"), this.getModule("opengraph")),
                    p = this.isStartOfWrapItem();
                p || !S || S.checkLinkBykey(c) ? this.linkCheckKeydown() : (d = !1, G = !0)
            }
            c.isShiftKey() || !c.isEnterKey() || G || this.handleEnterKey(b)
        }
        if (l)
            if (this.isSelectableWrapItem(l)) {
                var T = this.getModuleByWrapItem(l);
                T && (T.select(l, m), d = !1)
            } else m && (this.selectionIn(l) || this.setSelection(l), d = !1);
        if (!c.isShiftKey() && c.isEnterKey() && this.selectionInEditor() && this.getSelection().isCollapsed && !k && !this.selectionInCaption() && !e) {
            var U = this.getSelectionCoords();
            if (U && 0 != U.top) {
                var V = 26;
                V = a(this.getSelectionElement()).css("line-height"), V = parseInt(V, 10), isNaN(V) && (V = 26);
                var W = U.top,
                    X = a(window),
                    Y = X.scrollTop(),
                    Z = X.height(),
                    $ = Y,
                    _ = 2 * V;
                Y + _ > W ? (c.isArrowTopKey() || Y > W) && ($ = W - _) : W + _ + V > Y + Z && (_ += V, (c.isArrowBottomKey() || W + V > Y + Z) && ($ = W + _ - Z)), X.scrollTop($)
            }
        }
        return this.hideByKeydown(c), this.refreshBody(c), d || (b.stopPropagation(), b.preventDefault()), d
    }, a.Editable.prototype.scrollToElement = function (b) {
        $window = a(window);
        var c = $window.height(),
            d = $window.scrollTop();
        b > c + d - 100 ? $window.scrollTop(b + 100) : d > b && $window.scrollTop(b)
    }, a.Editable.prototype.hideByKeydown = function (a) {
        a.isMetaKey() || !this.$popup_editor.is(":visible") || !a.isEscKey() && (a.isShiftKey() && a.isArrowKey() || !this.$bttn_wrapper.is(":visible")) || this.hide()
    }, a.Editable.prototype.makeKeyupFlow = function (b) {
        var c = a.Editable.getKey(b),
            d = !0,
            e = a("body");
        if (e.hasClass("be_sel_trans") && a("body").removeClass("be_sel_trans"), c.isDel()) {
            var f = this.getWrapItem(this.getSelectionElement());
            (f && f.tagName && "blockquote" == f.tagName.toLowerCase() || this.isBulletItem(f)) && this.resetBlockquoteStyle()
        }
        return c.isShiftKey() || !c.isArrowKey() || this.isModuleActive() || this.setSelectionModule(this.getWrapItem()) || (d = !1), this.refreshBody(c), d
    }, a.Editable.prototype.refreshCut = function (b) {
        this.$body.find(">br").remove();
        var c = a(".copy_helper");
        if (c && c.length > 0) {
            var d = a(c.get(0)).next();
            d && d.hasClass("wrap_item") || !(c.length > 1) || (d = a(c.get(1)).next());
            var e = d;
            if (d.hasClass("wrap_item") && !d.hasClass("item_type_text")) {
                var f = this.getModuleByWrapItem(d);
                f && !f.validTag(d) && (e = d.next(), d.remove())
            }
            if (c.remove(), e && e.length > 0)
                if (this.isTextWrapItem(e)) this.setSelection(e.get(0));
                else {
                    var f = this.getModuleByWrapItem(e);
                    f && f.select && (this.clearSelection(), f.select(e))
                }
        }
    }, a.Editable.prototype.refreshBody = function (b) {
        var c = !1;
        if (b)
            if (b.isKeyup()) 0 != this.$body.find(".copy_helper").length && (c = !0), setTimeout(a.proxy(this.refreshCut, this), 1);
            else if (!this.isModuleActive()) {
            var d = this.getSelection();
            if (d && d.isCollapsed) {
                var e = this.getSelectionElement(),
                    f = a(e);
                if (this.selectionInEditor()) {
                    if (!this.selectionInCover() && !this.getWrapItem(e)) {
                        var g = this.makeTextWrap();
                        f.replaceWith(g.html(f.html())), this.setSelectionEnd(g.get(0))
                    }
                } else if (e == this.$body.get(0) && this.elementIn(this.$body, d.anchorNode)) {
                    for (var h = d.anchorNode; h;) {
                        var i = h.previousNode;
                        if (!i || 3 != i.nodeType) break;
                        h = i
                    }
                    var g = this.makeTextWrap();
                    for (g.html(""); h;) {
                        3 == h.nodeType && g.append(h);
                        var h = h.nextSibling
                    }
                    h && 1 == h.nodeType ? a(h).before(g) : this.$body.append(g), this.setSelectionEnd(g.get(0))
                }
            }
        }
        if (c || b && b.isMetaKey()) return !0;
        if (this.isEmpty() && !this.fakeEmpty()) {
            var j, k = this.selectionInEditor() || this.$body.is(":focus");
            j = this.makeTextWrap(), this.$body.html(j), k && this.setSelection(j.get(0))
        } else {
            var l = this.$body,
                m = function (a) {
                    return l.find(a)
                },
                n = ".wrap_item .wrap_item",
                o = ".item_type_text img",
                p = ".text_caption br";
            m(n).each(a.proxy(function (b, c) {
                a(this.getWrapItem(c.parentNode)).replaceWith(this.makeTextWrap().html(a(c).html()))
            }, this)), m(o).each(a.proxy(function (b, c) {
                a(c).remove()
            }, this)), m(p).remove();
            try {
                if (m(n).length > 0) throw Error("hasUglyWrapper");
                if (m(o).length > 0) throw Error("hasUglyImage")
            } catch (q) {
                alert("ì´ ì–¼ëŸ¿ì´ ëœ¨ë©´ jack ì„ ì°¾ì•„ì£¼ì„¸ìš”.")
            }
            a(".delete_empty").each(a.proxy(function (b, c) {
                if (0 == a(c).closest(".wrap_item").length && 0 == a(c).closest(".wrap_cover").length) {
                    for (var d = [], e = c;
                        (e = e.nextSibling) && e && !this.isWrapItem(e);) d.push(e);
                    if (d.length > 0) {
                        var f = this.makeTextWrap();
                        f.html(""), f.append(d), a(c).replaceWith(f), this.setSelection(f.get(0))
                    } else a(c).remove()
                } else a(c).remove()
            }, this)), a(".item_type_text:empty").append("<br>");
            var r = l.find(".item_type_text");
            if (0 == r.length) {
                var s = this.makeTextWrap();
                this.$body.append(s)
            } else 1 == r.length && "" == r.text() && 0 == r.find("br") && (this.focus(), r.append("<br>"), this.setSelection(r.get(0)))
        }
    }, a.Editable.prototype.setSelectionModule = function (a) {
        if (this.isSelectableWrapItem(a)) {
            var b = this.getModuleByWrapItem(a);
            if (b) return b.select(a), !1
        }
    }, a.Editable.prototype.moveCursor = function (b, c) {
        if (c || this.selectionInEditor() && !this.selectionInCover()) {
            var d = this.getWrapItem(c);
            if (this.isTextWrapItem(d)) return;
            var e = a(d),
                f = null;
            f = b ? e.prev().get(0) : e.next().get(0), f && 1 == f.nodeType ? (this.setSelection(f), this.isTextWrapItem(f) || this.moveCursor(b)) : b || this.setSelectionAfter(f)
        }
    }, a.Editable.prototype.resetEditorMinHeight = function () {
        var a = this.$element.find(".wrap_body"),
            b = (a.height(), this.getModule("cover")),
            c = b ? b.getHeight() : 0,
            d = a.css("padding-top"),
            e = a.css("padding-bottom");
        d = d && d.replace(/\D/g, ""), e = e && e.replace(/\D/g, ""), (!d || isNaN(d)) && (d = 0), (!e || isNaN(e)) && (e = 0);
        var f = jQuery(window).height() - c - d - e - 1;
        f = Math.max(f, this.options.bodyMinHeight), a.css("min-height", f + "px")
    }, a.Editable.prototype.calculateWidth = function () {
        var b = this.$element.width(),
            c = -((b - 700) / 2);
        a(".wrap_item:not(.item_type_text, .item_type_bullet)").css({
            width: b + "px",
            "margin-left": c + "px"
        })
    }, a.Editable.prototype.getApiDomain = function () {
        return this.options.apiDomain
    }, a.Editable.prototype.getUploadURL = function () {
        return this.options.apiDomain + "/upload"
    }, a.Editable.prototype.getTextWrapClass = function () {
        return "wrap_item item_type_text"
    }, a.Editable.prototype.getBulletWrapClass = function () {
        return "wrap_item item_type_bullet"
    }, a.Editable.prototype.makeTextWrap = function (b, c, d) {
        var e = b || (this.options.paragraphy ? "p" : "div"),
            f = a("<" + e + ">" + (d ? "" : "<br>") + "</" + e + ">").addClass(this.getTextWrapClass());
        return c ? f.addClass(c) : f
    }, a.Editable.prototype.showProgress = function (b) {
        this.enableContenteditable(!1), b = b || "ing ...", NProgress.set(0), this.progressWrap || (this.progressWrap = a('<div class="progress_wrap"></div>').appendTo(document.body), this.progressText = a('<p class="progress_message"></p>').appendTo(document.body)), this.showProgressTime = (new Date).getTime(), this.progressWrap.hide(), this.progressWrap.fadeIn("500", a.proxy(function () {
            this.progressWrap.show()
        }, this)), this.progressText.html(b), this.progressText.show()
    }, a.Editable.prototype.getErrorMessage = function (b) {
        return a.Editable.ERROR_MESSAGE[b] ? a.Editable.ERROR_MESSAGE[b] : b
    }, a.Editable.prototype.showProgressCode = function (b) {
        var c = this.getErrorMessage(a.Editable.ERROR_MESSAGE[b]);
        this.showProgress(c)
    }, a.Editable.prototype.hideProgress = function () {
        if (this.enableContenteditable(!0), this.progressWrap && 0 != this.showProgressTime) {
            var b = (new Date).getTime() - this.showProgressTime;
            this.showProgressTime = 0, b = 1e3 > b ? 1e3 - b : 0, setTimeout(a.proxy(function () {
                NProgress.set(1), this.progressWrap.fadeOut("500", a.proxy(function () {
                    this.progressWrap.hide()
                }, this)), this.progressText.hide()
            }, this), b)
        }
    }, a.Editable.prototype.isEditable = function () {
        var a = this.$body.attr("contenteditable");
        return a && "true" == a
    }
}(jQuery),
function (a) {
    var b = a.ajaxSettings.xhr;
    a.ajaxSetup({
        xhrFields: {
            withCredentials: !0
        },
        xhr: function () {
            var a = b(),
                c = this;
            return a && ("function" == typeof a.addEventListener && void 0 !== c.progress && a.addEventListener("progress", function (a) {
                c.progress(a)
            }, !1), "object" == typeof a.upload && void 0 !== c.progress && a.upload.addEventListener("progress", function (a) {
                c.progress(a)
            }, !1)), a
        }
    })
}(jQuery), ! function (a) {
    var b = function () {
        var b = 3e3;
        this.$panel = a('<div class="toast_panel"><span class="message"></span></div>').appendTo(document.body), this.$message = this.$panel.find(".message"), this.timer = null, this.hide = function (c) {
            c = void 0 == c ? !1 : c, this.timer && (clearTimeout(this.timer), this.timer = null), c && this.$panel.removeClass("log error"), this.timer = setTimeout(a.proxy(function () {
                this.$panel.removeClass("log error")
            }, this), b)
        }, this.showMessage = function (a, b) {
            this.$panel.addClass(a), this.$message.html(b)
        }, this.log = function (a) {
            this.hide(!0), this.showMessage("log", a)
        }, this.error = function (a, b) {
            this.hide(!0), this.showMessage("error", a), b && console.error(b)
        }, this.errorCode = function (b, c) {
            this.hide(!0);
            var d = a.Editable.ERROR_CODE[b];
            d && this.showMessage("error", d), c && console.error(c)
        }
    };
    a.Editable.prototype.getToast = function () {
        return this.toast || (this.toast = new b), this.toast
    }, a.Editable.prototype.log = function (a) {
        this.getToast().log(a)
    }, a.Editable.prototype.logCode = function (b) {
        var c = a.Editable.ERROR_MESSAGE[b];
        c && this.log(c)
    }, a.Editable.prototype.error = function (a) {
        this.getToast().error(a)
    }, a.Editable.prototype.errorCode = function (b) {
        var c = a.Editable.ERROR_MESSAGE[b];
        c && this.error(c)
    }, a.Editable.prototype.cutText = function (b, c, d) {
        if (!b || 0 == a(b).length) return !1;
        if (d && d.keyCode <= 46 && 32 != d.keyCode) return !1;
        var e = a(b).get(0),
            f = e.innerText;
        if (f && f.length >= c) {
            if (d) {
                var g = a.Editable.getKey(d);
                g.isMetaKey() || (d.preventDefault(), d.stopPropagation())
            }
            if (f.length > c) {
                f = a.Editable.innerText(e);
                var h = f ? f.length : 0;
                return h >= c && (f = a.Editable.innerText(e, f.substr(0, c))), !0
            }
        }
    }, a.Editable.prototype.limitText = function (b, c, d) {
        if (!b || 0 == a(b).length) return !1;
        if (d && d.keyCode <= 46 && 32 != d.keyCode) return !1;
        var e = a(b),
            b = e.get(0),
            f = null,
            g = a.Editable.innerText(b),
            h = g.split(/\n/);
        if (h.length > 2 && (g = h[0] + "\n" + h[1]), g && g.length >= c) {
            var i = this.getRange(),
                j = i.startContainer,
                k = i.startOffset;
            childs = b.childNodes;
            for (var l = 0, m = 0, n = childs.length; n > m; m++)
                if (f = childs[m]) {
                    if (j == f) {
                        l += k;
                        break
                    }
                    1 == f.nodeType && "BR" == f.tagName ? l++ : 3 == f.nodeType && (l += f.length)
                }
            if (d) {
                var o = a.Editable.getKey(d);
                o.isMetaKey() || (d.preventDefault(), d.stopPropagation())
            }
            if (g.length > c) {
                var p = !1,
                    q = this,
                    n = g ? g.length : 0;
                if (n > c) {
                    var r = n - c;
                    l - r >= 0 && 30 >= l - r && 30 >= n - l && 30 >= l - r + (n - l) ? (g = g.substr(0, l - r) + g.substring(l, n), l -= r) : (g = g.substring(0, c), l = g.length), a.Editable.innerText(b, g), childs = b.childNodes;
                    for (var s = 0, m = 0, n = childs.length; n > m; m++)
                        if (f = childs[m]) {
                            var t = s;
                            if (1 == f.nodeType && "BR" == f.tagName ? s++ : 3 == f.nodeType && (s += f.length), s >= l && f)
                                if (1 == f.nodeType && "BR" == f.tagName);
                                else if (3 == f.nodeType) {
                                var u = l - t;
                                q.setSelection(f, 0 > u ? 0 : u), p = !0;
                                break
                            }
                        }
                }
                return p || this.setSelectionEnd(b), !0
            }
            return !1
        }
    }
}(jQuery), ! function (a) {
    a.Editable.escapeQuotation = function (a) {
        return void 0 == a || null == a || "" == a ? "" : a.replace(/\"/gi, '\\"')
    }, a.Editable.unescapeQuotation = function (a) {
        return void 0 == a || null == a || "" == a ? "" : a.replace(/\\\"/gi, '"')
    }, a.Editable.colorNameSet = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        "indianred ": "#cd5c5c",
        "indigo ": "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    }, a.Editable.getHexColorByName = function (b) {
        return a.Editable.colorNameSet[b] || b
    }, a.Editable.documentWidth = function () {
        var b = jQuery("<div>test</div>"),
            c = jQuery("<div></div>").append(b),
            d = b[0],
            e = c[0];
        jQuery("body").append(e);
        var f = d.offsetWidth;
        c.css("overflow", "scroll");
        var g = e.clientWidth;
        c.remove();
        var h = f - g;
        return a(document).height() > a(window).height() ? parseInt(a(document).width()) + parseInt(h) : parseInt(a(document).width())
    }, a.Editable.isUrl = function (b) {
        if (null == b || 0 == b.length) return !1;
        var c = b.match(a.Editable.VALID_URL_EXPR);
        return a.Editable.checkMatch(c) && c[0] == b ? !0 : !1
    }, a.Editable.containsUrl = function (b) {
        if (null == b || 0 == b.length) return !1;
        var c = b.match(a.Editable.VALID_URL_EXPR_CONTAINS);
        return a.Editable.checkMatch(c) ? !0 : !1
    }, a.Editable.checkMatch = function (a) {
        return null != a && a.length > 1 && a[1]
    }, a.Editable.getHtmlTag = function (b) {
        return b = a(b), b.length > 0 ? b.get(0) : null
    }, a.Editable.getKey = function (a) {
        var b = a ? a.which : -1,
            c = a ? (a.ctrlKey || a.metaKey) && !a.altKey : !1,
            d = a ? a.shiftKey : !1,
            e = a.type,
            f = 46,
            g = 8,
            h = 9,
            i = 32,
            j = 13,
            k = 27,
            l = 38,
            m = 39,
            n = 40,
            o = 37,
            p = 66,
            q = 67,
            r = 73,
            s = 75,
            t = 83,
            u = 85,
            v = 86,
            w = 88,
            x = 90;
        return {
            getCode: function () {
                return b
            },
            getType: function () {
                return e
            },
            isKeydown: function () {
                return "keydown" == e
            },
            isKeyup: function () {
                return "keyup" == e
            },
            isTabKey: function () {
                return h == b
            },
            isSpace: function () {
                return this.isEnterKey() || this.isSpacebarKey() || this.isTabKey()
            },
            isSpacebarKey: function () {
                return i == b
            },
            isDel: function () {
                return this.isDelKey() || this.isBackKey()
            },
            isDelKey: function () {
                return f == b
            },
            isBackKey: function () {
                return g == b
            },
            isEnterKey: function () {
                return j == b
            },
            isEscKey: function () {
                return k == b
            },
            isArrowKey: function () {
                return this.isArrowPrev() || this.isArrowNext()
            },
            isArrowPrev: function () {
                return this.isArrowTopKey() || this.isArrowLeftKey()
            },
            isArrowNext: function () {
                return this.isArrowBottomKey() || this.isArrowRightKey()
            },
            isArrowTopKey: function () {
                return l == b
            },
            isArrowBottomKey: function () {
                return n == b
            },
            isArrowLeftKey: function () {
                return o == b
            },
            isArrowRightKey: function () {
                return m == b
            },
            isMetaKey: function () {
                return c
            },
            isShiftKey: function () {
                return d
            },
            isCopy: function () {
                return this.isMetaKey() && q == b
            },
            isCut: function () {
                return this.isMetaKey() && w == b
            },
            isPaste: function () {
                return this.isMetaKey() && v == b
            },
            isUndoRedoKey: function () {
                return this.isMetaKey() && x == b
            },
            isShortcutBold: function () {
                return this.isMetaKey() && p == b
            },
            isShortcutItalic: function () {
                return this.isMetaKey() && r == b
            },
            isShortcutUnderline: function () {
                return this.isMetaKey() && u == b
            },
            isShortcutStrikeThrough: function () {
                return this.isMetaKey() && t == b
            },
            isShortcutLink: function () {
                return this.isMetaKey() && s == b
            },
            isRedo: function () {
                return this.isShiftKey() && this.isUndo()
            },
            isUndo: function () {
                return this.isMetaKey() && x == b
            }
        }
    }, a.Editable.hexToRGB = function (a) {
        var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        a = a.replace(b, function (a, b, c, d) {
            return b + b + c + c + d + d
        });
        var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
        return c ? {
            r: parseInt(c[1], 16),
            g: parseInt(c[2], 16),
            b: parseInt(c[3], 16)
        } : null
    }, a.Editable.RGBToHex = function (a) {
        function b(a) {
            return ("0" + parseInt(a, 10).toString(16)).slice(-2)
        }
        try {
            return a && "transparent" !== a ? /^#[0-9A-F]{6}$/i.test(a) ? a : (a = a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/), ("#" + b(a[1]) + b(a[2]) + b(a[3])).toLowerCase()) : ""
        } catch (c) {
            return ""
        }
    }, a.Editable.hexToRGBString = function (a) {
        var b = this.hexToRGB(a);
        return "rgb(" + b.r + ", " + b.g + ", " + b.b + ")"
    }, a.Editable.getIEversion = function () {
        var a, b, c = -1;
        return "Microsoft Internet Explorer" == navigator.appName ? (a = navigator.userAgent, b = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})"), null !== b.exec(a) && (c = parseFloat(RegExp.$1))) : "Netscape" == navigator.appName && (a = navigator.userAgent, b = new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})"), null !== b.exec(a) ? c = parseFloat(RegExp.$1) : (b = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})"), c = parseFloat(RegExp.$1))), c
    }, a.Editable.browser = function () {
        var a = {};
        if (this.getIEversion() > 0) a.msie = !0;
        else {
            var b = navigator.userAgent.toLowerCase(),
                c = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || b.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [],
                d = {
                    browser: c[1] || "",
                    version: c[2] || "0"
                };
            c[1] && (a[d.browser] = !0), parseInt(d.version, 10) < 9 && a.msie && (a.oldMsie = !0), a.chrome ? a.webkit = !0 : a.webkit && (a.safari = !0)
        }
        return a
    }, a.Editable.isArray = function (a) {
        return a && !a.propertyIsEnumerable("length") && "object" == typeof a && "number" == typeof a.length
    }, a.Editable.makeImageInputWrapper = function (b, c) {
        a(b).each(function (b, d) {
            var e = a(d.buttonClass).parent(),
                f = c(b, d);
            e.wrap('<div class="dynamic_button_wrap"></div>'), e.after(f)
        })
    }, a.Editable.makeFileInputWrapper = function (b, c) {
        a(b).each(function (b, d) {
            var e = a(d).parent(),
                f = c(d);
            e.wrap('<div class="dynamic_button_wrap"></div>'), e.after(f)
        })
    }, a.Editable.innerText = function (b, c) {
        if (!c) {
            if (b.innerText) return b.innerText;
            for (var d = b.childNodes, e = "", f = 0, g = d.length; g > f; f++) {
                var h = d[f];
                h && (1 == h.nodeType && "BR" == h.tagName ? h.previousSibling && 3 != h.previousSibling.nodeType || h.nextSibling && 3 != h.nextSibling.nodeType || (e += "\n") : 3 == h.nodeType && (e += h.nodeValue))
            }
            return e
        }
        if (a(b).blur(), b.innerText) b.innerText = c;
        else {
            var i = a(b),
                j = c.split(/\n/);
            if (j.length > 1) {
                i.html("");
                for (var f = 0, g = j.length; g > f; f++) {
                    var k = j[f];
                    i.append(k), f != g - 1 && i.append(a("<br>"))
                }
            } else i.html(""), i.append(c)
        }
        a(b).focus()
    }, a.Editable.getTemplate = function (a, b) {
        return Handlebars.template && BE && BE.Templates && BE.Templates[a] ? BE.Templates[a](b) : null
    };
    var b = {
            start: 44032
        },
        c = {
            start: 4352,
            end: 4370
        },
        d = {
            start: 4449,
            end: 4469
        },
        e = {
            start: 4519,
            end: 4546
        };
    a.Editable.unionToComplete = function (b) {
        if (b && b.length > 0) {
            for (var f = "", g = null, h = 0, i = b.length; i > h; h++) {
                var j = b.charAt(h),
                    k = b.charCodeAt(h),
                    l = !1;
                k >= c.start && k <= e.end && (k >= c.start && k <= c.end ? (null != g && (f += a.Editable.changeToCompleteByObject(g), g = null), g = a.Editable.makeUnionCharSet(g, {
                    0: k
                }), l = !0) : k >= d.start && k <= d.end ? (null == g || null != g[0] && null == g[2] || (f += a.Editable.changeToCompleteByObject(g), g = null), g = a.Editable.makeUnionCharSet(g, {
                    1: k
                }), l = !0) : k >= e.start && k <= e.end && (g = a.Editable.makeUnionCharSet(g, {
                    2: k
                }), f += a.Editable.changeToCompleteByObject(g), g = null, l = !0)), l ? null != g && i - 1 == h && (f += a.Editable.changeToCompleteByObject(g), g = null) : (null != g && (f += a.Editable.changeToCompleteByObject(g), g = null), f += j)
            }
            return f
        }
        return b
    }, a.Editable.changeToCompleteByObject = function (a) {
        var f = a[0],
            g = a[1],
            h = a[2];
        f = null == f ? 0 : f - c.start, g = null == g ? 0 : g - d.start, h = null == h ? 0 : h - e.start;
        var i = b.start + 28 * (21 * f + g) + h;
        return String.fromCharCode(i)
    }, a.Editable.makeUnionCharSet = function (a, b) {
        return jQuery.extend(a || {}, b)
    }, a.Editable.getThumbnailUrl = function (a) {
        return a ? (a = 0 == a.indexOf("//") ? "http:" + a : a, "//t1.daumcdn.net/thumb/R1280x0/?fname=" + encodeURIComponent(a)) : ""
    }, a.Editable.getSampleUrl = function (a) {
        return a = 0 == a.indexOf("//") ? "http:" + a : a, "//t1.daumcdn.net/thumb/R200x0/?fname=" + encodeURIComponent(a)
    }
}(jQuery),
function (a) {
    a.registerHelper("ifCond", function (a, b, c) {
        return c ? a == b ? c.fn(this) : c.inverse(this) : null
    })
}(Handlebars), ! function (a) {
    a.Editable.prototype.initEditorSelection = function () {
        a(window).on("hide." + this._id, a.proxy(function () {
            this.isDisabled() || this.hide(!1)
        }, this)), this.$element.on("focus", a.proxy(function () {
            this.blurred && (this.blurred = !1, this.callback("focus", [], !1))
        }, this)), this.$element.on(this.mousedown, a.proxy(function (a) {
            this.isDisabled() || (this.hide(), this.checkClickArea(a))
        }, this)), this.options.disableRightClick && this.$element.contextmenu(a.proxy(function (a) {
            return a.preventDefault(), this.options.inlineMode && this.$element.focus(), !1
        }, this)), this.$element.on("mouseup touchend", a.proxy(function (b) {
            if (!this.isDisabled()) {
                var c = this.text(),
                    d = this.selectionInEditor(),
                    e = a.proxy(function () {
                        return this.isModuleActive() ? !1 : "" !== c && d || this.options.alwaysVisible || (3 == b.which || 2 == b.button) && this.options.inlineMode && this.options.disableRightClick
                    }, this);
                if (!e()) return this.imageMode = !1, !1;
                this.link || (this.imageMode ? this.options.inlineMode || (b.stopPropagation(), this.refreshButtons()) : (b.stopPropagation(), setTimeout(a.proxy(function () {
                    c = this.text(), e() && (this.link || this.imageMode || (this.show(b), this.refreshButtons()))
                }, this), 0))), this.imageMode = !1
            }
        }, this)), this.$element.on("mousedown", "img, a, .text_caption", a.proxy(function (a) {
            this.isDisabled() || a.stopPropagation()
        }, this)), this.$editor.on("mouseup", a.proxy(function (a) {
            this.isDisabled() || (a.stopPropagation(), this.options.inlineMode === !1 && this.hide())
        }, this)), this.$editor.on("mousedown", ".fr-dropdown-menu", a.proxy(function (a) {
            a.stopPropagation(), this.noHide = !0
        }, this)), this.$popup_editor.on("mousedown", ".fr-dropdown-menu", a.proxy(function (a) {
            a.stopPropagation(), this.noHide = !0
        }, this)), this.$popup_editor.on("mouseup", a.proxy(function (a) {
            this.isDisabled() || a.stopPropagation()
        }, this)), this.$link_wrapper && this.$link_wrapper.on("mouseup", a.proxy(function (a) {
            this.isDisabled() || (a.stopPropagation(), this.$link_wrapper.trigger("hideLinkList"))
        }, this)), this.$edit_popup_wrapper && this.$edit_popup_wrapper.on("mouseup", a.proxy(function (a) {
            this.isDisabled() || a.stopPropagation()
        }, this)), this.$image_wrapper && this.$image_wrapper.on("mouseup", a.proxy(function (a) {
            this.isDisabled() || a.stopPropagation()
        }, this)), this.$video_wrapper && this.$video_wrapper.on("mouseup", a.proxy(function (a) {
            this.isDisabled() && a.stopPropagation()
        }, this)), this.$overlay && this.$overlay.on("mouseup", a.proxy(function (a) {
            this.isDisabled() || a.stopPropagation()
        }, this)), this.options.trackScroll && (a(window).bind("scroll." + this._id, a.proxy(function () {
            clearTimeout(this.scrollTimer), this.isScrolling = !0, this.scrollTimer = setTimeout(a.proxy(function () {
                this.isScrolling = !1
            }, this), 2500)
        }, this)), a(window).on("scroll", a.proxy(function () {
            a(window).trigger("scroll." + this._id)
        }, this))), a(window).on("mouseup." + this._id, a.proxy(function () {
            this.isDisabled() || this.isScrolling || (this.$bttn_wrapper.find("button[data-cmd]").removeClass("active"), !this.selectionInEditor() || a("[contenteditable=true]").is(":focus") || this.pasting || (this.selectionDisabled = !0, this.callback("blur"), this.blurred = !0, this.clearSelection(), this.selectionDisabled = !1), this.selectionInEditor() && "" !== this.text() && !this.isTouch() ? (this.selectionInCover() && this.getModule("cover") && this.getModule("cover").selectTitle(), this.show(null)) : this.$popup_editor.is(":visible") && this.hide())
        }, this)), a(window).on("mouseup", a.proxy(function () {
            a(window).trigger("window." + this._id)
        }, this)), this.isTouch() && this.options.inlineMode && a(document).on("selectionchange." + this._id, a.proxy(function (b) {
            this.isDisabled() || this.isScrolling || (clearTimeout(this.selectionChangedTimeout), this.selectionChangedTimeout = setTimeout(a.proxy(function () {
                if (this.selectionInEditor() && this.link !== !0) {
                    var a = this.text();
                    "" !== a ? this.iPhone() || (this.iPod() ? this.hide() : (this.show(), b.stopPropagation())) : this.hide()
                }
            }, this), 75))
        }, this)), a(document).on("selectionchange", function (b) {
            a(document).trigger("selectionchange." + this._id, [b])
        }), a(window).bind("keydown." + this._id, a.proxy(function (a) {
            return this.hideGuide(), this.enabledEditorTool ? this.makeKeydownFlow(a) : !0
        }, this)), a(window).on("keydown", function (b) {
            a(window).trigger("keydown." + this._id, [b])
        }), a(window).on("keyup." + this._id, a.proxy(function (a) {
            return this.enabledEditorTool ? (this.selectionInEditor() && "" !== this.text() && (!this.browser.msie || a.keyCode <= 46) && (this.getModule("cover").selectionInSubTitle() || (this.refreshButtons(), this.repositionEditor())), this.makeKeyupFlow(a)) : !0
        }, this)), a(window).on("keyup", function (b) {
            a(window).trigger("keyup." + this._id, [b])
        })
    }
}(window.jQuery), ! function (a) {
    a.Editable.prototype.isTextWrapItemNotBlockquote = function (a) {
        return this.isTextWrapItem(a) && "blockquote" != a.get(0).tagName.toLowerCase()
    }, a.Editable.prototype.checkClickArea = function (b) {
        if (a(b.target).hasClass("wrap_body")) {
            var c = b.pageY,
                d = this.$element.find(".wrap_body>:first-child"),
                e = this.$element.find(".wrap_body>:last-child"),
                f = d.offset() ? d.offset().top : 0,
                g = e.offset() ? e.offset().top : 0;
            if (f > c) this.isTextWrapItemNotBlockquote(d) || this.setSelectionBefore(d);
            else if (c > g) this.isTextWrapItemNotBlockquote(e) || this.setSelectionAfter(e);
            else
                for (var h = d; h.offset().top + h.height() < c;) {
                    var i = h;
                    h = h.next();
                    var j = h.offset();
                    if (j && j.top > c) {
                        if (this.isTextWrapItemNotBlockquote(i)) this.setSelectionEnd(i.get(0));
                        else if (this.isTextWrapItemNotBlockquote(h)) this.setSelection(h.get(0));
                        else {
                            var k = this.makeTextWrap();
                            h.before(k), this.setSelection(k.get(0)), this.addFontFamily(k)
                        }
                        b.preventDefault();
                        break
                    }
                }
        }
    }, a.Editable.prototype.text = function () {
        var b = "";
        return window.getSelection ? b = window.getSelection() : document.getSelection ? b = document.getSelection() : document.selection && (b = document.selection.createRange().text), a.trim(b.toString())
    }, a.Editable.prototype.selectionInEditor = function () {
        var b = this.$body.get(0);
        if (this.getSelectionElement() == b && this.getSelection().isCollapsed) return !1;
        var c = this.getSelectionParent(),
            d = !1;
        c == b && (d = !0), d === !1 && a(c).parents().each(a.proxy(function (a, c) {
            c == b && (d = !0)
        }, this));
        var e = d || this.selectionInCover();
        return e
    }, a.Editable.prototype.selectionInCover = function () {
        var a, b = this.getModule("cover").get();
        return b ? (a = b.getRootElement(), this.selectionIn(a)) : !1
    }, a.Editable.prototype.selectionInBlockquote = function () {
        var b = !0,
            c = this.getSelectionElements();
        return c && a(c).each(function (a, c) {
            "blockquote" != c.tagName.toLowerCase() && (b = !1)
        }), b
    }, a.Editable.prototype.selectionInBullet = function () {
        var b = !0,
            c = this.getSelectionElements();
        return c && a(c).each(function (c, d) {
            a(d).hasClass("item_type_bullet") || (b = !1)
        }), b
    }, a.Editable.prototype.selectionInCaption = function (b) {
        var c = b || this.getSelectionElement();
        return c ? c && c.className && -1 != c.className.indexOf("text_caption") ? !0 : a(c).closest(".text_caption").length > 0 ? !0 : !1 : !1
    }, a.Editable.prototype.elementInCover = function (a) {
        var b, c = this.getModule("cover").get();
        return c ? (b = c.getRootElement(), this.elementIn(b, a)) : !1
    }, a.Editable.prototype.selectionIn = function (a) {
        return this.elementIn(a, this.getSelectionElement())
    }, a.Editable.prototype.elementIn = function (b, c) {
        var b = a(b).get(0),
            d = c,
            e = !1;
        return d == b && (e = !0), e === !1 && a(d).parents().each(a.proxy(function (a, c) {
            c == b && (e = !0)
        }, this)), e
    }, a.Editable.prototype.getSelection = function () {
        var a = "";
        return a = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange()
    }, a.Editable.prototype.getRange = function () {
        var a = this.getRanges();
        return a.length > 0 ? a[0] : null
    }, a.Editable.prototype.getRanges = function () {
        var a = this.getSelection();
        if (a.getRangeAt && a.rangeCount) {
            for (var b = [], c = 0, d = a.rangeCount; d > c; c++) b.push(a.getRangeAt(c));
            return b
        }
        return document.createRange ? [document.createRange()] : []
    }, a.Editable.prototype.clearSelection = function () {
        document.selection ? document.selection.empty() : window.getSelection && (window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges())
    }, a.Editable.prototype.getDeepestElement = function (a) {
        var b = null;
        if (a && 1 == a.nodeType && "BR" != a.nodeName) {
            for (; a.firstChild && 1 == a.firstChild.nodeType;) a = a.firstChild;
            b = a
        }
        return b
    }, a.Editable.prototype.getSelectionElement = function () {
        var b = this.getSelection();
        if (b.rangeCount) {
            var c = b.getRangeAt(0),
                d = c.startContainer,
                e = c.startOffset;
            if (1 != d.nodeType) {
                if (!b.isCollapsed) {
                    var f = d.nodeValue;
                    if (f.length == e) var g = d.nextSibling,
                        h = this.getDeepestElement(g)
                }
                d = h ? h : d.parentNode
            } else if (d.childElementCount > 0 && !b.isCollapsed)
                if (d = d.childNodes[e], 3 == d.nodeType) d = d.parentNode;
                else {
                    var h = this.getDeepestElement(d);
                    h && (d = h)
                }
            var i = a(d);
            i.length > 0 && a(i[0]).text() == this.text() && (d = i[0]);
            for (var j = d; j && "BODY" != j.tagName;) {
                if (j == this.$element.get(0)) return d;
                j = j.parentNode
            }
        }
        return this.$body.get(0)
    }, a.Editable.prototype.getSelectionParent = function () {
        var b, c = null;
        return window.getSelection ? (b = window.getSelection(), b.rangeCount && (c = b.getRangeAt(0).commonAncestorContainer, 1 != c.nodeType && (c = c.parentNode))) : (b = document.selection, "Control" != b.type && (c = b.createRange().parentElement())), null != c ? -1 != a.inArray(this.$element.get(0), a(c).parents()) || c == this.$element.get(0) ? c : null : void 0
    }, a.Editable.prototype.nodeInRange = function (a, b) {
        var c;
        if (a.intersectsNode) return a.intersectsNode(b);
        c = b.ownerDocument.createRange();
        try {
            c.selectNode(b)
        } catch (d) {
            c.selectNodeContents(b)
        }
        return -1 == a.compareBoundaryPoints(Range.END_TO_START, c) && 1 == a.compareBoundaryPoints(Range.START_TO_END, c)
    }, a.Editable.prototype.getElementFromNode = function (b) {
        for (1 != b.nodeType && (b = b.parentNode); null !== b && a.Editable.VALID_NODES.indexOf(b.tagName) < 0;) b = b.parentNode;
        return null != b && "LI" == b.tagName && a(b).find(a.Editable.VALID_NODES.join()).length > 0 ? null : a.makeArray(a(b).parents()).indexOf(this.$element.get(0)) >= 0 ? b : null
    }, a.Editable.prototype.nextNode = function (a, b) {
        if (a.hasChildNodes()) return a.firstChild;
        for (; a && !a.nextSibling && a != b;) a = a.parentNode;
        return a && a != b ? a.nextSibling : null
    }, a.Editable.prototype.getRangeSelectedNodes = function (a) {
        var b = a.startContainer,
            c = a.endContainer;
        if (b == c && "TR" != b.tagName) return [b];
        if (b == c && "TR" == b.tagName) {
            var d = b.childNodes,
                e = a.startOffset;
            if (d.length > e && e >= 0) {
                var f = d[e];
                if ("TD" == f.tagName || "TH" == f.tagName) return [f]
            }
        }
        for (var g = []; b && b != c;) g.push(b = this.nextNode(b, c));
        for (b = a.startContainer; b && b != a.commonAncestorContainer;) g.unshift(b), b = b.parentNode;
        return g
    }, a.Editable.prototype.getSelectedNodes = function () {
        if (window.getSelection) {
            var b = window.getSelection();
            if (!b.isCollapsed) {
                for (var c = this.getRanges(), d = [], e = 0, f = c.length; f > e; e++) d = a.merge(d, this.getRangeSelectedNodes(c[e]));
                return d
            }
            if (this.selectionInEditor()) {
                var g = b.getRangeAt(0).startContainer;
                return 3 == g.nodeType ? [g.parentNode] : [g]
            }
        }
        return []
    }, a.Editable.prototype.getSelectionElements = function () {
        var b = this.getSelectedNodes(),
            c = [];
        return a.each(b, a.proxy(function (a, b) {
            if (null !== b) {
                var d = this.getElementFromNode(b);
                c.indexOf(d) < 0 && d != this.$element.get(0) && null !== d && c.push(d)
            }
        }, this)), 0 === c.length && c.push(this.$element.get(0)), c
    }, a.Editable.prototype.getSelectionLink = function () {
        var b = this.getSelectionLinks();
        return b.length > 0 ? a(b[0]).attr("href") : null
    }, a.Editable.prototype.saveSelection = function () {
        if (!this.selectionDisabled) {
            var a = this.getSelection();
            if (a.getRangeAt && a.rangeCount) {
                for (var b = [], c = 0, d = a.rangeCount; d > c; c += 1) b.push(a.getRangeAt(c));
                this.savedRanges = b
            } else this.savedRanges = null
        }
    }, a.Editable.prototype.restoreSelection = function () {
        if (!this.selectionDisabled) {
            var a = this.getSelection();
            if (this.savedRanges) {
                a.removeAllRanges();
                for (var b = 0, c = this.savedRanges.length; c > b; b++) a.addRange(this.savedRanges[b])
            }
        }
    }, a.Editable.prototype.saveSelectionByMarkers = function () {
        if (!this.selectionDisabled) {
            var a = this.getRanges();
            this.removeMarkers();
            for (var b = 0, c = a.length; c > b; b++) this.placeMarker(a[b], !0, b), this.placeMarker(a[b], !1, b)
        }
    }, a.Editable.prototype.hasSelectionByMarkers = function () {
        var a = this.$element.find('.f-marker[data-type="true"]');
        return a.length > 0 ? !0 : !1
    }, a.Editable.prototype.restoreSelectionByMarkers = function () {
        if (!this.selectionDisabled) {
            var b, c = this.$element.find('.f-marker[data-type="true"]');
            c.length > 0 && (b = this.getSelection(), this.elementInCover(c.get(0)) ? this.focus(this.getModule("cover").getFocusWrap()) : this.focus(), this.clearSelection());
            for (var d = 0; d < c.length; d++) {
                var e = a(c[d]).data("id"),
                    f = c[d],
                    g = this.$element.find('.f-marker[data-type="false"][data-id="' + e + '"]');
                if (g.length > 0) {
                    g = g[0];
                    try {
                        b.removeAllRanges();
                        var h = document.createRange();
                        h.setEndBefore(g), h.setStartAfter(f), b.addRange(h)
                    } catch (i) {
                        console.error(i)
                    }
                }
            }
            c.length > 0 && (this.editableDisabled || this.enableContenteditable(!0), this.removeMarkers())
        }
    }, a.Editable.prototype.setSelection = function (a, b, c, d) {
        var e = this.getSelection();
        if (e) {
            this.clearSelection();
            try {
                c || (c = a), void 0 === b && (b = 0), void 0 === d && (d = b);
                var f = this.getRange();
                f.setStart(a, b), f.setEnd(c, d), e.addRange(f)
            } catch (g) {
                console.error(g)
            }
        }
    }, a.Editable.prototype.setSelectionEnd = function (b) {
        for (var c = a(b).contents(), d = c.length; d > 0;) {
            d--;
            var e = c[d];
            if (3 == e.nodeType) return void this.setSelection(e, e.length);
            if (1 == e.nodeType && !this.isSelfClosingTag(e)) {
                var f = a(e).contents();
                if (0 == f.length || 0 == f.text().length) return void this.setSelection(e);
                c = f, d = c.length
            }
        }
        this.setSelection(b)
    }, a.Editable.prototype.buildMarker = function (b, c, d) {
        return void 0 === d && (d = ""), a('<span class="f-marker"' + d + ' style="visibility:hidden; line-height: 0;" data-fr-verified="true" data-id="' + c + '" data-type="' + b + '">', document)[0]
    }, a.Editable.prototype.placeMarker = function (b, c, d) {
        var e = "";
        b.collapsed && (e = ' data-collapsed="true"');
        try {
            var f = b.cloneRange();
            if (f.collapse(c), f.insertNode(this.buildMarker(c, d, e)), c === !0 && e) {
                var g = this.$element.find('span.f-marker[data-type="true"][data-id="' + d + '"]').get(0);
                if (g)
                    for (var g = g.nextSibling; g && 3 === g.nodeType && 0 === g.data.length;) a(g).remove(), g = this.$element.find('span.f-marker[data-type="true"][data-id="' + d + '"]').get(0).nextSibling
            }
        } catch (h) {
            console.error(h)
        }
    }, a.Editable.prototype.removeMarkers = function () {
        this.$element.find(".f-marker").remove()
    }, a.Editable.prototype.getSelectionTextInfo = function (a) {
        var b, c, d = !1,
            e = !1;
        if (window.getSelection) {
            var f = window.getSelection();
            f.rangeCount && (b = f.getRangeAt(0), c = b.cloneRange(), c.selectNodeContents(a), c.setEnd(b.startContainer, b.startOffset), d = "" === c.toString(), c.selectNodeContents(a), c.setStart(b.endContainer, b.endOffset), e = "" === c.toString())
        } else document.selection && "Control" != document.selection.type && (b = document.selection.createRange(), c = b.duplicate(), c.moveToElementText(a), c.setEndPoint("EndToStart", b), d = "" === c.text, c.moveToElementText(a), c.setEndPoint("StartToEnd", b), e = "" === c.text);
        return {
            atStart: d,
            atEnd: e
        }
    }, a.Editable.prototype.endsWith = function (a, b) {
        return -1 !== a.indexOf(b, a.length - b.length)
    }, a.Editable.prototype.setSelectionLast = function (b) {
        if (b || !this.selectionInEditor() || this.selectionInCover()) {
            var c = this.getSelection();
            if (c) {
                var d = this.$body.find(":last-child").last();
                d.length > 0 && (d = d[0]);
                for (var e = 0; d;)
                    if (1 == d.nodeType) {
                        var f = d.childNodes;
                        if (!(f && f.length > 0)) break;
                        d = f[f.length - 1]
                    } else {
                        if (3 == d.nodeType) {
                            e = d.length;
                            break
                        }
                        if (!d.previousSibling) {
                            d = d.parentNode;
                            break
                        }
                        d = d.previousSibling
                    }
                if (d) {
                    if (1 == d.nodeType && this.isSelfClosingTag(d.tagName)) {
                        var g = this.makeTextWrap();
                        a(d).after(g), this.addFontFamily(g), d = g[0]
                    } else this.setSelection(d, e, null, e);
                    this.getRange().collapse(!1)
                }
            }
        }
    }, a.Editable.prototype.setSelectionBefore = function (b) {
        var c = this.getWrapItem(b),
            d = null;
        if (c || (c = b), d = a(c).prev(), !d || d.length < 1) {
            var e = this.makeTextWrap();
            a(b).before(e), d = e, this.addFontFamily(e)
        } else if (this.setSelectionModule(d)) return !1;
        this.selectionIn(d) || this.setSelection(d[0]), this.getRange().collapse(!1)
    }, a.Editable.prototype.setSelectionAfter = function (b) {
        var c = this.getWrapItem(b),
            d = null;
        if (c || (c = b), d = a(c).next(), !d || d.length < 1) {
            var e = this.makeTextWrap();
            a(b).after(e), d = e, this.addFontFamily(e)
        } else if (this.setSelectionModule(d)) return !1;
        this.selectionIn(d[0]) || this.setSelection(d[0]), this.getRange().collapse(!1)
    }, a.Editable.prototype.isWrapItem = function (a) {
        return a && a.className && -1 != a.className.indexOf("wrap_item") ? !0 : !1
    }, a.Editable.prototype.isStartOfWrapItem = function () {
        var a = this.getSelection(),
            b = this.getSelectionElement(),
            c = this.getSelectionTextInfo(b);
        if (c.atStart && 0 == a.anchorOffset) {
            for (; !this.isWrapItem(b);) {
                if (b.previousSibling) return !1;
                b = b.parentNode
            }
            return !0
        }
        return !1
    }, a.Editable.prototype.isEndOfWrapItem = function () {
        var b = this.getSelection(),
            c = this.getSelectionElement(),
            d = b.anchorNode,
            e = this.getSelectionTextInfo(c);
        if (e.atEnd) {
            for (; !this.isWrapItem(d);) {
                for (var f = d.nextSibling, g = 0; f;) {
                    if (3 == f.nodeType && f.nodeValue && f.nodeValue.length > 0) return !1;
                    if (1 == f.nodeType) {
                        var h = a(f);
                        if ("" != h.text()) return !1;
                        g += h.find("br").length
                    }
                    if (g > 1) return !1;
                    f = f.nextSibling
                }
                d = d.parentNode
            }
            return !0
        }
        return !1
    }, a.Editable.prototype.getCurrentTextNode = function () {
        var b = this.getSelection(),
            c = b.anchorNode;
        if (1 == c.nodeType) {
            var d = b.anchorOffset;
            if (0 == d) return null;
            var e = a(c).contents();
            if (e.length < d) return null;
            if (c = e[d - 1], c && 3 == c.nodeType) return c;
            if (c && 1 == c.nodeType) {
                var f = c.childNodes[0];
                if (f && 3 == f.nodeType) return f
            }
        } else if (3 == c.nodeType) return c;
        return null
    }, a.Editable.prototype.getSelectionCoords = function () {
        var b, c, d, e = e || window,
            f = e.document,
            g = f.selection,
            h = 0,
            i = 0;
        if (g) "Control" != g.type && (b = g.createRange(), b.collapse(!0), h = b.boundingLeft, i = b.boundingTop);
        else if (e.getSelection && (g = e.getSelection(), g.rangeCount && (b = g.getRangeAt(0).cloneRange(), b.getClientRects && (b.collapse(!0), c = b.getClientRects(), c.length > 0 && (d = b.getClientRects()[0], h = d.left, i = d.top)), 0 == h && 0 == i))) {
            var j = f.createElement("span");
            if (j.getClientRects && (j.setAttribute("data-fr-verified", !0), j.appendChild(f.createTextNode("â€‹")), b.insertNode(j), j.getClientRects().length > 0)) {
                d = j.getClientRects()[0], h = d.left, i = d.top;
                var k = j.parentNode;
                k.removeChild(j), k.normalize()
            }
        }
        if (0 == h & 0 == i) {
            var l = a(this.getSelectionElement()).offset();
            return l
        }
        return h += +e.scrollX, i += +e.scrollY, {
            left: h,
            top: i
        }
    }
}(window.jQuery), ! function (a) {
    a.Editable.commands = {
        bold: {
            title: "êµµê²Œ",
            icon: "be_icon be_icon_bold",
            shortcut: "(Ctrl + B)"
        },
        italic: {
            title: "Italic",
            icon: "be_icon be_icon_italic",
            shortcut: "(Ctrl + I)"
        },
        underline: {
            title: "ë°‘ì¤„",
            icon: "be_icon be_icon_underline",
            shortcut: "(Ctrl + U)"
        },
        strikeThrough: {
            title: "ì·¨ì†Œì„ ",
            icon: "be_icon be_icon_strike"
        },
        formatBlock: {
            title: "í¬ê¸°",
            icon: "be_text be_text_paragraph",
            icon_alt: "P",
            seed: [{
                value: "h1",
                title: "ì œëª©1"
            }, {
                value: "h2",
                title: "ì œëª©2"
            }, {
                value: "h3",
                title: "ì œëª©3"
            }, {
                value: "p",
                title: "ë³¸ë¬¸"
            }]
        },
        align: {
            title: "Alignment",
            icon: "fa fa-align-center",
            seed: [{
                cmd: "justifyLeft",
                title: "Align Left",
                icon: "fa fa-align-left"
            }, {
                cmd: "justifyCenter",
                title: "Align Center",
                icon: "fa fa-align-center"
            }, {
                cmd: "justifyRight",
                title: "Align Right",
                icon: "fa fa-align-right"
            }, {
                cmd: "justifyFull",
                title: "Justify",
                icon: "fa fa-align-justify"
            }]
        },
        blockquote: {
            title: "ì¸ìš©",
            icon: "be_icon be_icon_blockquote_type1",
            seed: [{
                value: "blockquote_type1",
                title: "ì¸ìš©1",
                icon: "be_icon be_icon_blockquote_type1"
            }, {
                value: "blockquote_type2",
                title: "ì¸ìš©2",
                icon: "be_icon be_icon_blockquote_type2"
            }, {
                value: "blockquote_type3",
                title: "ì¸ìš©3",
                icon: "be_icon be_icon_blockquote_type3"
            }]
        },
        bullet: {
            title: "ê¸€ë¨¸ë¦¬",
            icon: "be_icon be_icon_bullet",
            isNew: !1
        },
        insertOrderedList: {
            title: "Numbered List",
            icon: "fa fa-list-ol"
        },
        insertUnorderedList: {
            title: "Bulleted List",
            icon: "fa fa-list-ul"
        },
        outdent: {
            title: "Indent Less",
            icon: "fa fa-dedent",
            activeless: !0,
            shortcut: "(Ctrl + <)"
        },
        indent: {
            title: "Indent More",
            icon: "fa fa-indent",
            activeless: !0,
            shortcut: "(Ctrl + >)"
        },
        selectAll: {
            title: "Select All",
            icon: "fa fa-file-text",
            shortcut: "(Ctrl + A)"
        },
        createLink: {
            title: "ë§í¬",
            icon: "be_icon be_icon_link",
            shortcut: "(Ctrl + K)"
        },
        undo: {
            title: "Undo",
            icon: "fa fa-undo",
            activeless: !0,
            shortcut: "(Ctrl+Z)",
            disabled: function () {
                return !0
            }
        },
        redo: {
            title: "Redo",
            icon: "fa fa-repeat",
            activeless: !0,
            shortcut: "(Shift+Ctrl+Z)",
            disabled: function () {
                return !0
            }
        },
        html: {
            title: "Show HTML",
            icon: "fa fa-code"
        },
        save: {
            title: "Save",
            icon: "fa fa-floppy-o"
        },
        insertHorizontalRule: {
            title: "Insert Horizontal Line",
            icon: "fa fa-minus"
        }
    }, a.Editable.prototype.execCommand = {
        formatBlock: function (a, b) {
            this.formatBlock(b)
        },
        blockquote: function (a, b) {
            this.blockquote(b)
        },
        createLink: function () {
            this.insertLink()
        },
        indent: function () {
            this.indent()
        },
        outdent: function () {
            this.outdent(!0)
        },
        justifyLeft: function (a) {
            this.align(a)
        },
        justifyRight: function (a) {
            this.align(a)
        },
        justifyCenter: function (a) {
            this.align(a)
        },
        justifyFull: function (a) {
            this.align(a)
        },
        insertOrderedList: function (a) {
            this.formatList(a)
        },
        insertUnorderedList: function (a) {
            this.formatList(a)
        },
        undo: function () {
            this.undo()
        },
        redo: function () {
            this.redo()
        },
        html: function () {
            this.html()
        },
        save: function () {
            this.save()
        },
        selectAll: function (a, b) {
            this.$body.focus(), this.execDefault(a, b)
        },
        insertHorizontalRule: function (a, b) {
            this.execDefault(a, b), this.hide()
        },
        bullet: function (a) {
            this.bullet()
        }
    }, a.Editable.prototype.exec = function (b, c, d, e) {
        var f = ["html", "undo", "redo", "selectAll", "save", "insertVideo", "insertTable"],
            g = this.options.coverButtons.indexOf(b) > -1,
            h = this.options.sideButtons.indexOf(b) > -1;
        if (g && (this.clearSelection(), this.hide()), !this.selectionInEditor() && f.indexOf(b) < 0 && !g && !h) return !1;
        if (this.selectionInEditor()) {
            if ("" === this.text()) {
                if ("bold" === b || "italic" === b || "underline" === b || "strikeThrough" === b) return this._startInDefault(b), !1;
                if ("fontSize" == b) return this._startInFontExec("font-size", b, c), !1
            }
            var i = ["insertHorizontalRule", "fontSize", "formatBlock", "blockquote", "blockStyle", "indent", "outdent", "justifyLeft", "justifyRight", "justifyFull", "justifyCenter", "html", "undo", "redo", "selectAll", "save", "insertImage", "insertVideo", "insertOrderedList", "insertUnorderedList", "insertTable", "insertRowAbove", "insertRowBelow", "deleteRow", "insertColumnBefore", "insertColumnAfter", "deleteColumn", "insertHeader", "deleteHeader", "insertCellBefore", "insertCellAfter", "deleteCell", "mergeCells", "splitHorizontal", "splitVertical", "deleteTable"];
            if ("" === this.text() && i.indexOf(b) < 0 && !g && !h) return !1
        }
        var j = !1;
        this.selectionInCover() && !g && (j = this.getModule("cover").exec(b, c)), this.selectionInCover() && h && this.focus(), j || (this.execCommand[b] ? this.execCommand[b].apply(this, [b, c, d]) : a.Editable.commands[b].callback ? a.Editable.commands[b].callback.apply(this, [b, c, d, e]) : this.execDefault(b, c));
        var k = ["selectAll", "createLink", "insertImage", "html", "insertVideo", "uploadFiles", "insertPlace", "insertSticker", "insertLine", "changeAlign", "insertFile"];
        k.indexOf(b) < 0 && this.saveUndoStep(), "createLink" != b && "insertImage" != b && this.refreshButtons()
    }, a.Editable.prototype.html = function () {
        var a;
        this.$element.removeClass("f-placeholder"), this.cleanify(!1), a = this.options.inlineMode ? "\n\n" + this.cleanTags(this.getHTML(!1, !1)) : this.cleanTags(this.getHTML(!1, !1)), a = a.replace(/\&amp;/g, "&"), this.$html_area.val(a).trigger("resize"), this.options.inlineMode && this.$box.find(".html-switch").css("top", this.$box.css("padding-top")), this.$html_area.css("height", this.$element.height() - 1), this.$element.html("").append(this.$html_area).removeAttr("contenteditable"), this.$box.addClass("f-html"),
            this.$editor.find('button.fr-bttn:not([data-cmd="html"]), button.fr-trigger').prop("disabled", !0), this.$editor.find('.fr-bttn[data-cmd="html"]').addClass("active"), this.hide(), this.isHTML = !0, this.$element.blur(), this.enableContenteditable(!1), this.callback("htmlShow", [a])
    }, a.Editable.prototype.formatBlock = function (b, c, d) {
        if (this.browser.msie && a.Editable.getIEversion() < 9) return document.execCommand("formatBlock", !1, "<" + b + ">"), !1;
        this.saveSelectionByMarkers(), this.wrapText(), this.restoreSelectionByMarkers();
        var e = this.getSelectionElements();
        this.saveSelectionByMarkers();
        for (var f = !1, g = 0; g < e.length; g++) {
            var h = a(e[g]),
                i = h.get(0).tagName.toLowerCase();
            if (!this.fakeEmpty(h) && this.isTextWrapItem(h) && i != b) {
                f = !0;
                break
            }
        }
        for (var j, g = 0; g < e.length; g++) {
            var h = a(e[g]),
                i = h.get(0).tagName.toLowerCase();
            if (!this.fakeEmpty(h) && this.isTextWrapItem(h))
                if (f || i != b ? (j = a("<" + b + ">").html(h.html()), j.addClass(this.getTextWrapClass())) : j = this.makeTextWrap().html(h.html()), h.get(0) != this.$body.get(0) && "LI" != h.get(0).tagName && "TD" != h.get(0).tagName && "TH" != h.get(0).tagName) {
                    var k = h.prop("attributes");
                    if (j.attr)
                        for (var l = 0; l < k.length; l++) "class" !== k[l].name && j.attr(k[l].name, k[l].value);
                    var m;
                    void 0 === m && (m = this.options.defaultBlockStyle);
                    try {
                        if (h.hasClass(c)) j.addClass(h.attr("class")).removeClass(c);
                        else {
                            if (void 0 === h.attr("class") || void 0 === m || !this.options.blockStylesToggle && "toggle" != d) j.addClass(h.attr("class"));
                            else
                                for (var n = h.attr("class").split(" "), o = 0; o < n.length; o++) {
                                    var p = n[o];
                                    void 0 === m[p] && void 0 === d ? j.addClass(p) : void 0 !== m[p] && "toggle" === d && j.addClass(p)
                                }
                            "*" != c && j.addClass(c)
                        }
                    } catch (q) {}
                    h.replaceWith(j)
                } else h.html(j)
        }
        this.unwrapText(), this.restoreSelectionByMarkers(), this.callback("formatBlock"), this.repositionEditor()
    }, a.Editable.prototype.blockquote = function (b) {
        var c = "blockquote";
        if (this.browser.msie && a.Editable.getIEversion() < 9) return document.execCommand("formatBlock", !1, "<" + c + ">"), !1;
        this.saveSelectionByMarkers(), this.wrapText(), this.restoreSelectionByMarkers();
        var d = this.getSelectionElements();
        d = this.getTextWrapItemElements(d), this.saveSelectionByMarkers();
        for (var e = !1, f = 0, g = d.length; g > f; f++) {
            var h = a(d[f]);
            if (!this.fakeEmpty(h) && (this.isTextWrapItem(h) || this.isBulletItem(h)) && !h.hasClass(b)) {
                e = !0;
                break
            }
        }
        for (var i, f = 0, g = d.length; g > f; f++) {
            var h = a(d[f]);
            if (!this.fakeEmpty(h) && (this.isTextWrapItem(h) || this.isBulletItem(h)))
                if (i = "", !e && h.hasClass(b) ? i = this.makeTextWrap().html(h.html()) : (i = a("<" + c + ">").html(h.html()), this.removeStyleInElem(i), i.addClass(b).addClass(this.getTextWrapClass())), h.get(0) != this.$body.get(0)) {
                    var j = h.prop("attributes");
                    if (i.attr)
                        for (var k = 0; k < j.length; k++) "class" !== j[k].name && i.attr(j[k].name, j[k].value);
                    h.replaceWith(i)
                } else h.html(i)
        }
        this.unwrapText(), this.restoreSelectionByMarkers(), this.callback("formatBlock"), this.repositionEditor()
    }, a.Editable.prototype.bullet = function () {
        var b = "p";
        if (this.browser.msie && a.Editable.getIEversion() < 9) return document.execCommand("formatBlock", !1, "<" + b + ">"), !1;
        this.saveSelectionByMarkers(), this.wrapText(), this.restoreSelectionByMarkers();
        var c = this.getSelectionElements();
        c = this.getTextWrapItemElements(c), this.saveSelectionByMarkers();
        for (var d = !1, e = 0, f = c.length; f > e; e++) {
            var g = a(c[e]);
            if (!this.fakeEmpty(g) && (this.isTextWrapItem(g) || this.isBulletItem(g)) && !this.isBulletItem(g)) {
                d = !0;
                break
            }
        }
        for (var h, e = 0, f = c.length; f > e; e++) {
            var g = a(c[e]);
            if (!this.fakeEmpty(g) && (this.isTextWrapItem(g) || this.isBulletItem(g)))
                if (h = "", !d && this.isBulletItem(g) ? h = this.makeTextWrap().html(g.html()) : (h = a("<" + b + ">").html(g.html()), this.removeStyleInElem(h), h.addClass(this.getBulletWrapClass())), g.get(0) != this.$body.get(0)) {
                    var i = g.prop("attributes");
                    if (h.attr)
                        for (var j = 0; j < i.length; j++) "class" !== i[j].name && h.attr(i[j].name, i[j].value);
                    g.replaceWith(h)
                } else g.html(h)
        }
        this.unwrapText(), this.restoreSelectionByMarkers(), this.callback("formatBlock"), this.repositionEditor()
    }, a.Editable.prototype.removeStyleInElem = function (b) {
        a(b).find("span, b, u, strike").each(function (b, c) {
            a(c.firstChild).unwrap()
        })
    }, a.Editable.prototype.formatList = function (b) {
        if (this.browser.msie && a.Editable.getIEversion() < 9) return document.execCommand(b, !1, !1), !1;
        var c = !1;
        this.active(b) || (c = !0), this.saveSelectionByMarkers();
        for (var d, e = this.getSelectionElements(), f = !0, g = !1, h = 0; h < e.length; h++)
            if (d = a(e[h]), d.closest("li").length > 0 || "LI" == d.get(0).tagName) {
                var i;
                i = "LI" == d.get(0).tagName ? d : d.parents("li"), i = "LI" == d.get(0).tagName ? d : d.parents("li"), d.closest("ol").length > 0 ? (i.before('<span class="close-ol" data-fr-verified="true"></span>'), i.after('<span class="open-ol" data-fr-verified="true"></span>')) : d.closest("ul").length > 0 && (i.before('<span class="close-ul" data-fr-verified="true"></span>'), i.after('<span class="open-ul" data-fr-verified="true"></span>')), i.replaceWith(i.contents()), g = !0
            } else f = !1;
        if (g && (this.$body.find("ul, ol").each(function (b, c) {
                var d = a(c),
                    e = "<" + c.tagName.toLowerCase() + ">" + d.html() + "</" + c.tagName.toLowerCase() + ">";
                e = e.replace(new RegExp('<span class="close-ul" data-fr-verified="true"></span>', "g"), "</ul>"), e = e.replace(new RegExp('<span class="open-ul" data-fr-verified="true"></span>', "g"), "<ul>"), e = e.replace(new RegExp('<span class="close-ol" data-fr-verified="true"></span>', "g"), "</ol>"), e = e.replace(new RegExp('<span class="open-ol" data-fr-verified="true"></span>', "g"), "<ol>"), d.replaceWith(e)
            }), this.$body.find("ul, ol").each(function (b, c) {
                var d = a(c);
                0 === d.find("li").length && d.remove()
            })), this.clearSelection(), f === !1 || c === !0) {
            this.wrapText(), this.restoreSelectionByMarkers(), e = this.getSelectionElements(), this.saveSelectionByMarkers();
            var j = a("<ol>");
            "insertUnorderedList" == b && (j = a("<ul>"));
            for (var k = 0; k < e.length; k++) d = a(e[k]), d.get(0) != this.$body.get(0) && (j.append(a("<li>").append(d.clone())), k != e.length - 1 ? d.remove() : (d.replaceWith(j), j.find("li")));
            this.unwrapText()
        }
        this.restoreSelectionByMarkers(), this.repositionEditor(), this.callback(b)
    }, a.Editable.prototype.align = function (b) {
        if (this.browser.msie && a.Editable.getIEversion() < 9) return document.execCommand(b, !1, !1), !1;
        var c = this.getSelectionElements();
        switch (b) {
            case "justifyLeft":
                b = "left";
                break;
            case "justifyRight":
                b = "right";
                break;
            case "justifyCenter":
                b = "center";
                break;
            case "justifyFull":
                b = "justify"
        }
        for (var d = 0; d < c.length; d++) a(c[d]).css("text-align", b);
        this.repositionEditor(), this.callback("align", [b])
    }, a.Editable.prototype.indent = function (b) {
        if (this.browser.msie && a.Editable.getIEversion() < 9) return b ? document.execCommand("outdent", !1, !1) : document.execCommand("indent", !1, !1), !1;
        var c = 20;
        b && (c = -20), this.saveSelectionByMarkers(), this.wrapText(), this.restoreSelectionByMarkers();
        var d = this.getSelectionElements();
        this.saveSelectionByMarkers();
        for (var e = 0; e < d.length; e++) {
            var f = a(d[e]);
            if (f.parentsUntil(this.$body, "li").length > 0 && (f = f.parentsUntil(this.$body, "li")), f.get(0) != this.body.get(0)) {
                var g = parseInt(f.css("margin-left").replace(/px/, ""), 10),
                    h = Math.max(0, g + c);
                f.css("marginLeft", h), "LI" === f.get(0).tagName && (h % 60 === 0 ? 0 === f.closest("ol").length ? f.css("list-style-type", "disc") : f.css("list-style-type", "decimal") : h % 40 === 0 ? 0 === f.closest("ol").length ? f.css("list-style-type", "square") : f.css("list-style-type", "lower-latin") : 0 === f.closest("ol").length ? f.css("list-style-type", "circle") : f.css("list-style-type", "lower-roman"))
            } else {
                var i = a("<div>").html(f.html());
                f.html(i), i.css("marginLeft", Math.max(0, c))
            }
        }
        this.unwrapText(), this.restoreSelectionByMarkers(), this.repositionEditor(), b || this.callback("indent")
    }, a.Editable.prototype.outdent = function () {
        this.indent(!0), this.callback("outdent")
    }, a.Editable.prototype.insertLink = function () {
        this.showInsertLink(), this.options.inlineMode || this.positionPopup("createLink"), this.saveSelection();
        var a = this.getSelectionLink() || "",
            b = this.getSelectionLinks(),
            c = "";
        c = b.length > 0 ? b[0].href : a, c && c.length > 0 ? this.$link_wrapper.find('input[type="text"]').val(c.replace(/\&amp;/g, "&") || "http://") : this.$link_wrapper.find('input[type="text"]').val("http://")
    }, a.Editable.prototype.insertCover = function () {
        this.getModule("cover").showImageEditor(), this.saveSelection()
    }, a.Editable.prototype.execDefault = function (a, b) {
        document.execCommand(a, !1, b), "insertOrderedList" == a ? this.$bttn_wrapper.find('[data-cmd="insertUnorderedList"]').removeClass("active") : "insertUnorderedList" == a && this.$bttn_wrapper.find('[data-cmd="insertOrderedList"]').removeClass("active"), this.callback(a)
    }, a.Editable.prototype._startInDefault = function (a, b) {
        this.$body.focus(), this.$bttn_wrapper.find('[data-cmd="' + a + '"]').toggleClass("active"), void 0 === b ? document.execCommand(a, !1, !1) : document.execCommand(a, !1, b)
    }, a.Editable.prototype._startInFontExec = function (b, c, d) {
        this.$body.focus();
        try {
            var e = this.getRange(),
                f = e.cloneRange();
            f.collapse(!1);
            var g = a('<span data-inserted="true" data-fr-verified="true" style="' + b + ": " + d + ';">&#8203;</span>', document);
            f.insertNode(g[0]), f.detach(), g = this.$body.find("[data-inserted]"), g.removeAttr("data-inserted"), this.setSelection(g.get(0), 1)
        } catch (h) {
            console.error(h)
        }
    }, a.Editable.prototype.removeFormat = function () {
        document.execCommand("removeFormat", !1, !1), document.execCommand("unlink", !1, !1)
    }, a.Editable.prototype.inlineStyle = function (b, c, d, e, f) {
        if (this.browser.webkit && "font-size" != b) {
            var g = function (a) {
                return a.attr("style").indexOf("font-size") >= 0
            };
            this.$element.find("span").each(function (b, c) {
                var d = a(c);
                d.attr("style") && g(d) && (d.data("font-size", d.css("font-size")), d.css("font-size", ""))
            })
        }
        document.execCommand("fontSize", !1, 4), this.browser.webkit && "font-size" != b && this.$element.find("span").each(function (b, c) {
            var d = a(c);
            d.data("font-size") && (d.css("font-size", d.data("font-size")), d.removeData("font-size"))
        }), this.saveSelectionByMarkers();
        var h = function (c, e) {
            var f = a(e);
            f.css("prop") != d && f.css(b, ""), "" === f.attr("style") && f.replaceWith(f.html())
        };
        this.$element.find("font").each(function (c, e) {
            var f = a('<span data-fr-verified="true" style="' + b + ": " + d + ';">' + a(e).html() + "</span>");
            a(e).replaceWith(f), f.find("span").each(h)
        }), this.restoreSelectionByMarkers(), f || this.repositionEditor(), void 0 === e && (e = [d]), this.callback(c, e)
    }
}(window.jQuery), ! function (a) {
    a.Editable.DEFAULTS = a.extend(a.Editable.DEFAULTS, {
        fontList: {
            "Noto Sans DemiLight": "ë³¸ê³ ë”•",
            "Nanum Myeongjo": "ë‚˜ëˆ”ëª…ì¡°",
            "Nanum Gothic": "ë‚˜ëˆ”ê³ ë”•",
            NanumBareunGothicUltraLight: "ë‚˜ëˆ”ë°”ë¥¸ê³ ë”•",
            Helvetica: "Helvetica",
            Georgia: "Georgia"
        },
        defaultFontFamily: "Noto Sans DemiLight"
    }), a.Editable.prototype.getFontFamilyValue = function (a) {
        var b = a.css("font-family");
        return this.getBrunchFontFamilyValue(b)
    }, a.Editable.prototype.getExtFonts = function () {
        if (this.extFontList) return this.extFontList;
        this.extFontList = [];
        var a = this.options.fontList;
        for (var b in a) this.extFontList.push({
            key: b.replace(/\s*/gi, "").toLowerCase(),
            value: b
        });
        return this.extFontList
    }, a.Editable.prototype.getBrunchFontFamilyValue = function (b) {
        if (!b || "" == a.trim(b)) return null;
        b = b.replace(/"/gi, '\\"').replace(/['\\\"]/gi, "");
        for (var c = b.split(","), d = this.getExtFonts(), e = 0, f = c.length; f > e; e++) {
            var g = c[e];
            g && (g = g.replace(/\s*/gi, "")), g && (g = g.toLowerCase());
            for (var h = 0, i = d.length; i > h; h++) {
                var j = d[h];
                if (j.key == g) return j.value
            }
        }
        return null
    }, a.Editable.prototype.refreshFontFamily = function () {
        var b = a(this.getSelectionElement()),
            c = this.getFontFamilyValue(b),
            d = this.options.fontList[c];
        this.$editor.find('.fr-dropdown[data-name="fontFamily"] > button i').html(d), this.$editor.find('.fr-dropdown[data-name="fontFamily"] > button i').attr("data-val", c), this.$editor.find('.fr-dropdown[data-name="fontFamily"] > button + ul li').removeClass("active"), this.$editor.find('.fr-dropdown[data-name="fontFamily"] > button + ul li[data-val="' + c + '"]').addClass("active")
    }, a.Editable.commands = a.extend(a.Editable.commands, {
        fontFamily: {
            title: "ê¸€ê¼´",
            icon: "be_text be_text_font_family",
            icon_alt: "FontFamily",
            refreshOnShow: a.Editable.prototype.refreshFontFamily,
            callback: function (a, b) {
                this.inlineStyle("font-family", a, b)
            },
            undo: !0,
            callbackWithoutSelection: function (a, b) {
                this._startInFontExec("font-family", a, b)
            }
        }
    }), a.Editable.prototype.command_dispatcher = a.extend(a.Editable.prototype.command_dispatcher, {
        fontFamily: function (a) {
            var b = this.buildDropdownFontFamily();
            return this.buildDropdownWithArrow(a, b, "fr-family")
        }
    }), a.Editable.prototype.buildDropdownFontFamily = function () {
        var a = '<ul class="fr-dropdown-menu">';
        for (var b in this.options.fontList) {
            var c = this.options.fontList[b],
                d = '<li data-cmd="fontFamily" data-val="' + b + '">';
            d += '<a href="#" data-text="true" title="' + c + '" style="font-family: ' + b + ';">' + c + "</a></li>", a += d
        }
        return a += "</ul>"
    }
}(jQuery), ! function (a) {
    a.Editable.DEFAULTS = a.extend(a.Editable.DEFAULTS, {
        defaultForeColor: "#333333",
        foreColors: ["#ffffff", "#959595", "#333333", "#f4c216", "#16b06d", "#f6665b", "#00c3bd", "#ec4c6a", "#2e84b6", "#5c5cb2"],
        defaultBackColor: "#ffffff",
        backColors: ["#ffffff", "#959595", "#333333", "#f4c216", "#16b06d", "#f6665b", "#00c3bd", "#ec4c6a", "#2e84b6", "#5c5cb2"],
        colorsStep: 2,
        titleColors: ["#333333", "#959595", "#536b82", "#6c7ce0", "#5c5cb2", "#384654", "#2e84b6", "#16b06d", "#769650", "#029d98", "#f37b06", "#c4890d", "#f6665b", "#ec4c6a", "#aa724c"],
        titleColorsStep: 3
    }), a.Editable.prototype.refreshForeColor = function () {
        this.refreshColors("foreColor", "color", ".fore-color-picker", ".fore-color-picker button.fr-trigger .be_icon_fore_color")
    }, a.Editable.prototype.refreshBackColor = function () {
        this.refreshColors("backColor", "background-color", ".back-color-picker", ".back-color-picker button.fr-trigger .be_icon_back_color")
    }, a.Editable.prototype.refreshTitleColor = function () {
        this.refreshColors("titleColor", "color", ".title-color-picker", ".title-color-picker button.fr-trigger .be_icon_title_color")
    }, a.Editable.prototype.refreshColors = function (b, c, d, e) {
        var f = this.getSelectionElement(),
            g = a(f).css(c);
        null != g && 0 == g.toLowerCase().indexOf("rgba") && a(f).parents("span").each(function (b, d) {
            g = a(d).css(c), null != g && -1 == g.toLowerCase().indexOf("rgba")
        });
        var h = a.Editable.RGBToHex(g) || "#ffffff";
        for (h = h.toLowerCase(), this.$bttn_wrapper.find(e).css("background-color", h), this.$bttn_wrapper.find(e).removeClass("color_white color_black"), "#ffffff" == h ? this.$bttn_wrapper.find(e).addClass("color_white") : this.$bttn_wrapper.find(e).addClass("color_black"), this.$editor.find(d + " button.fr-color-bttn").removeClass("active"); a(f).get(0) != this.$element.get(0);) {
            if ("transparent" !== a(f).css(c)) {
                var i = d + ' button.fr-color-bttn[data-param="' + b + '"][data-val="' + h + '"]';
                this.$editor.find(i).addClass("active");
                break
            }
            f = a(f).parent()
        }
    }, a.Editable.commands = a.extend(a.Editable.commands, {
        color: {
            icon: "fa fa-tint",
            title: "Color",
            refreshOnShow: a.Editable.prototype.refreshColors,
            seed: [{
                cmd: "backColor"
            }, {
                cmd: "foreColor"
            }, {
                cmd: "titleColor"
            }],
            callback: function (a, b, c) {
                this[c].apply(this, [b])
            },
            callbackWithoutSelection: function (b, c, d) {
                "backColor" === d && (d = "background-color"), "foreColor" === d && (d = "color"), "titleColor" === d && (d = "color"), this._startInFontExec(d, b, c), "#123456" === c && "" === this.text() && (this.cleanify(!0, !1), this.$element.find("span").each(function (b, c) {
                    var d = a(c),
                        e = d.css("background-color");
                    ("#123456" === e || "#123456" === a.Editable.RGBToHex(e)) && d.css("background-color", ""), e = d.css("color"), ("#123456" === e || "#123456" === a.Editable.RGBToHex(e)) && d.css("color", "")
                }))
            },
            undo: !0
        },
        foreColor: {
            icon: "be_icon be_icon_fore_color",
            title: "ê¸€ìžìƒ‰",
            callback: function (a, b, c) {
                this[c].apply(this, [b])
            }
        },
        backColor: {
            icon: "be_icon be_icon_back_color",
            title: "ê¸€ìž ë°°ê²½ìƒ‰",
            callback: function (a, b, c) {
                this[c].apply(this, [b])
            }
        },
        titleColor: {
            icon: "be_icon be_icon_title_color",
            title: "ê¸€ìžìƒ‰",
            callback: function (a, b, c) {
                this[c].apply(this, [b])
            }
        }
    }), a.Editable.prototype.command_dispatcher = a.extend(a.Editable.prototype.command_dispatcher, {
        foreColor: function (a) {
            var b = this.buildDropdownColor("foreColor", this.options.foreColors);
            return i = this.buildDropdownColorButton(a, b, "fore-color-picker"), i
        },
        backColor: function (a) {
            var b = this.buildDropdownColor("backColor", this.options.backColors);
            return i = this.buildDropdownColorButton(a, b, "back-color-picker"), i
        },
        titleColor: function (a) {
            var b = this.buildDropdownColor("titleColor", this.options.titleColors);
            return i = this.buildDropdownColorButton(a, b, "title-color-picker"), i
        }
    }), a.Editable.prototype.buildDropdownColor = function (a, b) {
        for (var c = "titleColor" == a ? this.options.titleColorsStep : this.options.colorsStep, d = '<div class="fr-dropdown-menu"><div class="be_popup_inner">', e = '<div style="padding: 12px 11px 11px 12px">', f = 0; f < b.length; f++) {
            var g = b[f];
            e += '<span><button type="button" class="fr-color-bttn" data-val="' + g + '" data-cmd="color" data-param="' + a + '" style="background: ' + g + ';"><span class="be_icon be_icon_color_round_chip"></span></button></span>', f % c == c - 1 && f > 0 && (e += "<hr/>", f != c - 1 && f != 2 * c - 1 || !this.options.colorsTopChoices || (e += '<div class="separator"></div>'))
        }
        d += e, d += "</div></div>", this.$bttn_wrapper.on(this.mousedown, ".fr-choose-color", function (a) {
            return a.preventDefault(), a.stopPropagation(), "mousedown" === a.type && 1 !== a.which ? !0 : void 0
        });
        return this.$bttn_wrapper.on(this.mouseup, ".fr-choose-color", function (a) {
            return a.preventDefault(), a.stopPropagation(), "mouseup" === a.type && 1 !== a.which ? !0 : void 0
        }), d
    }, a.Editable.prototype.backColor = function (b) {
        this.inlineStyle("background-color", "backColor", b), this.saveSelectionByMarkers(), this.$element.find("span").each(function (b, c) {
            var d = a(c),
                e = d.css("background-color");
            ("#123456" === e || "#123456" === a.Editable.RGBToHex(e)) && d.css("background-color", ""), "" !== d.attr("style") || d.hasClass("f-marker") || d.replaceWith(d.contents())
        }), this.restoreSelectionByMarkers();
        var c = this.$editor.find('button.fr-color-bttn[data-cmd="backColor"][data-val="' + b + '"]');
        c.addClass("active"), c.siblings().removeClass("active"), this.callback("resetBlockquoteStyle")
    }, a.Editable.prototype.foreColor = function (b) {
        this.inlineStyle("color", "foreColor", b), this.saveSelectionByMarkers(), this.$element.find("span").each(function (b, c) {
            var d = a(c),
                e = d.css("color");
            ("#123456" === e || "#123456" === a.Editable.RGBToHex(e)) && d.css("color", ""), "" !== d.attr("style") || d.hasClass("f-marker") || d.replaceWith(d.contents())
        }), this.restoreSelectionByMarkers();
        var c = this.$editor.find('button.fr-color-bttn[data-cmd="foreColor"][data-val="' + b + '"]');
        c.addClass("active"), c.siblings().removeClass("active"), this.callback("resetBlockquoteStyle")
    }, a.Editable.prototype.titleColor = function (b) {
        this.inlineStyle("color", "titleColor", b), this.saveSelectionByMarkers(), this.$element.find("span").each(function (b, c) {
            var d = a(c),
                e = d.css("color");
            ("#123456" === e || "#123456" === a.Editable.RGBToHex(e)) && d.css("color", ""), "" !== d.attr("style") || d.hasClass("f-marker") || d.replaceWith(d.contents())
        }), this.restoreSelectionByMarkers();
        var c = this.$editor.find('button.fr-color-bttn[data-cmd="titleColor"][data-val="' + b + '"]');
        c.addClass("active"), c.siblings().removeClass("active")
    }
}(jQuery), ! function (a) {
    a.Editable.prototype.showLinkWrapper = function () {
        this.showBttnWrapper(), this.$link_wrapper && (this.$link_wrapper.show(), this.$link_wrapper.trigger("hideLinkList"), this.$link_wrapper.trigger("hideLinkClassList"), this.saveSelectionByMarkers(), setTimeout(a.proxy(function () {
            this.$link_wrapper.find('input[type="text"]').focus().select()
        }, this), 0), this.link = !0)
    }, a.Editable.prototype.hideLinkWrapper = function (a) {
        this.$link_wrapper && "block" == this.$link_wrapper.css("display") && (this.$link_wrapper.hide(), a || (this.restoreSelection(), this.restoreSelectionByMarkers()))
    }, a.Editable.prototype.showInsertLink = function () {
        this.showLinkWrapper()
    }, a.Editable.prototype.showInsertLinkData = function (a) {
        this.showInsertLink(), "A" == a.parent().get(0).tagName ? (this.$link_wrapper.find('input[type="text"]').val(a.parent().attr("href")), this.$link_wrapper.find(".f-external-link").attr("href", a.parent().attr("href")), "_blank" == a.parent().attr("target") ? this.$link_wrapper.find('input[type="checkbox"]').prop("checked", !0) : this.$link_wrapper.find('input[type="checkbox"]').prop("checked", !1)) : (this.$link_wrapper.find('input[type="text"]').val("http://"), this.$link_wrapper.find(".f-external-link").attr("href", "#"), this.$link_wrapper.find('input[type="checkbox"]').prop("checked", this.options.alwaysBlank))
    }, a.Editable.prototype.initLink = function () {
        var b = this,
            c = function (a) {
                a.stopPropagation(), a.preventDefault()
            },
            d = function (a) {
                a.stopPropagation(), a.preventDefault(), b.hide()
            };
        this.iOS() ? (this.$element.on("click", "a.link", c), this.$element.on("touchend", "a.link", d)) : this.$element.on("click", "a.link", d), this.registerRefreshEvent("createLink", a.proxy(this.refreshLinkButton, this))
    }, a.Editable.prototype.refreshLinkButton = function (b) {
        var c = this.getSelectionLinks();
        c && c.length > 0 ? a(b).addClass("active") : a(b).removeClass("active")
    }, a.Editable.prototype.writeInputLink = function () {
        var a, b = this.$link_wrapper.find("input#f-lt-" + this._id),
            c = this.$link_wrapper.find("input#f-lu-" + this._id),
            d = this.$link_wrapper.find("input#f-luc-" + this._id),
            e = this.$link_wrapper.find("input#f-checkbox-" + this._id);
        a = b ? b.val() : "";
        var f = c.val();
        this.isLink && "" === f && (f = "#");
        var g = "";
        d && (g = d.data("class")), this.writeLink(f, a, g, e.prop("checked"))
    }, a.Editable.prototype.writeLink = function (b, c, d, e, f) {
        this.options.noFollow && (f = !0), this.options.alwaysBlank && (e = !0);
        var g = "",
            h = "";
        if (f === !0 && /^https?:\/\//.test(b) && (g = 'rel="nofollow"'), e === !0 && (h = 'target="_blank"'), b && !/^https?:\/\//.test(b) && (b = "http://" + b), b = this.sanitizeURL(b), this.isImageMode()) {
            if ("" !== b) {
                if ("A" != this.$body.find(".f-img-editor").parent().get(0).tagName) this.$body.find(".f-img-editor").wrap('<a data-fr-link="true" href="' + b + '" ' + h + " " + g + "></a>");
                else {
                    var i = this.$body.find(".f-img-editor").parent();
                    e === !0 ? i.attr("target", "_blank") : (i.removeAttr("target"), f === !0 ? i.attr("rel", "nofollow") : (i.removeAttr("rel"), i.removeClass(Object.keys(this.options.linkClasses).join(" ")), i.attr("href", b).addClass(d)))
                }
                this.callback("insertImageLink", [b])
            } else "A" == this.$body.find(".f-img-editor").parent().get(0).tagName && a(this.$body.find(".f-img-editor").get(0)).unwrap(), this.callback("removeImageLink");
            this.saveUndoStep(), this.showImageEditor(), this.$body.find(".f-img-editor").find("img").click(), this.link = !1
        } else this.hasSelectionByMarkers() ? this.restoreSelectionByMarkers() : this.restoreSelection(), this.saveSelectionByMarkers(), document.execCommand("unlink", !1, b), this.$body.find('span[data-fr-link="true"]').each(function (b, c) {
            a(c).replaceWith(a(c).html())
        }), this.restoreSelectionByMarkers(), "" !== b ? (document.execCommand("createLink", !1, b), this.refreshSelectedLink(b, d, e, f)) : this.isLink || (this.$body.find("a:empty").remove(), this.callback("removeLink")), this.saveUndoStep(), this.hideLinkWrapper(!0), "" != this.text() && this.showBttnWrapper(), this.link = !1
    }, a.Editable.prototype.refreshSelectedLink = function (b, c, d, e) {
        for (var f = this.getSelectionLinks(), g = 0; g < f.length; g++) {
            var h = a(f[g]);
            d === !0 ? h.attr("target", "_blank") : h.removeAttr("target"), e === !0 && /^https?:\/\//.test(b) ? h.attr("rel", "nofollow") : h.removeAttr("rel"), h.data("fr-link", !0), h.removeClass(Object.keys(this.options.linkClasses).join(" ")), c && h.addClass(c), h.addClass("link"), h.innerHTML = h.text()
        }
        this.$body.find("a:empty").remove(), this.callback("insertLink", [b])
    }, a.Editable.prototype.typingLink = function (b, c, d) {
        this.saveUndoStep(), this.options.alwaysBlank && (d = !0);
        var e = c.match(a.Editable.VALID_URL_EXPR_CONTAINS);
        e && e.length > 0 && (c = e[0]);
        var f = this.sanitizeURL(c);
        if ("" !== c) {
            var g = b.textContent;
            g = g.replace(/&nbsp;/g, " "), this.saveSelectionByMarkers();
            var h = g.indexOf(c);
            this.setSelection(b, h, b, h + c.length), document.execCommand("createLink", !1, f), this.refreshSelectedLink(c, null, d), this.restoreSelectionByMarkers(), this.$body.find("a:empty").remove(), this.callback("insertLink", [c])
        }
        this.saveUndoStep()
    }, a.Editable.prototype.makeLinkElement = function (b) {
        var c = a("<a></a>");
        return c.text(b), c.attr("target", "_blank"), c.attr("href", this.sanitizeURL(b)), c.addClass("link"), c
    }, a.Editable.prototype.createLinkHTML = function () {
        var a = '<div class="be_popup be_link_popup" style="display: none;">';
        return a += '<div class="be_popup_inner"><input type="text" spellcheck="false" placeholder="http://" class="be_link_popup_url" id="f-lu-' + this._id + '"/>', a += '<button data-text="true" type="button" class="be_button_ok" id="f-ok-' + this._id + '">í™•ì¸</button>', a += '<button data-text="true" type="button" class="be_button_cancel" id="f-unlink-' + this._id + '">ì·¨ì†Œ</button>', a += "</div>", a += "</div></div>"
    }, a.Editable.prototype.buildCreateLink = function () {
        this.$link_wrapper = a(this.createLinkHTML()), this.$bttn_wrapper.append(this.$link_wrapper);
        var b = this;
        this.addListener("hidePopups", this.hideLinkWrapper), this.$link_wrapper.on("mouseup keydown keyup", "input#f-lu-" + this._id, a.proxy(function (b) {
            if (b.stopPropagation(), this.$link_wrapper.trigger("hideLinkList"), this.$link_wrapper.trigger("hideLinkClassList"), "keydown" == b.type) {
                var c = a.Editable.getKey(b);
                c.isEnterKey() ? (b.preventDefault(), this.writeInputLink()) : c.isEscKey() && (b.preventDefault(), this.hideLinkWrapper())
            }
        }, this)), this.$link_wrapper.on("click", "input#f-checkbox-" + this._id, function (a) {
            a.stopPropagation()
        }), this.$link_wrapper.on("touchend", "button#f-ok-" + this._id, function (a) {
            a.stopPropagation()
        }).on("click", "button#f-ok-" + this._id, a.proxy(this.writeInputLink, this)), this.$link_wrapper.on("click touch", "button#f-unlink-" + this._id, a.proxy(function () {
            this.link = !0, this.hideLinkWrapper()
        }, this)), this.options.linkList.length && (this.$link_wrapper.on("click touch", "li.f-choose-link", function () {
            var c = b.$link_wrapper.find("button#f-browse-links-" + b._id),
                d = b.$link_wrapper.find("input#f-lt-" + b._id),
                e = b.$link_wrapper.find("input#f-lu-" + b._id),
                f = b.$link_wrapper.find("input#f-checkbox-" + b._id);
            d && d.val(a(this).data("body")), e.val(a(this).data("href")), f.prop("checked", a(this).data("blank")), c.click()
        }).on("mouseup", "li.f-choose-link", function (a) {
            a.stopPropagation()
        }), this.$link_wrapper.on("click", "button#f-browse-links-" + this._id, function (c) {
            c.stopPropagation();
            var d = b.$link_wrapper.find("ul#f-link-list-" + b._id);
            b.$link_wrapper.trigger("hideLinkClassList"), a(this).find("i").toggleClass("fa-chevron-down"), a(this).find("i").toggleClass("fa-chevron-up"), d.toggle()
        }).on("mouseup", "button#f-browse-links-" + this._id, function (a) {
            a.stopPropagation()
        }), this.$link_wrapper.bind("hideLinkList", function () {
            var a = b.$link_wrapper.find("ul#f-link-list-" + b._id),
                c = b.$link_wrapper.find("button#f-browse-links-" + b._id);
            a && a.is(":visible") && c.click()
        })), Object.keys(this.options.linkClasses).length && (this.$link_wrapper.on("mouseup keydown", "input#f-luc-" + this._id, a.proxy(function (a) {
            a.stopPropagation(), this.$link_wrapper.trigger("hideLinkList"), this.$link_wrapper.trigger("hideLinkClassList")
        }, this)), this.$link_wrapper.on("click touch", "li.f-choose-link-class", function () {
            var c = b.$link_wrapper.find("input#f-luc-" + b._id);
            c.val(a(this).text()), c.data("class", a(this).data("class")), b.$link_wrapper.trigger("hideLinkClassList")
        }).on("mouseup", "li.f-choose-link-class", function (a) {
            a.stopPropagation()
        }), this.$link_wrapper.on("click", "button#f-links-class-" + this._id, function (c) {
            c.stopPropagation(), b.$link_wrapper.trigger("hideLinkList");
            var d = b.$link_wrapper.find("ul#f-link-class-list-" + b._id);
            a(this).find("i").toggleClass("fa-chevron-down"), a(this).find("i").toggleClass("fa-chevron-up"), d.toggle()
        }).on("mouseup", "button#f-links-class-" + this._id, function (a) {
            a.stopPropagation()
        }), this.$link_wrapper.bind("hideLinkClassList", function () {
            var a = b.$link_wrapper.find("ul#f-link-class-list-" + b._id),
                c = b.$link_wrapper.find("button#f-links-class-" + b._id);
            a && a.is(":visible") && c.click()
        })), this.$link_wrapper.on("click", "i#f-link-close-" + this._id, a.proxy(function () {
            this.showBttnWrapper(), this.hideLinkWrapper(), (!this.options.inlineMode && !this.isImageMode() || this.isLink || 0 === this.options.buttons.length) && this.hide(), this.isImageMode() ? this.showImageEditor() : this.restoreSelection()
        }, this))
    }, a.Editable.prototype.getSelectionLinks = function () {
        var a, b, c, d, e = [];
        if (window.getSelection) {
            var f = window.getSelection();
            if (f.getRangeAt && f.rangeCount) {
                d = document.createRange();
                for (var g = 0; g < f.rangeCount; ++g) {
                    for (a = f.getRangeAt(g), b = a.commonAncestorContainer, 1 != b.nodeType && (b = b.parentNode); b && 1 == b.nodeType && "a" != b.nodeName.toLowerCase();) {
                        var h = b.parentNode;
                        if (!h || 1 != h.nodeType) break;
                        if (h.className && h.className.indexOf("wrap_item") > -1 || "a" == h.nodeName.toLowerCase()) {
                            b = h;
                            break
                        }
                        if ("body" == h.nodeName.toLowerCase() || h.className && h.className.indexOf("wrap_body") > -1) break;
                        b = h
                    }
                    if (b)
                        if ("a" == b.nodeName.toLowerCase()) e.push(b);
                        else {
                            c = b.getElementsByTagName("a");
                            for (var i = 0; i < c.length; ++i) d.selectNodeContents(c[i]), d.compareBoundaryPoints(a.END_TO_START, a) < 1 && d.compareBoundaryPoints(a.START_TO_END, a) > -1 && e.push(c[i])
                        }
                }
                d.detach()
            }
        } else if (document.selection && "Control" != document.selection.type)
            if (a = document.selection.createRange(), b = a.parentElement(), "a" == b.nodeName.toLowerCase()) e.push(b);
            else {
                c = b.getElementsByTagName("a"), d = document.body.createTextRange();
                for (var j = 0; j < c.length; ++j) d.moveToElementText(c[j]), d.compareEndPoints("StartToEnd", a) > -1 && d.compareEndPoints("EndToStart", a) < 1 && e.push(c[j])
            }
        return e
    }, a.Editable.prototype.linkCheckKeydown = function () {
        var b = this.getSelection();
        if (null == b || !b.isCollapsed) return !0;
        var c = this.getCurrentTextNode();
        if (!c) return !0;
        var d = c.textContent;
        if (a.Editable.containsUrl(d) && 3 == c.nodeType && 0 == a(c).closest("a").length) {
            var e = c,
                f = e.textContent;
            if (a.Editable.containsUrl(f) && 3 == e.nodeType) return f = f.match(a.Editable.VALID_URL_EXPR_CONTAINS)[0], this.typingLink(e, f), !1
        }
        return !0
    }, a.Editable.prototype.getPreviewAnchor = function (b) {
        return a("span[data-preview=" + b + "]")
    }, a.Editable.prototype.requestPreviewData = function (b, c) {
        _this = this, a.ajax({
            type: "GET",
            crossDomain: !0,
            url: this.getApiDomain() + "/url/opengraph",
            data: {
                q: encodeURIComponent(b)
            }
        }).error(function (a) {
            _this.failOpengraph(a, c)
        }).done(function (a) {}).success(function (a) {
            if (a && 200 == a.code && null != a.data) _this.renderOpengraph(a.data, c);
            else {
                var b = a ? a.desc : "data not found";
                _this.failOpengraph(b, c)
            }
        })
    }, a.Editable.prototype.renderOpengraph = function (b, c) {
        var d = '<div class="wrap_item item_type_openGraph">';
        b.image && (d += '<a class="openGraph_image" style="background-image: url(' + b.image + ')" href="' + (b.url || "#") + '"></a>'), d += '<a class="openGraph_content">', b.title && (d += "<strong>" + b.title + "</strong><br>");
        var e = b.description || "this site is...";
        d += "<em>" + e + "</em><br>", b.url && (d += b.url.match(a.Editable.VALID_URL_EXPR)[3]), d += "</a></div>";
        var f = this.getPreviewAnchor(c);
        a(this.getWrapItem(f)).after(a(d)), f.remove()
    }, a.Editable.prototype.failOpengraph = function (b, c) {
        var d = this.getPreviewAnchor(c).get(0);
        if (d) {
            d.firstChild;
            null != anchorText && a(anchorText).unwrap()
        }
    }
}(window.jQuery),
function () {
    var a = !1,
        b = /xyz/.test(function () {
            xyz
        }) ? /\b_super\b/ : /.*/;
    this.Class = function () {}, Class.extend = function (c) {
        function d() {
            !a && this.init && this.init.apply(this, arguments)
        }
        var e = this.prototype;
        a = !0;
        var f = new this;
        a = !1;
        for (var g in c) f[g] = "function" == typeof c[g] && "function" == typeof e[g] && b.test(c[g]) ? function (a, b) {
            return function () {
                var c = this._super;
                this._super = e[a];
                var d = b.apply(this, arguments);
                return this._super = c, d
            }
        }(g, c[g]) : c[g];
        return d.prototype = f, d.prototype.constructor = d, d.extend = arguments.callee, d
    }
}(),
function (a) {
    a.Editable.ModuleClass = Class.extend({
        init: function (a, b) {
            this.editorInstance = a, this.name = b.MODULE_NAME, this.options = b.DEFAULTS, this._id = this.editorInstance._id, this.active = !1, this.wrapperActive = !1, this.$popupWrapper = null, this.$popupButton = null
        },
        get: function () {
            return this
        },
        getName: function () {
            return this.name
        },
        addCommands: function (b) {
            a.extend(a.Editable.commands, b)
        },
        initModule: function () {
            this.initEvent(), this.buildWrapper()
        },
        initEvent: function () {},
        buildWrapper: function () {},
        showWrapper: function () {
            this.$popupWrapper && (this.wrapperActive ? this.editorInstance.hidePopups() : (this.editorInstance.hidePopups(), this.wrapperActive = !0, this.editorInstance.saveSelectionByMarkers(), this.$popupWrapper.show(), this.$popupButton.addClass("active")))
        },
        hideWrapper: function () {
            this.$popupWrapper && this.wrapperActive && (this.wrapperActive = !1, this.$popupWrapper.hide(), this.$popupButton.removeClass("active"))
        },
        select: function (a) {
            this._selectModule(a)
        },
        _selectModule: function (a) {
            this.editorInstance && a && (this.editorInstance.clearSelection(), this.editorInstance.hide(), this.editorInstance.hideBttnWrapper())
        },
        deselect: function () {
            return null
        },
        deleteItem: function () {
            var a = this.getElement();
            return a && a.length > 0 ? this.editorInstance.callback("beforeDeleteModule", [a.get(0)], !1) : !1
        },
        isActive: function () {
            return this.active
        },
        hasCaption: function () {
            return !1
        },
        doKeydown: function (a) {
            return !0
        },
        validate: function () {
            var b = this.getElements();
            return b ? b.length > 0 && b.each(a.proxy(function (b, c) {
                if ($element = a(c), !this.valid($element)) throw new Error("validate error in module : " + this.name)
            }, this)) : be.log(this, "í•´ë‹¹ ëª¨ë“ˆì—ëŠ” getElements í•¨ìˆ˜ê°€ êµ¬í˜„ë˜ì–´ ìžˆì§€ ì•Šì•„ validate í•  ìˆ˜ ì—†ìŠµë‹ˆë‹¤."), !0
        },
        valid: function (a) {
            if (!a || 0 == a.length) return !1;
            var b = a.data("app");
            return this.validData(b) && this.validTag(a) ? !0 : !1
        },
        getElements: function () {
            return null
        },
        validData: function (a) {
            return !0
        },
        validTag: function (a) {
            return !0
        },
        make: function (b) {
            return a("")
        }
    })
}(jQuery), ! function (a) {
    var b = {
            AIOF: "alignVideoOuterFit",
            AICF: "alignVideoContentFit"
        },
        c = {};
    c[b.AIFF] = {
        id: "video_align_full"
    }, c[b.AIOF] = {
        id: "video_align_outer_fit",
        width: 940,
        height: 528.75
    }, c[b.AICF] = {
        id: "video_align_content_fit",
        width: 700,
        height: 393.75
    };
    var d = [b.AIOF, b.AICF],
        e = a.Editable.ModuleClass.extend({
            init: function () {
                this._super.apply(this, arguments);
                var a = this;
                this.addCommands({
                    insertVideo: {
                        title: "ë™ì˜ìƒ",
                        icon: "be_icon be_icon_side_video",
                        callback: function () {
                            a.insertVideo()
                        },
                        undo: !1,
                        tiara: "side_toolbar,attach_video"
                    }
                })
            },
            initEvent: function () {
                this.editorInstance.addListener("destroy", this.destroyVideo), this.refreshVideo()
            },
            buildWrapper: function () {
                a.Editable.makeFileInputWrapper(".be_icon_side_video", a.proxy(function () {
                    return this.makeFileform(this._id, a.Editable.commands.insertVideo.title)
                }, this)), this.buildInsertVideo(), this.addVideoControls()
            },
            getElement: function () {
                return a(".wrap_item.item_type_video:has(span.f-video-editor.active)")
            },
            getElements: function () {
                return a(".wrap_item.item_type_video")
            },
            select: function (b) {
                this._super(b);
                var c = a(this.editorInstance.getWrapItem(b)),
                    d = c.hasClass("item_type_preview");
                if (!d) {
                    var e = c.find(".text_caption");
                    e.addClass("active"), e.attr("contenteditable", !0), e.attr("data-fr-verified", !0)
                }
                var f = c.find("span.f-video-editor").addClass("active");
                this.editorInstance.callback("moduleSelected", [c]), d || (this.showVideoEditorPopup(f), this.refreshButtons()), this.active = !0
            },
            deselect: function () {
                var a = this.getElement();
                return a.find(".text_caption.active").attr("contenteditable", !1), a.find(".text_caption.active").removeClass("active"), this.hideVideoEditorPopup(), a && a.get(0)
            },
            hasCaption: function (a) {
                return !0
            },
            doKeydown: function (b) {
                var c = a.Editable.getKey(b);
                return c.isTabKey() ? (this.editorInstance.clearSelection(), this.alignVideo(!c.isMetaKey()), !1) : !0
            },
            validData: function (a, b) {
                return a ? b ? a.url && a.id && a.host && a.thumbnail && a.align : "video" == a.type && this.validData(a, !0) : !1
            },
            validTag: function (a) {
                return a && 0 != a.length ? 0 == a.has("div .wrap_video img").length && 0 == a.has("div .wrap_video iframe").length ? !1 : 0 == a.has("div .wrap_video .text_caption").length ? !1 : !0 : !1
            },
            make: function (a) {
                return a.owner = !1, this.makeVideoElement(a, !1)
            }
        });
    e.MODULE_NAME = "video", e.DEFAULTS = {
        videoButtons: ["alignVideoOuterFit", "alignVideoContentFit", "removeVideo"],
        videoUploadParams: {
            type: "video"
        },
        videoUploadParam: "file",
        maxVideoSize: 524288e3
    }, e.TVPOT_OPTION = {
        i_visibility: !1,
        d_visibility: !1,
        o_visibility: !1,
        dl_visibility: !1,
        r_visibility: !1
    }, e.VIDEO_PROVIDERS = [{
        host: "youtube",
        test_regex: /^https?:\/\/(www\.)?(m\.)?((youtu.be\/)(v\/)?|(\/u\/\w\/)|(embed\/)|(youtube.com\/watch\?))\??v?=?([^#\&\?]*).*/,
        url_regex: /(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)?([^#\&\?]+).*/g,
        url_text: "http://www.youtube.com/embed/$1",
        html: '<iframe width="{width}" height="{height}" src="{url}" frameborder="0" allowfullscreen></iframe>',
        getId: function (a) {
            var b = a.match(/.+\/([^/&]+)/);
            return b && 2 == b.length ? b[1] : null
        }
    }, {
        host: "vimeo",
        test_regex: /^https?:\/\/(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/,
        url_regex: /(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com)\/(?:channels\/[A-z]+\/|groups\/[A-z]+\/videos\/)?(.+)/g,
        url_text: "http://player.vimeo.com/video/$1",
        html: '<iframe width={width} height={height} src="{url}" frameborder="0" allowfullscreen></iframe>',
        getId: function (a) {
            var b = a.match(/.+\/([^/&]+)/);
            return b && 2 == b.length ? b[1] : null
        }
    }, {
        host: "tvpot",
        test_regex: /^https?:\/\/((tvpot.daum.net\/)|(videofarm.daum.net\/controller\/video\/viewer\/Video.html\?))((v\/)|(vid=)|.*(clipid=))([^#\&\?]*).*/,
        url_regex: /(?:https?:\/\/)?(?:tvpot.daum.net)\/(?:v\/|.*clipid=)?([^#\&\?]*).*/g,
        url_text: "http://videofarm.daum.net/controller/video/viewer/Video.html?vid=$1&play_loc=undefined",
        html: '<iframe width="{width}" height="{height}" src="{url}" frameborder="0" allowfullscreen></iframe>',
        getId: function (a) {
            var b = a.match(/.+?vid=([^/&]+)/);
            return b && 2 == b.length ? b[1] : null
        },
        replaceUrl: function (a) {
            return a.replace(/(.*)/, this.url_text)
        }
    }, {
        host: "kakaotv",
        test_regex: /^https?:\/\/(tv.kakao.com\/)(v\/)([^#\&\?]*).*/,
        url_regex: /(?:https?:\/\/)?(?:tv.kakao.com)\/(?:v\/)?([^#\&\?]*).*/g,
        url_text: "http://vfarm.tv.kakao.com/controller/video/viewer/Video.html?vid=$1&play_loc=undefined",
        html: '<iframe width="{width}" height="{height}" src="{url}" frameborder="0" allowfullscreen></iframe>',
        getId: function (a) {
            var b = a.match(/.+?vid=([^/&]+)/);
            return b && 2 == b.length ? b[1] : null
        },
        replaceUrl: function (a) {
            return a.replace(/(.*)/, this.url_text)
        }
    }], e.VIDEO_COMMANDS = {
        alignVideoOuterFit: {
            title: "940px",
            icon: {
                type: "font",
                value: "be_icon be_icon_video_align_outer_fit"
            }
        },
        alignVideoContentFit: {
            title: "700px",
            icon: {
                type: "font",
                value: "be_icon be_icon_video_align_content_fit"
            }
        }
    }, a.Editable.addModule(e), e.prototype.getProvider = function (a) {
        for (var b = 0, c = e.VIDEO_PROVIDERS.length; c > b; b++) {
            var d = e.VIDEO_PROVIDERS[b];
            if (d.host == a) return d
        }
        return null
    }, e.prototype.insertVideo = function () {
        this.editorInstance.hidePopups()
    }, e.prototype.makeFileform = function (b, c) {
        var d = '<div class="be_file_form video_form_wrap">';
        return d += '<form target="file-video-' + b + '" enctype="multipart/form-data" encoding="multipart/form-data" action="' + this.editorInstance.getUploadURL() + '" method="post" id="f-upload-form-video-' + b + '"><input id="f-file-upload-video-' + b + '" type="file" name="' + this.options.videoUploadParam + '" title="' + c + '" accept="video/mp4,video/x-m4v,video/mpeg2,video/3gpp2,video/3gpp,video/*" multiple></form>', this.editorInstance.browser.msie && a.Editable.getIEversion() <= 9 && (d += '<iframe id="file-video-' + b + '" name="frame-video-' + b + '" src="javascript:false;" style="width:0; height:0; border:0px solid #FFF; position: fixed; z-index: -1;" data-loaded="true"></iframe>'), d + "</div>"
    }, e.prototype.iFrameLoad = function (b) {
        if ("javascript:false;" != b.src) {
            var c = a("iframe#file-video-" + this._id);
            if (!c.data("loaded")) return c.data("loaded", !0), !1;
            try {
                var d = c.contents().text();
                this.parseVideoResponse(d)
            } catch (e) {
                this.throwVideoError(a.Editable.ERROR_CODE.CROSS_DOMAIN, null)
            }
        }
    }, e.prototype.buildInsertVideo = function () {
        var b = this;
        if (this.editorInstance.browser.msie && a.Editable.getIEversion() <= 9) {
            var c = a(".be_icon_side_video").closest(".dynamic_button_wrap").find("iframe").get(0);
            c.attachEvent ? c.attachEvent("onload", function (a) {
                b.iFrameLoad(this)
            }) : c.onload = function () {
                b.iFrameLoad(this)
            }
        }
        a(document.body).on("change", '.video_form_wrap input[type="file"]', function () {
            if (b.editorInstance.saveUndoStep(), b.editorInstance.browser.msie ? b.editorInstance.restoreSelectionByMarkers() : b.editorInstance.restoreSelection(), void 0 !== this.files) b.uploadFiles(this.files);
            else {
                var c = a(this).closest("form");
                c.find('input[type="hidden"]').remove();
                var d;
                for (d in b.options.videoUploadParams) c.prepend('<input type="hidden" name="' + d + '" value="' + b.options.videoUploadParams[d] + '" />');
                c.prepend('<input type="hidden" name="XHR_CORS_TRARGETORIGIN" value="' + window.location.href + '" />'), c.submit()
            }
            a(this).val("")
        })
    }, e.prototype.destroyVideo = function () {}, e.prototype.hideVideoEditorPopup = function () {
        this.$video_editor && (this.$video_editor.hide(), a("span.f-video-editor").removeClass("active"), this.editorInstance.$element.removeClass("f-non-selectable"), this.active = !1)
    }, e.prototype.showVideoEditorPopup = function (a) {
        this.$video_editor && (this.$video_editor.show(), this.editorInstance.showByCoordinatesCenter(a.offset().left + a.width() / 2, a.offset().top + 40, this.$video_editor.width() / 2), this.active = !0)
    }, e.prototype.addVideoControlsHTML = function () {
        var b = this;
        this.$video_editor = a('<div class="be_popup be_popup_video" style="display: none">');
        for (var c = a('<div class="f-popup-line">').appendTo(this.$video_editor), d = 0; d < this.options.videoButtons.length; d++) {
            var f = this.options.videoButtons[d];
            if (void 0 !== e.VIDEO_COMMANDS[f]) {
                var g = e.VIDEO_COMMANDS[f],
                    h = '<button class="be_button" data-callback="' + f + '" data-cmd="' + f + '" title="' + g.title + '">';
                h += a.Editable.Module.generateButtonIcon(g), h += "</button>", c.append(h)
            }
        }
        this.editorInstance.addListener("hidePopups", function (a) {
            b.hideVideoEditorPopup()
        }), this.editorInstance.$popup_editor.append(this.$video_editor), this.$video_editor.append(a('<div class="be_popup_video_bg"></div>')), this.editorInstance.bindCommandEvents(this.$video_editor), this.$video_editor.find("button").click(function (c) {
            c.stopPropagation(), b[a(this).attr("data-cmd")](b.editorInstance.$element.find("span.f-video-editor.active"))
        })
    }, e.prototype.changeAlign = function (b, d) {
        var e = c[b],
            f = a(this.editorInstance.getWrapItem(d.get(0))),
            g = f.data("app"),
            h = f.find(".text_caption").text(),
            i = g;
        i.caption = h;
        var j = this.generateVideoTemplate(!0, i, e);
        f.replaceWith(j), this.editorInstance.callback("afterInsertModule", [j]), this.select(j)
    }, e.prototype.alignVideoOuterFit = function (a) {
        this.changeAlign(b.AIOF, a), this.editorInstance.saveUndoStep()
    }, e.prototype.alignVideoContentFit = function (a) {
        this.changeAlign(b.AICF, a), this.editorInstance.saveUndoStep()
    }, e.prototype.removeVideo = function () {
        var b = this.editorInstance.getWrapItem(a("span.f-video-editor.active"));
        b && a(b).remove(), this.editorInstance.hide(), this.editorInstance.triggerEvent("videoRemoved"), this.editorInstance.focus()
    }, e.prototype.refreshVideo = function () {
        this.editorInstance.$body.find(".item_type_video").each(a.proxy(function (b, c) {
            var d = a(c),
                e = d.find(".text_caption").text(),
                f = d.data("app");
            if (e && (f.caption = e), "video" == f.type) {
                var g = this.getAlignData(f.align),
                    h = this.generateVideoTemplate(!0, f, g);
                d.replaceWith(h)
            }
        }, this)), this.editorInstance.callback("afterInsertModule", [], !1)
    }, e.prototype.addVideoControls = function () {
        this.addVideoControlsHTML(), this.editorInstance.$element.on(this.editorInstance.mousedown, ".item_type_video:not(.item_type_preview), .item_type_video span.f-video-editor, .item_type_video .text_caption, .item_type_video span.f-video-editor img", a.proxy(function (b) {
            if (this.editorInstance.isDisabled()) return !1;
            b.stopPropagation();
            var c = b.currentTarget,
                d = null,
                e = this.editorInstance.getSelectionElement();
            e == c && a(e).hasClass("text_caption") && "true" == c.contentEditable || (c.className && -1 != c.className.indexOf("text_caption") && (d = c), b.preventDefault(), this.select(c), this.editorInstance.selectionInCaption(d) && this.editorInstance.setSelection(d))
        }, this))
    }, e.prototype.writeTvpot = function (b, c) {
        var d;
        if (b && b.model && (d = b.model), !d) return void this.throwVideoError(a.Editable.ERROR_CODE.PARSING, null, c);
        var e = {
            type: this.name,
            host: "tvpot",
            owner: !0,
            id: d.vid,
            url: b.url,
            thumbnail: d.thumbnailUrl,
            uploader: d.uploader
        };
        this.renderVideo(e, c)
    }, e.prototype.makeVideoHTML = function (a, b) {
        for (var c = "", d = 0; d < e.VIDEO_PROVIDERS.length; d++) {
            var f = e.VIDEO_PROVIDERS[d];
            if (f.host == b.host) {
                var g = b.url,
                    h = b.thumbnail;
                if (a) c = '<img src="' + h.replace(/^https?:/, "") + '" />';
                else {
                    if ("tvpot" == b.host || "kakaotv" == b.host) {
                        if (!this.tvpotOption) {
                            var i = "",
                                j = e.TVPOT_OPTION;
                            for (var k in j) i += "&" + k + "=" + j[k];
                            this.tvpotOption = i
                        }
                        g += this.tvpotOption
                    }
                    g.replace(/$/, "//$"), c = f.html.replace(/\{url\}/, g.replace(/^https?:/, "").replace(/\$/, "$$$"))
                }
                c = '<span class="f-video-editor" data-fr-verified="true">' + c + "</span>";
                break
            }
        }
        return c
    }, e.prototype.hideVideoPreview = function (a) {
        this.getPreviewAnchor(a).remove()
    }, e.prototype.throwVideoError = function (b, c, d) {
        c = c || a.Editable.ERROR_MESSAGE[b], this.hideVideoPreview(d), this.editorInstance.error(c)
    }, e.prototype.beforeFileUpload = function (a) {
        for (var b = "", c = "", d = 0, e = a.length; e > d; d++) {
            var f = (new Date).getTime(),
                g = a[d];
            g.id = "video_" + f + "_" + d, b += '<div class="wrap_item item_type_video item_type_preview" data-file-id="' + g.id + '"><div class="wrap_content">', b += '<span class="f-video-editor" data-fr-verified="true"><div class="video">', b += '<div class="video_status"><div class="video_status_icon"></div><div class="video_status_text">ë™ì˜ìƒ ì—…ë¡œë“œ ì§„í–‰ì¤‘</div><div class="video_status_ing"></div></div>', b += '<div class="video_name">' + g.name + "</div>", b += "</div></span>", b += '<div class="jq_ui_progress_wrap"></div></div></div>', d == e - 1 && (c = g.id)
        }
        this.editorInstance.insertItem(this, b, !0, !0)
    }, e.prototype.uploadFiles = function (a) {
        if (void 0 !== a && a.length > 0) {
            this.beforeFileUpload(a);
            for (var b = 0, c = a.length; c > b; b++) this.uploadFile(a[b])
        }
    }, e.prototype.uploadFile = function (b) {
        if (b && b.id) {
            var c, d = b.id;
            if (this.editorInstance.drag_support.formdata && (c = this.editorInstance.drag_support.formdata ? new FormData : null), c) {
                var e;
                for (e in this.options.videoUploadParams) c.append(e, this.options.videoUploadParams[e]);
                if (c.append(this.options.videoUploadParam, b), b.size > this.options.maxVideoSize) return this.throwVideoError(a.Editable.ERROR_CODE.VIDEO_TOO_LARGE, null, d), !1
            }
            if (c) {
                var f = a.proxy(function (a) {
                    if (a.lengthComputable) {
                        var b = a.loaded / a.total * 100 | 0,
                            c = this.getPreviewAnchor(d).find(".jq_ui_progress_wrap").progressbar("value");
                        100 != c && (b > 90 && (b = 100), this.getPreviewAnchor(d).find(".jq_ui_progress_wrap").progressbar({
                            value: b
                        }), 100 == b && (this.getPreviewAnchor(d).find(".video_status_text").text("ë™ì˜ìƒ ë¶„ì„ ë° ì¸ë„¤ì¼ ìƒì„±ì¤‘ìž…ë‹ˆë‹¤"), this.progressSub(d)))
                    }
                }, this);
                this.getPreviewAnchor(d).find(".jq_ui_progress_wrap").progressbar({
                    value: 1
                });
                var g = this.editorInstance.getAjax("POST", this.editorInstance.getUploadURL(), {
                    formData: c
                }, d, f);
                g.success(a.proxy(function (b) {
                    try {
                        this.parseVideoResponse(b, d)
                    } catch (c) {
                        this.throwVideoError(a.Editable.ERROR_CODE.PARSING, null, d)
                    }
                }, this)).error(a.proxy(function (b, c) {
                    "abort" != c && this.throwVideoError(a.Editable.ERROR_CODE.UPLOAD, null, d)
                }, this))
            }
        }
    }, e.prototype.progressSub = function (b) {
        var c = this.getPreviewAnchor(b);
        if (c.length > 0) {
            var d = c.find(".video_status_ing"),
                e = d.text(),
                f = e.length;
            for (f++, f > 3 && (f = 1), e = ""; f;) e += ".", f--;
            d.text(e), setTimeout(a.proxy(function () {
                this.progressSub(b)
            }, this), 500)
        }
    }, e.prototype.parseVideoResponse = function (b, c) {
        try {
            b.data && b.data.url ? this.writeTvpot(b.data, c) : b.desc ? this.throwVideoError(a.Editable.ERROR_CODE.UNKNOWN, b.desc, c) : this.throwVideoError(a.Editable.ERROR_CODE.NO_LINK, null, c)
        } catch (d) {
            this.throwVideoError(a.Editable.ERROR_CODE.PARSING, null, c), console.error(d)
        }
    }, e.prototype.getDefaultTemplateData = function () {
        var a = b.AICF;
        return c[a]
    }, e.prototype.generateTemplate = function (b) {
        return a.Editable.getTemplate("editor.video.hbs", b)
    }, e.prototype.generateVideoTemplate = function (c, d, e) {
        var f = this.makeVideoHTML(c, d),
            g = d.url,
            h = (this.getAlignKey(d.align), a.extend({}, e || this.getDefaultTemplateData()));
        h.id == b.AIFF || (f = f.replace(/\{width\}/, h.width), f = f.replace(/\{height\}/, h.height)), h.tag = f;
        var i = {
            type: this.name,
            align: h.id,
            host: d.host,
            id: d.id,
            url: g,
            thumbnail: d.thumbnail,
            owner: d.owner || !1,
            uploader: d.uploader,
            caption: d.caption || ""
        };
        h.data = JSON.stringify(i), i.caption = d.caption || "", h.videoData = i;
        var j = a(this.generateTemplate(h));
        return j.find(".text_caption").attr("data-fr-verified", !0), j
    }, e.prototype.refreshButtons = function () {
        var a = this.getElement(),
            b = a.data("app"),
            c = b.align,
            d = this.getAlignKey(c);
        this.$video_editor.find("[data-cmd]").removeClass("active"), d && this.$video_editor.find('[data-cmd="' + d + '"]').addClass("active")
    }, e.prototype.getAlignKey = function (a) {
        for (var b in c)
            if (c[b].id == a) return b;
        return null
    }, e.prototype.getAlignData = function (a) {
        return c[this.getAlignKey(a)]
    }, e.prototype.alignVideo = function (a) {
        var b = this.getElement(),
            c = b.data("app");
        if (c) {
            var e = c.align,
                f = this.getAlignKey(e),
                g = d;
            if (g && g.length > 0) {
                var h = g.length,
                    i = 0;
                for (var j in g)
                    if (g[j] == f) {
                        i = j;
                        break
                    }
                a ? i++ : i--, 0 > i ? i = h - 1 : i >= h && (i = 0), f = g[i], this.changeAlign(f, b), this.editorInstance.saveUndoStep()
            }
        }
    }, e.prototype.isVideoUrl = function (a) {
        for (var b, c = 0; c < e.VIDEO_PROVIDERS.length; c++) {
            var d = e.VIDEO_PROVIDERS[c];
            if (b = a.match(d.test_regex), b && b[0] == a) return a
        }
        return null
    }, e.prototype.makeVideoData = function (a) {
        for (var b = {
                owner: !1
            }, c = 0; c < e.VIDEO_PROVIDERS.length; c++) {
            var d = e.VIDEO_PROVIDERS[c];
            if (d.test_regex.test(a)) {
                if (b.url = a.replace(d.url_regex, d.url_text), b.host = d.host, b.id = d.getId(b.url), "tvpot" == b.host || "kakaotv" == b.host) {
                    var f = a.match(d.test_regex);
                    f && 9 == f.length && "clipid=" == f[7] && (b.clipid = b.id)
                }
                return b
            }
        }
        return null
    }, e.prototype.linkCheckKeydown = function (b) {
        if (!b.isEnterKey()) return !0;
        var c = this.editorInstance.getSelection();
        if (null == c || !c.isCollapsed) return !0;
        var d = this.editorInstance.getCurrentTextNode();
        if (!d) return !0;
        var e = d.textContent,
            f = "";
        a.Editable.containsUrl(e) && 3 == d.nodeType && (f = e.match(a.Editable.VALID_URL_EXPR_CONTAINS)[0]);
        var g = this.isVideoUrl(f);
        if (3 == d.nodeType) {
            var h = e.indexOf(f);
            if (0 != h) {
                var i = e.substring(0, h),
                    j = e.substring(h, e.length);
                d.nodeValue = j, d.parentNode.insertBefore(document.createTextNode(i), d), this.editorInstance.setSelection(d, j.length)
            }
            var k = d;
            if (k && g == k.nodeValue) {
                var f = k.nodeValue;
                if (this.isVideoUrl(f) == f && 3 == k.nodeType) {
                    var l = (new Date).getTime();
                    if (a(k).wrap('<span data-fr-verified="true" data-file-id="' + l + '"></span>'), a("span[data-file-id=" + l + "]").length > 0) {
                        var m = this.makeVideoData(f);
                        return this.requestVideoData(m, l), !1
                    }
                }
            }
        }
        return !0
    }, e.prototype.makeItemByVideoData = function (a, b) {
        return this.requestVideoData(a, b), !1
    }, e.prototype.getPreviewAnchor = function (b) {
        return a("[data-file-id=" + b + "]")
    }, e.prototype.getDummyItem = function (b) {
        return a("[data-dummy-id=" + b + "]")
    }, e.prototype.requestVideoData = function (a, b) {
        null != a.url && this.renderVideo(a, b)
    }, e.prototype.requestThumbnail = function (a, b) {
        if (a.host && a.id)
            if ("youtube" == a.host) {
                var c = "http://img.youtube.com/vi/" + a.id + "/0.jpg";
                a.thumbnail = c, this.renderVideo(a, b)
            } else if ("tvpot" == a.host || "kakotv" == a.host) {
            a.clipid && (a.id = ""), _this = this;
            var d = {
                    id: a.id || "",
                    clipid: a.clipid || ""
                },
                e = this.editorInstance.getAjax("GET", this.editorInstance.getApiDomain() + "/url/tvpotinfo", d);
            e.error(function (a, c) {
                _this.failInlineRenderVideo(c, b)
            }).success(function (c) {
                if (c && 200 == c.code && null != c.data) delete a.clipid, a.id = c.data.vid, a.thumbnail = c.data.edit_thumb_url, a.url = _this.getProvider(a.host).replaceUrl(a.id), _this.renderVideo(a, b);
                else {
                    var d = c ? c.desc : "data not found";
                    _this.failInlineRenderVideo(d, b)
                }
            })
        } else {
            _this = this;
            var f = {
                    host: a.host,
                    id: a.id
                },
                g = this.editorInstance.getAjax("GET", this.editorInstance.getApiDomain() + "/url/thumbnail", f);
            g.error(function (a, c) {
                _this.failInlineRenderVideo(c, b)
            }).success(function (c) {
                if (c && 200 == c.code && null != c.data) a.thumbnail = c.data, _this.renderVideo(a, b);
                else {
                    var d = c ? c.desc : "data not found";
                    _this.failInlineRenderVideo(d, b)
                }
            })
        }
    }, e.prototype.renderVideo = function (b, c) {
        if (b.thumbnail) {
            var d = this.generateVideoTemplate(!0, b),
                e = this.getPreviewAnchor(c),
                f = this.getDummyItem(c),
                g = !1;
            e && e.length > 0 ? (a(this.editorInstance.getWrapItem(e)).after(d), e.hasClass("item_type_video") ? (e.find(".f-video-editor.active").length > 0 && (g = !0), e.remove()) : (this.writeLink(c), this.editorInstance.clearSelection())) : f.length > 0 ? f.replaceWith(d) : this.editorInstance.insertItem(this, d), this.editorInstance.callback("afterInsertModule", [d]), this.editorInstance.triggerEvent("attached", [this, b, d, g]), g && this.select(d)
        } else this.requestThumbnail(b, c)
    }, e.prototype.failInlineRenderVideo = function (a, b) {
        this.writeLink(b)
    }, e.prototype.writeLink = function (b) {
        if (b) {
            var c = this.getPreviewAnchor(b);
            c.length > 0 && c.each(a.proxy(function (b, c) {
                var d = c.firstChild;
                if (d) {
                    var e = a(d);
                    e.unwrap(), 0 == e.closest("a").length && this.editorInstance.typingLink(d, a(d).text())
                }
            }, this))
        }
    }, e.prototype.getVideoDataForSave = function () {
        var b = [],
            c = {},
            d = this;
        return a(".item_type_video").each(function (e, f) {
            var g = a(f).data("app");
            g.type == d.name && g.owner && "tvpot" == g.host && !c[g.id] && (b.push({
                id: g.id,
                uploader: g.uploader
            }), c[g.id] = !0)
        }), b
    }, e.prototype.makeVideoElement = function (a, b, c) {
        var d = this.getAlignData(a.align),
            e = this.generateVideoTemplate(!b, a, d),
            f = e.data("app");
        return b && !c && f.uploader && delete f.uploader, e.attr("data-app", JSON.stringify(f)), e
    }, e.prototype.arrangeSaveData = function (b, c) {
        b.find(".item_type_video").each(a.proxy(function (b, d) {
            var e = a(d),
                f = e.data("app");
            f.type == this.name && (f.caption = e.find(".text_caption").text(), $video = this.makeVideoElement(f, !0, c), e.replaceWith($video))
        }, this))
    }
}(jQuery), ! function (a) {
    var b = a.Editable.ModuleClass.extend({
            init: function () {
                this._super.apply(this, arguments), this.isSaveActive = !1, this.initializedPhotoLibrary = !1, this.editImageRemainCount = 0, this.isEditing = !1, this.downloadImageCnt = 0;
                var b = this;
                this.addCommands({
                    insertImage: {
                        title: "ì´ë¯¸ì§€",
                        icon: "be_icon be_icon_side_picture",
                        callback: function (a, c, d, e) {
                            b.removeUploadInterface(), this.options.inlineMode || this.positionPopup("insertImage")
                        },
                        tiara: "side_toolbar,attach_img"
                    }
                }), this.editorInstance.addUseImageUploadButton(".be_icon_side_picture", a.Editable.commands.insertImage.title), this.serializeUploadFilePending = {}, this.initializePhotoLibrary()
            },
            initModule: function () {
                a.Editable.makeImageInputWrapper(this.editorInstance.getUseImageUploadButton(), a.proxy(function (a, b) {
                    return this.makeFileform(c++, b)
                }, this)), this.buildInsertImage(), this.initImageSelect(), this.initImagePopup()
            },
            getElement: function () {
                return a(".wrap_item.item_type_img:has(span.f-img-editor)")
            },
            getElements: function () {
                return a(".wrap_item.item_type_img:not(.item_type_preview)")
            },
            select: function (b) {
                if (this._super(b), b = a.Editable.getHtmlTag(b)) {
                    "IMG" != b.tagName && (b = a(b).find("img"), b.length > 0 && (b = b.get(0))), this.$image_editor.find("button").removeClass("active");
                    var c = a(this.editorInstance.getWrapItem(b));
                    if (0 != c.length) {
                        this._super(b);
                        var d = c.hasClass("item_type_preview"),
                            e = a(b),
                            f = e.parent();
                        if (f.hasClass("f-img-editor") && "SPAN" == f.get(0).tagName || (e.wrap('<span data-fr-verified="true" class="f-img-editor"></span>'), 0 == e.closest(".f-img-wrap").length && (e.closest("a").length > 0 ? e.closest("a:first").wrap('<span data-fr-verified="true" class="f-img-wrap"></span>') : e.parent().wrap('<span data-fr-verified="true" class="f-img-wrap"></span>'))), !d) {
                            var g = c.data("align"),
                                h = c.data("app").width;
                            this.checkAvailableAlign(h), this.$image_editor.find('button[data-cmd="' + g + '"]').addClass("active");
                            var i = c.find(".text_caption");
                            i.addClass("active"), i.attr("contenteditable", !0), i.attr("data-fr-verified", !0)
                        }
                        this.showImageEditor(), this.editorInstance.showByCoordinatesCenter(e.offset().left + e.width() / 2, e.offset().top + 40, this.$image_editor.width() / 2), this.editorInstance.$bttn_wrapper.find(".fr-bttn").removeClass("active"), this.refreshButtons(), this.editorInstance.callback("moduleSelected", [c]), this.active = !0
                    }
                }
            },
            deselect: function () {
                var b = a(".f-img-wrap").closest(".item_type_img");
                return this.editorInstance.$element.find(".wrap_body span.f-img-editor > img").each(a.proxy(function (b, c) {
                    a(c).closest(".f-img-wrap").length > 0 ? "A" == a(c).parent().parent().get(0).tagName ? a(c).siblings("span.f-img-handle").remove().end().unwrap().parent().unwrap() : a(c).siblings("span.f-img-handle").remove().end().unwrap().unwrap() : a(c).siblings("span.f-img-handle").remove().end().unwrap()
                }, this)), this.editorInstance.$element.find(".wrap_body .text_caption.active").attr("contenteditable", !1), this.editorInstance.$element.find(".wrap_body .text_caption.active").removeClass("active"), this.editorInstance.$element.find(".wrap_body span.f-img-editor").length && (this.editorInstance.$element.find(".wrap_body span.f-img-editor").remove(), this.editorInstance.$element.find(".wrap_body span.f-img-editor").remove()), this.editorInstance.$element.removeClass("f-non-selectable"), this.editableDisabled || this.editorInstance.enableContenteditable(!0), this.$image_editor && this.$image_editor.hide(), this.isSaveActive = !1, this.active = !1, b && b.get(0)
            },
            deleteItem: function () {
                return this._super() ? (this.refreshImageList(!0), this.isSaveActive = !1, !0) : !1
            },
            hasCaption: function () {
                return !0
            },
            doKeydown: function (b) {
                var c = a.Editable.getKey(b);
                return c.isTabKey() ? (this.editorInstance.clearSelection(), this.alignImage(!c.isMetaKey()), !1) : !0
            },
            validData: function (a, b) {
                return a ? b ? a.url && -1 != a.url.indexOf("1.daumcdn.net/brunch") && a.width && a.height : "img" == a.type && a.align && a.mobileAlign && a.url && -1 != a.url.indexOf("1.daumcdn.net/brunch") : !1
            },
            validTag: function (a) {
                return a && 0 != a.length ? 0 == a.has("img").length ? !1 : 0 == a.has(".text_caption").length ? !1 : !0 : !1
            },
            make: function (b) {
                if (!this.validData(b, !0)) return a("");
                var c = b.url,
                    d = b.originalName || "",
                    e = b.width,
                    g = b.height,
                    h = b.caption || "";
                b.model = {
                    width: e,
                    height: g
                };
                var i = null;
                if (null != b.align) {
                    f[this.getAlignKey(b.align)];
                    var j = this.getAvailableAlign(e),
                        k = this.getAlignKey(b.align); - 1 == a.inArray(k, j) && (i = null)
                }
                i ? i.mobileAlign = b.mobileAlign : i = this.getDefaultTemplateData(e), i.image = b, i.image.url = a.Editable.getThumbnailUrl(c), i.image.caption = a.Editable.unescapeQuotation(h);
                var l = "{";
                l += '"type": "img", "url": "' + c + '", "originalName": "' + d + '", ', l += '"align": "' + i.id + '", "mobileAlign": "' + i.mobileAlign + '",', l += '"caption": "' + h + '", "width": ' + e + ', "height": ' + g + " }", i.data = l;
                var m = this.generateTemplate(i),
                    n = a(m);
                return n
            }
        }),
        c = 0,
        d = {
            AIFF: "alignImageFullFit",
            AIFC: "alignImageFullCaption",
            AIOF: "alignImageOuterFit",
            AICF: "alignImageContentFit",
            AIIC: "alignImageInnerCenter",
            AIIL: "alignImageInnerLeft",
            AIOL: "alignImageOuterLeft",
            AIOR: "alignImageOuterRight",
            AICL: "alignImageContentLeft",
            AICR: "alignImageContentRight",
            AIDT: "alignImageDependsOnText"
        },
        e = {
            940: [d.AIFF, d.AIOF, d.AICF, d.AIOL, d.AIOR, d.AICL, d.AICR],
            700: [d.AIOF, d.AICF, d.AIOL, d.AIOR, d.AICL, d.AICR],
            320: [d.AICF, d.AIIC, d.AIIL, d.AIOL, d.AIOR, d.AICL, d.AICR],
            280: [d.AIIC, d.AIIL, d.AIOL, d.AIOR, d.AICL, d.AICR],
            0: [d.AIDT]
        },
        f = {};
    f[d.AIFF] = {
        id: "full",
        templateId: "image_align_full",
        wrap_full_class: ""
    }, f[d.AIFC] = {
        id: "full-inner-caption",
        templateId: "image_align_full",
        wrap_full_class: "type_inner_caption"
    }, f[d.AIOF] = {
        id: "outer-full",
        templateId: "image_align_outer_fit"
    }, f[d.AIOL] = {
        id: "outer-left",
        templateId: "image_align_outer_with",
        wrap_item_class: "img_align_left"
    }, f[d.AIOR] = {
        id: "outer-right",
        templateId: "image_align_outer_with",
        wrap_item_class: "img_align_right"
    }, f[d.AICF] = {
        id: "content-full",
        templateId: "image_align_content_fit"
    }, f[d.AICL] = {
        id: "content-left",
        templateId: "image_align_content_with",
        wrap_item_class: "img_align_left"
    }, f[d.AICR] = {
        id: "content-right",
        templateId: "image_align_content_with",
        wrap_item_class: "img_align_right"
    }, f[d.AIIC] = {
        id: "inner-center",
        templateId: "image_align_inner",
        wrap_item_class: "img_align_center"
    }, f[d.AIIL] = {
        id: "inner-left",
        templateId: "image_align_inner",
        wrap_item_class: "img_align_left"
    }, f[d.AIDT] = {
        id: "depends-on-text",
        templateId: "image_align_text",
        wrap_item_class: "img_align_text"
    }, b.MODULE_NAME = "image", a.Editable.addModule(b), b.IMAGE_COMMANDS = {
        alignImageFullFit: {
            title: "ì™€ì´ë“œ",
            icon: {
                value: "be_icon be_icon_image_align_full_fit"
            }
        },
        alignImageFullCaption: {
            title: "ì™€ì´ë“œ ìº¡ì…˜",
            icon: {
                value: "be_icon be_icon_image_align_full_caption"
            }
        },
        alignImageOuterFit: {
            title: "940px",
            icon: {
                value: "be_icon be_icon_image_align_outer_fit"
            }
        },
        alignImageContentFit: {
            title: "700px",
            icon: {
                value: "be_icon be_icon_image_align_content_fit"
            }
        },
        alignImageInnerCenter: {
            title: "ì›ë³¸",
            icon: {
                value: "be_icon be_icon_image_align_inner_center"
            }
        },
        alignImageInnerLeft: {
            title: "ì›ë³¸ ì™¼ìª½",
            icon: {
                value: "be_icon be_icon_image_align_inner_left"
            }
        },
        alignImageOuterLeft: {
            title: "470px ì™¼ìª½",
            icon: {
                value: "be_icon be_icon_image_align_outer_left"
            }
        },
        alignImageOuterRight: {
            title: "470px ì˜¤ë¥¸ìª½",
            icon: {
                value: "be_icon be_icon_image_align_outer_right"
            }
        },
        alignImageContentLeft: {
            title: "350px ì™¼ìª½",
            icon: {
                value: "be_icon be_icon_image_align_content_left"
            }
        },
        alignImageContentRight: {
            title: "350px ì˜¤ë¥¸ìª½",
            icon: {
                value: "be_icon be_icon_image_align_content_right"
            }
        },
        editImage: {
            title: "ì´ë¯¸ì§€ íŽ¸ì§‘",
            icon: {
                value: "be_icon be_icon_image_edit"
            }
        }
    }, b.DEFAULTS = {
        allowedImageTypes: ["jpeg", "jpg", "png", "gif", "bmp"],
        imageButtons: ["alignImageFullFit", "alignImageFullCaption", "alignImageOuterFit", "alignImageContentFit", "alignImageInnerCenter", "alignImageInnerLeft", "alignImageOuterLeft", "alignImageOuterRight", "alignImageContentLeft", "alignImageContentRight", "editImage"],
        imageLink: !1,
        imageUploadParams: {
            type: "image"
        },
        imageUploadParam: "file",
        maxImageSize: 20971520,
        maxPixelSize: 5e7,
        crossDomain: !0,
        icons: {},
        editableMinSize: 200,
        stateEdit: "brunchEditorEditImage",
        photoEditorVersion: "1.2.3",
        photoEditorOptions: {
            serviceName: "brunch",
            originType: "daum",
            viewport: {
                list: "fixed-width",
                preview: "fixed-width"
            },
            shortCut: {
                cancel: 27
            },
            menu: {
                main: ["filter", "crop", "size", "effect_all"],
                sub: {
                    effect: ["brightness", "contrast", "saturation", "warmth"]
                }
            },
            filter: {
                type: "flat",
                showTool: !0,
                itemWidth: 60,
                itemHeight: 60,
                filterMargin: 20,
                filter: [{
                    label: "ì›ë³¸",
                    id: "OR00"
                }, {
                    label: "01",
                    id: "AQ01"
                }, {
                    label: "02",
                    id: "AQ03"
                }, {
                    label: "03",
                    id: "AQ04"
                }, {
                    label: "04",
                    id: "AQ07"
                }, {
                    label: "05",
                    id: "AQ10"
                }, {
                    label: "06",
                    id: "BW03"
                }, {
                    label: "07",
                    id: "BW04"
                }, {
                    label: "08",
                    id: "BW06"
                }, {
                    label: "09",
                    id: "BW10"
                }, {
                    label: "10",
                    id: "CL01"
                }, {
                    label: "11",
                    id: "CL02"
                }, {
                    label: "12",
                    id: "CL03"
                }, {
                    label: "13",
                    id: "CL05"
                }, {
                    label: "14",
                    id: "CL06"
                }, {
                    label: "15",
                    id: "CL09"
                }, {
                    label: "16",
                    id: "RE01"
                }, {
                    label: "17",
                    id: "RE04"
                }, {
                    label: "18",
                    id: "RE05"
                }, {
                    label: "19",
                    id: "RE08"
                }, {
                    label: "20",
                    id: "RE09"
                }, {
                    label: "21",
                    id: "SO02"
                }, {
                    label: "22",
                    id: "SO07"
                }, {
                    label: "23",
                    id: "SO11"
                }]
            },
            crop: {
                list: [{
                    type: "Free",
                    label: "ìžìœ "
                }, {
                    type: "number",
                    width: 9,
                    height: 16
                }, {
                    type: "number",
                    width: 3,
                    height: 4
                }, {
                    type: "number",
                    width: 1,
                    height: 1
                }, {
                    type: "number",
                    width: 4,
                    height: 3
                }, {
                    type: "number",
                    width: 16,
                    height: 9
                }],
                ratioRotateMode: "none"
            },
            resize: [{
                type: "origin",
                label: "ì›ë³¸"
            }, {
                type: "w",
                size: "280"
            }, {
                type: "w",
                size: "350"
            }, {
                type: "w",
                size: "470"
            }, {
                type: "w",
                size: "700"
            }, {
                type: "w",
                size: "940"
            }],
            modules: {
                preview_draggable: !1
            }
        }
    }, b.prototype.isPendingSerializeUploadFiles = function () {
        var a = this.serializeUploadFilePending;
        for (var b in a) return !0;
        return !1
    }, b.prototype.isPendingDownloadImages = function () {
        return this.downloadImageCnt > 0 ? !0 : !1
    }, b.prototype.removeUploadInterface = function () {
        this.uploadInterface = null
    }, b.prototype.hideImageEditorPopup = function () {
        this.$image_editor && (this.$image_editor.hide(), this.editorInstance.isDisabled() || (this.deselect(), this.isSaveActive = !1))
    }, b.prototype.showImageEditorPopup = function () {
        if (this.$image_editor) {
            var a = this.getElement(),
                b = a.data("app");
            a.hasClass("item_type_preview") || (b && b.align != f[d.AIDT].id || this.$image_editor.find("[data-cmd=editImage]").length > 0) && this.$image_editor.show()
        }
    }, b.prototype.showImageEditor = function () {
        this.showImageEditorPopup()
    }, b.prototype.makeFileform = function (b, c) {
        var d = ".be_icon_cover_image" == c.buttonClass ? "" : ' multiple="true"',
            e = '<div class="be_file_form image_form_wrap">';
        return e += '<form target="frame-' + b + '" enctype="multipart/form-data" encoding="multipart/form-data" action="' + this.editorInstance.getUploadURL() + '" method="post" id="f-upload-form-' + b + '"><input id="f-file-upload-' + b + '" type="file" name="' + this.options.imageUploadParam + '" title="' + c.title + '"  accept="image/*"' + d + "></form>", this.editorInstance.browser.msie && a.Editable.getIEversion() <= 9 && (e += '<iframe id="frame-' + b + '" name="frame-' + b + '" src="javascript:false;" style="width:0; height:0; border:0px solid #FFF; position: fixed; z-index: -1;" data-loaded="true"></iframe>'), e + "</div>"
    }, b.prototype.buildInsertImage = function () {
        var b = this;
        a(document.body).on("change", '.image_form_wrap input[type="file"]', function () {
            if (be.log("this.uploadInterface > ", this.uploadInterface), b.editorInstance.saveUndoStep(), b.editorInstance.browser.msie ? b.editorInstance.restoreSelectionByMarkers() : b.editorInstance.restoreSelection(), void 0 !== this.files) b.uploadFiles(this.files);
            else {
                var c = a(this).closest("form");
                c.find('input[type="hidden"]').remove();
                var d;
                for (d in b.options.imageUploadParams) c.prepend('<input type="hidden" name="' + d + '" value="' + b.options.imageUploadParams[d] + '" />');
                c.prepend('<input type="hidden" name="XHR_CORS_TRARGETORIGIN" value="' + window.location.href + '" />'), c.submit()
            }
            a(this).val("")
        })
    }, b.prototype.disableImageResize = function () {
        if (this.editorInstance.browser.mozilla) try {
            document.execCommand("enableObjectResizing", !1, !1), document.execCommand("enableInlineTableEditing", !1, !1)
        } catch (a) {}
    }, b.prototype.touchHandler = function (b) {
        var c = this.editorInstance.isDisabled();
        if (c) return !0;
        this.removeUploadInterface(), b.stopPropagation(), b.preventDefault();
        var d = b.currentTarget,
            e = null,
            f = this.editorInstance.getSelectionElement();
        f == d && a(f).hasClass("text_caption") && "true" == d.contentEditable || (d.className && -1 != d.className.indexOf("text_caption") ? (e = d, d = a(this.editorInstance.getWrapItem(d)).find("img").get(0)) : "img" != d.tagName.toLowerCase() && (d = a(d).find("img").get(0)),
            this.select(d), this.editorInstance.selectionInCaption(e) && this.editorInstance.setSelection(e))
    }, b.prototype.initImageSelect = function () {
        this.disableImageResize(), this.editorInstance.$element.on(this.editorInstance.mouseup, ".item_type_img, .item_type_img .text_caption, .item_type_img  img", a.proxy(this.touchHandler, this))
    }, b.prototype.initImagePopup = function () {
        this.$image_editor = a('<div class="be_popup be_popup_image" style="display: none"></div>');
        for (var c = a('<div class="f-popup-line">').appendTo(this.$image_editor), d = 0; d < this.options.imageButtons.length; d++) {
            var e = this.options.imageButtons[d];
            if (void 0 !== b.IMAGE_COMMANDS[e]) {
                var f = b.IMAGE_COMMANDS[e],
                    g = '<button class="be_button" data-cmd="' + e + '" title="' + f.title + '"' + this.editorInstance.makeTiaraData(f) + ">";
                g += a.Editable.Module.generateButtonIcon(f), g += "</button>", c.append(g)
            }
        }
        var h = this;
        this.editorInstance.addListener("hidePopups", function () {
            h.hideImageEditorPopup()
        }), this.$image_editor.append(a('<div class="be_popup_image_bg"></div>')), this.$image_editor.find("button").click(function (b) {
            b.stopPropagation(), h[a(this).attr("data-cmd")]()
        }), this.editorInstance.$popup_editor.append(this.$image_editor)
    }, b.prototype.arrangeSaveData = function (b) {
        b.find(".item_type_img").each(a.proxy(function (b, c) {
            var d = a(c),
                e = d.data("app");
            if ("img" == e.type) {
                e.caption = a.Editable.escapeQuotation(d.find(".text_caption").text()), e.model = {}, e.model.width = e.width, e.model.height = e.height;
                var g = f[this.getAlignKey(e.align)];
                g.mobileAlign = e.mobileAlign;
                var h = this.generateImageTemplate(e, g),
                    i = h.data("app");
                i.uploader && delete i.uploader, d.replaceWith(h)
            }
        }, this))
    }, b.prototype.changeAlign = function (b, c) {
        var d = f[b],
            e = c.data("app"),
            g = a.Editable.escapeQuotation(c.find(".text_caption").text()),
            h = {};
        h.url = e.url, h.model = {}, h.model.width = e.width, h.model.height = e.height, h.caption = g, d.mobileAlign = e.mobileAlign;
        var i = this.generateImageTemplate(h, d);
        c.replaceWith(i), this.editorInstance.callback("afterInsertModule", [i]), this.select(i.find("img")), this.editorInstance.saveUndoStep()
    }, b.prototype.alignImage = function (a) {
        var b = this.getElement();
        if (!b.hasClass("item_type_preview")) {
            var c = b.data("app"),
                d = c.align,
                e = c.width,
                f = this.getAlignKey(d),
                g = this.getAvailableAlign(e);
            if (g && g.length > 1) {
                var h = g.length,
                    i = 0;
                for (var j in g)
                    if (g[j] == f) {
                        i = j;
                        break
                    }
                a ? i++ : i--, 0 > i ? i = h - 1 : i >= h && (i = 0), f = g[i], this.changeAlign(f, b)
            }
            b.click()
        }
    }, b.prototype.alignImageFullFit = function () {
        var a = this.getElement();
        this.changeAlign(d.AIFF, a)
    }, b.prototype.alignImageFullCaption = function () {
        var a = this.getElement();
        this.changeAlign(d.AIFC, a)
    }, b.prototype.alignImageOuterFit = function () {
        var a = this.getElement();
        this.changeAlign(d.AIOF, a)
    }, b.prototype.alignImageOuterLeft = function () {
        var a = this.getElement();
        this.changeAlign(d.AIOL, a)
    }, b.prototype.alignImageOuterRight = function () {
        var a = this.getElement();
        this.changeAlign(d.AIOR, a)
    }, b.prototype.alignImageContentFit = function () {
        var a = this.getElement();
        this.changeAlign(d.AICF, a)
    }, b.prototype.alignImageContentLeft = function () {
        var a = this.getElement();
        this.changeAlign(d.AICL, a)
    }, b.prototype.alignImageContentRight = function () {
        var a = this.getElement();
        this.changeAlign(d.AICR, a)
    }, b.prototype.alignImageInnerCenter = function () {
        var a = this.getElement();
        this.changeAlign(d.AIIC, a)
    }, b.prototype.alignImageInnerLeft = function () {
        var a = this.getElement();
        this.changeAlign(d.AIIL, a)
    }, b.prototype.linkImage = function () {
        var a = this.getElement();
        this.hideImageEditorPopup(), this.editorInstance.showInsertLinkData(a), this.isSaveActive = !0
    }, b.prototype.hideImagePreview = function (a) {
        this.getPreviewAnchor(a).remove()
    }, b.prototype.writeImage = function (b, c, d) {
        var e = b.url;
        if (!e || -1 == e.indexOf("daumcdn.net")) return void this.throwImageError(a.Editable.ERROR_CODE.BAD_LINK, null, b.id, d);
        var f = a.Editable.getThumbnailUrl(e),
            g = 1,
            h = (new Date).getTime() / 1e3,
            i = new Image;
        return i.onerror = a.proxy(function (c) {
            errorTime = (new Date).getTime() / 1e3, c && "error" == c.type && 0 != g && errorTime - h > 5 ? (g--, i.src = f) : (this.throwImageError(a.Editable.ERROR_CODE.BAD_LINK, null, b.id, d), this.downloadImageCnt--)
        }, this), i.onload = a.proxy(function () {
            if (c) {
                var a = this.generateImageTemplate(b);
                c(a)
            } else d ? d.onFinish(b) : (this.finishUploadBefore(b, !0), this.insertLoadedImage(b));
            this.downloadImageCnt--
        }, this), this.downloadImageCnt++, void(i.src = f)
    }, b.prototype.getDefaultTemplateData = function (b) {
        var c = d.AIIC,
            e = "content-full";
        return b >= 700 ? (c = d.AICF, e = "full") : 280 > b && (c = d.AIDT), a.extend(f[c], {
            mobileAlign: e
        })
    }, b.prototype.getNormalizeWidth = function (a) {
        var b = 0;
        return a > 940 ? b = 940 : a >= 700 ? b = 700 : a >= 320 ? b = 320 : a >= 280 && (b = 280), b
    }, b.prototype.getAvailableAlign = function (a) {
        var b = this.getNormalizeWidth(a);
        return e[b]
    }, b.prototype.checkAvailableAlign = function (a) {
        var b = this.getAvailableAlign(a);
        this.$image_editor.find("[data-cmd]").hide(), this.$image_editor.find("[data-cmd]").removeClass("toolbar_first_button");
        var c = !0;
        for (var d in b) c && (this.$image_editor.find("[data-cmd=" + b[d] + "]").addClass("toolbar_first_button"), c = !1), this.$image_editor.find("[data-cmd=" + b[d] + "]").show();
        this.$image_editor.find("[data-cmd=editImage]").show()
    }, b.prototype.getAlignKey = function (a) {
        for (var b in f)
            if (f[b].id == a) return b;
        return null
    }, b.prototype.refreshButtons = function () {
        var a = this.getElement(),
            b = a.data("app");
        if (b) {
            var c = b.align,
                d = this.getAlignKey(c);
            this.$image_editor.find("[data-cmd]").removeClass("active"), d && this.$image_editor.find('[data-cmd="' + d + '"]').addClass("active")
        }
    }, b.prototype.generateTemplate = function (b) {
        return a.Editable.getTemplate("editor.image.hbs", b)
    }, b.prototype.generateImageTemplate = function (b, c) {
        var d = b.url,
            e = b.originalName || "",
            f = b.model.width,
            g = b.model.height,
            h = b.caption || "",
            c = c || this.getDefaultTemplateData(f),
            i = b.image;
        delete b.image, c.image = b, i ? d = "" : (c.image.url = a.Editable.getThumbnailUrl(d), c.image.caption = a.Editable.unescapeQuotation(h));
        var j = "{";
        j += '"type": "img", "url": "' + d + '", "originalName": "' + e + '", ', j += '"align": "' + c.id + '", "mobileAlign": "' + c.mobileAlign + '",', j += '"caption": "' + h + '", "width": ' + f + ', "height": ' + g + " }", c.data = j;
        var k = this.generateTemplate(c),
            l = a(k);
        return i && b.id && (l.find("img").replaceWith(i), this.changePreviewImage(l, b.id)), l.find(".text_caption").attr("data-fr-verified", !0), l
    }, b.prototype.changePreviewImage = function (a, b) {
        a.attr("data-file-id", b), a.data("file-id", b), a.addClass("item_type_preview"), a.find(".wrap_img_float").append('<div class="image_wrapper"><div class="image_wrapper_overlay"></div><div class="jq_ui_progress_wrap"></div></div>')
    }, b.prototype.getImageAppData = function (a) {
        var b = a.url,
            c = a.originalName,
            d = a.model.width,
            e = a.model.height,
            f = (a.caption || "", this.getDefaultTemplateData(d));
        return {
            type: "img",
            url: b,
            originalName: c || "",
            width: d,
            height: e,
            align: f.align,
            mobileAlign: f.mobileAlign,
            caption: ""
        }
    }, b.prototype.insertLoadedImage = function (b, c, d) {
        var e = !1,
            f = (b.url, this.generateImageTemplate(b)),
            g = (this.editorInstance.getSelectionElements()[0], this.editorInstance.getRange()),
            h = null;
        !this.editorInstance.browser.msie && a.Editable.getIEversion() > 8 && (h = a(g.startContainer));
        var i = b.id,
            j = this.getPreviewAnchor(i);
        if (j.length > 0)
            if (j.find("img").length > 0) {
                c = 1 == this.editorInstance.$element.find(".item_type_img.item_type_preview").length;
                var k = j.find("img").attr("data-edit-id") || 0;
                j.find("img").replaceWith(f.find("img")), j.find(".image_wrapper").remove(), j.removeAttr("data-file-id"), j.removeClass("item_type_preview"), j.attr("data-app", f.attr("data-app")), j.data("app", JSON.parse(f.attr("data-app"))), j.find(".f-img-editor").length > 0 && (e = !0), d || this.editorInstance.triggerEvent("attached", [this, b, j, !e]), this.hideImagePreview(i), c && this.editorInstance.showGuide(this.editorInstance.guideLabel.GUIDE_IMAGE), f = j, this.isEditing && k && (f.find("img").data("edit-id", k), f.find("img").attr("data-edit-id", k))
            } else j.addClass("delete_by_module"), e = !1, c && (this.editorInstance.selectionInEditor() || (e = !0)), this.editorInstance.replaceItem(this, j, f, e);
        else this.editorInstance.insertItem(this, f);
        return b.image && this.progressImage(!1, f), this.editorInstance.$body.find("img").each(function (a, b) {
            b.oncontrolselect = function () {
                return !1
            }
        }), f
    }, b.prototype.progressImage = function (a, b) {
        var c = typeof b;
        ("string" == c || "number" == c) && (b = this.getPreviewAnchor(b)), b.find(".jq_ui_progress_wrap").progressbar({
            value: a
        })
    }, b.prototype.throwImageError = function (b, c, d, e) {
        this.finishUploadBefore({
            id: d
        }, !1), c = c || a.Editable.ERROR_MESSAGE[b], e ? e.onError(d) : this.hideImagePreview(d), this.editorInstance.error(c)
    }, b.prototype.uploadFiles = function (a) {
        var b = this.uploadInterface;
        if (this.removeUploadInterface(), b && "gridGallery" == b.getName() && a.length < 2 && (b = null), !this.editorInstance.triggerEvent("beforeFileUpload", [a], !1)) return !1;
        if (a = this.beforeUploadFiles(a, b), b && b.setLen(a.length || 0), void 0 !== a && a.length > 0)
            if (b)
                for (var c = 0, d = a.length; d > c; c++) {
                    var e = a[c],
                        f = c == d - 1;
                    this.uploadFile(e, b, f)
                } else a.length > 0 && this.serializeUploadFile(0, a)
    }, b.prototype.uploadUrl = function (b, c) {
        var d = this,
            e = this.editorInstance.getAjax("POST", this.editorInstance.getUploadURL() + "/url", {
                type: "image",
                url: b
            });
        e.success(a.proxy(function (a) {
            if (a.data && a.data.url) d.writeImage(a.data, c);
            else {
                a.desc ? a.desc : null;
                c(null, null)
            }
        }, this)).error(a.proxy(function (a, b) {
            "abort" != b && c(null, b)
        }, this))
    }, b.prototype.beforeUploadFiles = function (b, c) {
        var d = [],
            e = "";
        if (void 0 !== b && b.length > 0)
            for (var f = 0, g = b.length; g > f; f++) {
                var h = b[f],
                    i = (new Date).getTime();
                h.id = "image_" + i + "_" + f, h.size > this.options.maxImageSize ? this.throwImageError(a.Editable.ERROR_CODE.IMAGE_TOO_LARGE, null, h.id, null) : (d.push(h), e += '<div class="item_type_preview" style="display: none" data-file-id="' + h.id + '"></div>')
            }
        return c || this.editorInstance.insertItem(this, e, !0, !0), d
    }, b.prototype.uploadFile = function (b, c, d) {
        var e = this.makeFormdata(b, c);
        if (!e) return !1;
        var f = b.id;
        if (c) c.onStart(b), this.uploadFileContinue(e, f, c);
        else {
            var g = a.proxy(function () {
                    this.uploadFileContinue(e, f)
                }, this),
                h = a.proxy(function (a) {
                    this.throwImageError(a, null, f, null)
                }, this);
            f = this.previewLocalImage(b, {
                success: g,
                fail: h
            }, d)
        }
    }, b.prototype.serializeUploadFile = function (b, c) {
        var d = c[b],
            e = c[c.length - 1].id;
        0 == b && (this.serializeUploadFilePending[e] = !0), b == c.length - 1 && delete this.serializeUploadFilePending[e];
        var f = this.makeFormdata(d);
        if (!f) return !1;
        var g = d.id,
            h = b == c.length - 1,
            i = null;
        i = h ? function () {} : a.proxy(function () {
            this.serializeUploadFile(++b, c)
        }, this);
        var j = a.proxy(function () {
                this.uploadFileContinue(f, g), i()
            }, this),
            k = a.proxy(function (a) {
                this.throwImageError(a, null, g, null), i()
            }, this);
        g = this.previewLocalImage(d, {
            success: j,
            fail: k
        }, h)
    }, b.prototype.makeFormdata = function (b, c) {
        var d;
        if (this.editorInstance.drag_support.formdata && (d = this.editorInstance.drag_support.formdata ? new FormData : null), d) {
            var e;
            for (e in this.options.imageUploadParams) d.append(e, this.options.imageUploadParams[e]);
            if (d.append(this.options.imageUploadParam, b), this.options.allowedImageTypes.indexOf(b.type.replace(/image\//g, "")) < 0) return this.throwImageError(a.Editable.ERROR_CODE.IMAGE_INVALID_TYPE, null, b.id, c), !1
        }
        return d
    }, b.prototype.uploadFileContinue = function (b, c, d) {
        if (b) {
            var e = a.proxy(function (a) {
                    if (a.lengthComputable) {
                        var b = (this.getPreviewAnchor(c), a.loaded / a.total * 100 | 0);
                        this.progressImage(b, c), d && d.onProgress(b, c)
                    }
                }, this),
                f = this.editorInstance.getAjax("POST", this.editorInstance.getUploadURL(), {
                    formData: b
                }, c, e);
            f.success(a.proxy(function (b) {
                try {
                    this.parseImageResponse(b, c, d)
                } catch (e) {
                    this.throwImageError(a.Editable.ERROR_CODE.PARSING, e, c, d)
                }
            }, this)).error(a.proxy(function (b, e) {
                "abort" != e && this.throwImageError(a.Editable.ERROR_CODE.UPLOAD, null, c, d)
            }, this))
        }
    }, b.prototype.getImageDataByFile = function (a, b, c, d) {
        return {
            contentType: a.type,
            fileSize: a.size,
            model: {
                width: c,
                height: d
            },
            originalName: a.name,
            url: "",
            image: b,
            id: a.id
        }
    }, b.prototype.onErrorPreviewLocalImage = function (b, c) {
        this.throwImageError(a.Editable.ERROR_CODE.IMAGE_INVALID_TYPE, null, b.id), c.fail && c.fail(), b.id = null
    }, b.prototype.previewLocalImage = function (b, c, d) {
        var e = ((new Date).getTime(), 1),
            f = [6, 8, 3],
            g = {};
        return loadImage.parseMetaData(b, a.proxy(function (h) {
            h.exif && (e = h.exif.get("Orientation")), (void 0 == e || -1 == a.inArray(e, f)) && (e = 1), g = 1 == e ? loadImage(b, a.proxy(function (e) {
                if ("error" == e.type) return void(c.fail && c.fail(a.Editable.ERROR_CODE.IMAGE_INVALID_TYPE));
                var f = a(e),
                    g = e.naturalWidth,
                    h = e.naturalHeight;
                if (g * h > this.options.maxPixelSize) return void(c.fail && c.fail(a.Editable.ERROR_CODE.IMAGE_TOO_PIXEL));
                c.success && c.success(), f.removeAttr("width"), f.removeAttr("height");
                var i = this.getImageDataByFile(b, e, g, h);
                this.insertLoadedImage(i, d)
            }, this)) : loadImage(b, a.proxy(function (e) {
                if (!e || "error" == e.type) return void(c.fail && c.fail(a.Editable.ERROR_CODE.IMAGE_INVALID_TYPE));
                var f = new Image,
                    g = a(f);
                g.on("load", a.proxy(function () {
                    var e = f.naturalWidth,
                        g = f.naturalHeight;
                    if (e * g > this.options.maxPixelSize) return void(c.fail && c.fail(a.Editable.ERROR_CODE.IMAGE_TOO_PIXEL));
                    c.success && c.success();
                    var h = this.getImageDataByFile(b, f, e, g);
                    this.insertLoadedImage(h, d)
                }, this)), g.on("error", a.proxy(this.onErrorPreviewLocalImage, this, b, c)), f.src = e.toDataURL()
            }, this), {
                orientation: e,
                maxWidth: 940
            }), g.onerror = a.proxy(this.onErrorPreviewLocalImage, this, b, c)
        }, this)), b.id
    }, b.prototype.getPreviewAnchor = function (b) {
        return a('.item_type_preview[data-file-id="' + b + '"]')
    }, b.prototype.parseImageResponse = function (b, c, d) {
        try {
            b.data && b.data.url ? (void 0 !== c && (b.data.id = c), this.writeImage(b.data, null, d)) : b.desc ? this.throwImageError(a.Editable.ERROR_CODE.UNKNOWN, b.desc, c, d) : this.throwImageError(a.Editable.ERROR_CODE.NO_LINK, null, c, d)
        } catch (e) {
            this.throwImageError(a.Editable.ERROR_CODE.PARSING, null, c, d)
        }
    }, b.prototype.refreshImageList = function () {
        var a = this.editorInstance.$body || this.editorInstance.$element;
        a.find(".item_type_img .text_caption").attr("data-fr-verified", !0)
    }, b.prototype.getUploadInterface = function (a) {
        return this.uploadInterface = new g(a), this.uploadInterface
    };
    var g = function (a) {
        this.len = 0, this.currentIndex = 0, this.name = a, this.getName = function () {
            return this.name
        }, this.startCallback = function () {}, this.progressCallback = function () {}, this.finishCallback = function () {}, this.errorCallback = function () {}
    };
    g.prototype.setLen = function (a) {
        this.len = a
    }, g.prototype.onStart = function (a) {
        this.startCallback(a, this.len)
    }, g.prototype.onProgress = function (a, b) {
        this.progressCallback(a, b)
    }, g.prototype.onFinish = function (a) {
        this.finishCallback(a, this.currentIndex++, this.len)
    }, g.prototype.onError = function (a) {
        this.errorCallback(a), this.finishCallback({
            id: a,
            error: !0
        }, this.currentIndex++, this.len)
    }, g.prototype.setOnStartCallback = function (a) {
        this.startCallback = a
    }, g.prototype.setOnProgressCallback = function (a) {
        this.progressCallback = a
    }, g.prototype.setOnFinishCallback = function (a) {
        this.finishCallback = a
    }, g.prototype.setOnErrorCallback = function (a) {
        this.errorCallback = a
    }, b.prototype.getEditObject = function (b, c, d, e) {
        var f = e ? "" : c.url,
            g = (c.width || 200, c.height || 200, e ? "" : a.Editable.getThumbnailUrl(f)),
            h = !1;
        return (!this.isValidImageUrl(f) || e) && (h = !0, g = ""), {
            index: b,
            width: c.width,
            height: c.height,
            url: g,
            type: d,
            uploading: h
        }
    }, b.prototype.getCurrentImage = function (a) {
        return this.editorInstance.find("img[data-edit-id=" + a + "]")
    }, b.prototype.isEditableSize = function (a, b) {
        return a < this.options.editableMinSize || b < this.options.editableMinSize ? !1 : !0
    }, b.prototype.isValidImageUrl = function (a) {
        return a && -1 != a.indexOf("daumcdn.net") ? !0 : !1
    }, b.prototype.getAllImageModels = function () {
        var b = [],
            c = !1;
        return a(".item_type_img, .item_type_gridGallery").each(a.proxy(function (d, e) {
            var f = a(e),
                g = f.data("app"),
                h = null;
            if (f.hasClass("item_type_gridGallery")) {
                if (!c) {
                    c = !0;
                    for (var i = !g, j = g ? g.gridImages : f.find("img"), k = 0, l = j.length; l > k; k++) {
                        var m = j[k],
                            n = a(f.find("img")[k]);
                        n.data("edit-id", b.length), n.attr("data-edit-id", b.length), 0 != n.closest(".item_type_preview").length && (i = !0), h = this.getEditObject(b.length, m, "gridGallery", i), b.push(h), k == l - 1 && (c = !1)
                    }
                }
            } else {
                c = !1, f.find("img").attr("data-edit-id", b.length), f.find("img").data("edit-id", b.length);
                var i = !1;
                f.hasClass("item_type_preview") && (i = !0), h = this.getEditObject(b.length, g, "image", i), b.push(h)
            }
        }, this)), b
    }, b.prototype.uploadBinaryImage = function (b, c, d) {
        b = b.replace(/^data:image\/(png|jpg);base64,/, "");
        var e = d.name || "";
        if (b) {
            var f = function () {};
            null != c && (f = a.proxy(function (a) {
                if (a.lengthComputable) {
                    var b = a.loaded / a.total * 100 | 0;
                    d.progressCallback(b, c)
                }
            }, this));
            var g = new FormData;
            g.append("type", "image"), g.append("name", e), g.append("data", b);
            var h = this.editorInstance.getAjax("POST", this.editorInstance.getUploadURL() + "/binary", {
                formData: g
            }, c, f);
            h.success(a.proxy(function (a) {
                be.log(a), d.successCallback(a, c)
            }, this)).error(a.proxy(function (a, b) {
                d.errorCallback(b, c)
            }, this))
        }
    }, b.prototype.initializePhotoLibrary = function (b) {
        a.getScript("//t1.daumcdn.net/fp/photos/dist/" + this.options.photoEditorVersion + "/photos.brunch.min.js", a.proxy(function () {
            a('<div class="photos_stage"><div class="photos_container photos_is_fullscreen"></div></div>').appendTo(document.body), a(".photos_stage").css({
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                "z-index": 99999,
                display: "none"
            }), this.photosApp = new window.photos.App(a(".photos_container")[0], this.options.photoEditorOptions), this.photosApp.on("photos:edit:complete", a.proxy(function (a) {
                this.completeEditImages(a)
            }, this)), this.photosApp.on("photos:edit:cancel", a.proxy(function (a) {
                this.cancelEditImage()
            }, this)), this.initializedPhotoLibrary = !0, this.popStateEventHandler = a.proxy(this.popStateHandler, this), "function" == typeof b && b.call(this)
        }, this))
    }, b.prototype.editImage = function () {
        var a = this.getElement();
        a.find("img");
        this.globalEditImage(a.find("img"))
    }, b.prototype.globalEditImage = function (b) {
        this.editorInstance.sendTiaraEvent("select_image,img_edit"), this.initializedPhotoLibrary ? this.preCheckEditImage(b) : this.initializePhotoLibrary(a.proxy(function () {
            this.preCheckEditImage(b)
        }, this))
    }, b.prototype.preCheckEditImage = function (b) {
        if (!(null == b || b.length < 1)) {
            if (0 != this.editImageRemainCount) return void this.editorInstance.errorCode(a.Editable.ERROR_CODE.IS_UPLOADING_EDIT_IMAGE);
            var c = b.closest(".wrap_item"),
                d = b.get(0),
                e = c.data("app"),
                f = 0,
                g = 0;
            if (c.hasClass("item_type_gridGallery")) {
                var h = e.gridImages;
                c.find("img").each(a.proxy(function (a, b) {
                    if (b === d) {
                        var c = h[a];
                        return f = c.width, void(g = c.height)
                    }
                }, this))
            } else c.hasClass("item_type_img") && (f = e.width, g = e.height);
            return this.isEditableSize(f, g) ? void this.editImageWork(b) : void this.throwImageError(a.Editable.ERROR_CODE.IMAGE_TOO_SMALL_TO_EDIT, null, null, null)
        }
    }, b.prototype.editImageWork = function (b) {
        this.editImageModels = this.getAllImageModels(), this.editImageRemainCount = 0;
        if (this.editImageModels && !(this.editImageModels.length < 1)) {
            this.editorInstance.hide();
            var c = [],
                d = parseInt(b.data("edit-id"), 10);
            a.each(this.editImageModels, a.proxy(function (b, e) {
                var f = this.isEditableSize(e.width, e.height);
                d == b && (e.selected = !0);
                var g = {
                    url: e.url,
                    editable: f,
                    message: f ? "" : this.editorInstance.getErrorMessage(a.Editable.ERROR_CODE.IMAGE_TOO_SMALL_TO_EDIT),
                    uploading: e.uploading,
                    width: e.width,
                    height: e.height
                };
                c.push(g)
            }, this)), a(".photos_stage").show(), this.photosApp.openWithList(c, d), this.changeStateEdit(), this.insertPopStateHandler(), a(document.body).css("overflow", "hidden"), this.editorInstance.enableContenteditable(!1), this.editorInstance.setDisabled(!0), this.isEditing = !0
        }
    }, b.prototype.changeStateEdit = function () {
        window.history && window.history.state != this.options.stateEdit && window.history.pushState(this.options.stateEdit, document.title)
    }, b.prototype.historyReset = function () {
        window.history.state == this.options.stateEdit && (this.deletePopStateHandler(), setTimeout(a.proxy(function () {
            this.changeStateEdit(), this.insertPopStateHandler()
        }, this), 1))
    }, b.prototype.insertPopStateHandler = function () {
        this.isDeletedPopStateHandler = !1, a(window).on("popstate", this.popStateEventHandler)
    }, b.prototype.deletePopStateHandler = function () {
        this.isDeletedPopStateHandler = !0, a(window).off("popstate", this.popStateEventHandler)
    }, b.prototype.popStateHandler = function (a) {
        if (!this.isDeletedPopStateHandler) {
            if (this.photosApp && this.photosApp.hasEditedImage() && !confirm("íŽ¸ì§‘ ì¤‘ì¸ ì´ë¯¸ì§€ê°€ ìžˆìŠµë‹ˆë‹¤. ì €ìž¥í•˜ì§€ ì•Šê³  ë‹«ìœ¼ì‹œê² ìŠµë‹ˆê¹Œ?")) return void this.changeStateEdit();
            this.photosApp.close(), this.cancelEditImage(!0)
        }
    }, b.prototype.completeEditImages = function (b) {
        this.finishEditImage(), b && b.length > 0 ? (a.each(b, a.proxy(function (a, b) {
            b.serializedData && this.editImageRemainCount++
        }, this)), this.editImageRemainCount > 0 && (this.hideImageEditorPopup(), this.editorInstance.saveUndoStep(), a.each(b, a.proxy(function (a, b) {
            b.serializedData && this.completeEditEachImage(a, b)
        }, this)))) : (this.editImageModels = [], this.editImageRemainCount = 0), this.clearEditImage()
    }, b.prototype.getEditImage = function (b) {
        return a("[data-edit-id=" + b + "]")
    }, b.prototype.completeEditEachImage = function (b, c) {
        if (this.editImageModels && !(b >= this.editImageModels.length)) {
            var d = this.editImageModels[b],
                e = a.proxy(function (a) {
                    d.selected && (this.editorInstance.selectionInEditor() || this.editorInstance.getModule() || this.editorInstance.getModule(d.type).select(a)), this.editImageRemainCount--, this.editImageRemainCount < 1 && (this.editImageModels = [], this.editorInstance.saveUndoStep())
                }, this),
                f = this;
            "gridGallery" == d.type && (f = this.editorInstance.getModule("gridGallery"));
            var g = f.uploadEditImage(b, c, e);
            this.uploadBinaryImage(c.dataURL, g.id, g)
        }
    }, b.prototype.uploadEditImage = function (b, c, e) {
        var g = "edit_image_" + b,
            h = this.getEditImage(b).closest(".item_type_img"),
            i = h.data("app"),
            j = h.find(".text_caption").text();
        i.caption = j;
        var k = a.extend({}, i),
            l = i.width,
            m = this.getNormalizeWidth(l),
            n = i.align,
            o = c.width,
            p = c.height,
            q = this.getNormalizeWidth(o),
            r = this.getDefaultTemplateData(o),
            s = r.id;
        i.width = o, i.height = p;
        var t = null,
            u = [f[d.AIIC].id, f[d.AIIL].id, f[d.AIDT].id],
            v = l != o && (-1 != a.inArray(n, u) || -1 != a.inArray(s, u));
        if (m != q || v) {
            v && (i.align = null), t = this.make(i), h.replaceWith(t);
            var w = t.get(0);
            this.editorInstance.callback("afterInsertModule", [w])
        } else t = h, t.attr("data-app", JSON.stringify(i)), t.data("app", i);
        return t.find("img").attr("src", c.dataURL), this.changePreviewImage(t, g), callback = {
            id: g,
            name: h.data("app").originalName,
            progressCallback: a.proxy(this.progressImage, this),
            successCallback: a.proxy(function (a, b) {
                this.binaryUploadSuccess(a, b, k, e)
            }, this),
            errorCallback: a.proxy(function (b, c) {
                this.binaryUploadError(b, a.Editable.ERROR_CODE.UPLOAD, "", c, k, e)
            }, this)
        }
    }, b.prototype.binaryUploadSuccess = function (b, c, d, e) {
        try {
            if (b.data && b.data.url) {
                void 0 !== c && (b.data.id = c);
                var f = b.data,
                    g = f.url,
                    h = a.Editable.getThumbnailUrl(g);
                if (!g || -1 == g.indexOf("daumcdn.net")) return void this.throwImageError(a.Editable.ERROR_CODE.BAD_LINK, null, f.id, uploadInterface);
                var i = 1,
                    j = (new Date).getTime() / 1e3,
                    k = new Image;
                k.onerror = a.proxy(function (b) {
                    var f = (new Date).getTime() / 1e3;
                    b && "error" == b.type && 0 != i && f - j > 5 ? (i--, k.src = h) : (this.binaryUploadError("", a.Editable.ERROR_CODE.BAD_LINK, "", c, d, e), this.downloadImageCnt--)
                }, this), k.onload = a.proxy(function () {
                    this.finishUploadBefore(f, !0);
                    var a = this.insertLoadedImage(f, !1, !0);
                    this.binaryUploadFinish(a, e), this.downloadImageCnt--
                }, this), this.downloadImageCnt++, k.src = h
            } else this.binaryUploadError("", a.Editable.ERROR_CODE.UPLOAD, b.desc, c, d, e)
        } catch (l) {
            this.binaryUploadError(l, a.Editable.ERROR_CODE.UPLOAD, "", c, d, e)
        }
    }, b.prototype.binaryUploadError = function (b, c, d, e, f, g) {
        "abort" != b && (d = d || a.Editable.ERROR_MESSAGE[c], this.editorInstance.error(d)), this.finishUploadBefore({
            id: e
        }, !1);
        var h = this.getPreviewAnchor(e),
            i = this.make(f);
        h.replaceWith(i);
        var j = i.get(0);
        this.editorInstance.callback("afterInsertModule", [j]), this.binaryUploadFinish(i, g)
    }, b.prototype.binaryUploadFinish = function (a, b) {
        if (a && a.length > 0) {
            var c = a.get(0);
            b && b(c)
        }
    }, b.prototype.removeProgress = function (a) {
        a.find(".image_wrapper").remove()
    }, b.prototype.clearEditImage = function () {
        a("[data-edit-id]").each(function (a, b) {
            b.removeAttribute("data-edit-id")
        })
    }, b.prototype.cancelEditImage = function (a) {
        this.finishEditImage(a), this.clearEditImage()
    }, b.prototype.finishEditImage = function (b) {
        this.deletePopStateHandler(), b || history.back(), a(document.body).css("overflow", "auto"), a(".photos_stage").hide(), this.editorInstance.enableContenteditable(!0), this.editorInstance.setDisabled(!1), this.isEditing = !1
    }, b.prototype.isEditProgress = function () {
        return this.isEditing
    }, b.prototype.finishUploadBefore = function (b, c) {
        if (this.isEditing && b && b.id) {
            var d = b.id,
                e = this.getPreviewAnchor(d);
            if (e.length > 0) {
                var f = e.find("img[data-edit-id]");
                if (f.length > 0) {
                    var g = f.data("edit-id"),
                        h = {};
                    if (c && b.model) {
                        var i = b.model.width || 0,
                            j = b.model.height || 0,
                            k = a.Editable.getThumbnailUrl(b.url),
                            l = this.isEditableSize(i, j),
                            m = l ? "" : this.editorInstance.getErrorMessage(a.Editable.ERROR_CODE.IMAGE_TOO_SMALL_TO_EDIT);
                        h.editable = l, h.width = i, h.height = j, h.message = m, h.url = k
                    } else h.editable = !1, h.message = this.editorInstance.getErrorMessage(a.Editable.ERROR_CODE.UPLOAD);
                    this.photosApp.updateItem(g, h)
                }
            }
        }
    }
}(jQuery), ! function (a) {
    var b, c, d, e, f, g, h, i = "cover_full",
        j = "cover_half",
        k = "cover_text",
        l = "cover_color",
        m = "center",
        n = "left",
        o = 528,
        p = 450,
        q = 450,
        r = 30,
        s = 40,
        t = j,
        u = m,
        v = {
            center: "cover_direction_center",
            left: "cover_direction_left"
        },
        w = {
            center: "cover_direction_profile_center",
            left: "cover_direction_profile_left"
        },
        x = 0,
        y = [{
            color: "",
            "background-color": "#F67066"
        }, {
            color: "",
            "background-color": "#F8972E"
        }, {
            color: "",
            "background-color": "#FABB11"
        }, {
            color: "",
            "background-color": "#23B877"
        }, {
            color: "",
            "background-color": "#00C3BD"
        }, {
            color: "",
            "background-color": "#50A1C3"
        }, {
            color: "",
            "background-color": "#7878BC"
        }, {
            color: "",
            "background-color": "#536B82"
        }, {
            color: "",
            "background-color": "#A97857"
        }, {
            color: "",
            "background-color": "#555555"
        }],
        z = a.Editable.ModuleClass.extend({
            init: function () {
                this._super.apply(this, arguments);
                var b = this;
                this.addCommands({
                    insertCoverImage: {
                        title: "ì»¤ë²„ ì´ë¯¸ì§€",
                        icon: "be_icon be_icon_cover_image",
                        undo: !1,
                        callback: function (a, c, d, e) {
                            b.insertCoverImage()
                        }
                    },
                    insertCoverColor: {
                        title: "ì»¤ë²„ ë°°ê²½ìƒ‰",
                        icon: "be_icon be_icon_cover_text_color",
                        callback: function () {
                            this.hide(), b.insertCoverColor()
                        }
                    },
                    changeCoverAlign: {
                        title: "ì •ë ¬",
                        icon: "be_icon be_icon_cover_align",
                        callback: function () {
                            b.changeAlign()
                        }
                    },
                    changeCoverType: {
                        title: "ì»¤ë²„ ë†’ì´",
                        icon: "be_icon be_icon_cover_height",
                        callback: function () {
                            b.changeKind()
                        }
                    },
                    deleteCoverImage: {
                        title: "ì‚­ì œ",
                        icon: "be_icon be_icon_cover_trash",
                        callback: function () {
                            b.deleteImage()
                        }
                    }
                }), this.editorInstance.addUseImageUploadButton(".be_icon_cover_image", a.Editable.commands.insertCoverImage.title)
            },
            initModule: function () {
                this.reset(!1), this.initEvent()
            },
            initEvent: function () {
                this.editorInstance.$element.on("focus", ".cover_title, .cover_sub_title", a.proxy(function (a) {
                    this.focusHandler(a)
                }, this)), this.editorInstance.$element.on("blur", ".cover_title, .cover_sub_title", a.proxy(function (a) {
                    this.blurHandler(a)
                }, this)), this.editorInstance.$element.on("keydown", ".cover_title, .cover_sub_title", a.proxy(function (a) {
                    this.keyDownHandler(a) || (a.stopPropagation(), a.preventDefault())
                }, this)), this.editorInstance.$element.on("keyup", ".cover_title, .cover_sub_title", a.proxy(function (a) {
                    this.keyUpHandler(a)
                }, this)), a(window).on("resize", a.proxy(function () {
                    this.checkHeight()
                }, this))
            },
            validate: function () {
                return !0
            }
        });
    z.MODULE_NAME = "cover", a.Editable.addModule(z), z.prototype.reset = function (i) {
        if (this.blurHandler(), b = this.editorInstance.$element.find(".cover_item"), c = b.find(".cover_cell"), d = b.find(".cover_inner"), e = b.find(".cover_image"), f = b.find(".cover_profile"), g = b.find(".cover_title"), 0 == b.find("div.cover_sub_title").length) {
            var j = a("<div></div>");
            j.html(b.find(".cover_sub_title").html()), b.find(".cover_sub_title").replaceWith(j), j.addClass("cover_sub_title")
        }
        h = b.find(".cover_sub_title"), this.renderCover(i), this.fixTitle(), this.enableContenteditable(!0), this.makeBackgroundColorToolbar()
    }, z.prototype.clearKeyTimer = function () {
        this.keyTimer && (clearInterval(this.keyTimer), this.keyTimer = null)
    }, z.prototype.focusHandler = function (b) {
        this.clearKeyTimer(), this.oldFocusData = null;
        var c = a(b.currentTarget),
            d = "";
        if (c.hasClass("cover_title")) this.editorInstance.showGuide(this.editorInstance.guideLabel.GUIDE_COVER), d = ".cover_title";
        else {
            if (!c.hasClass("cover_sub_title")) return !0;
            d = ".cover_sub_title"
        }
        this.keyTimer = setInterval(a.proxy(function () {
            0 == a(d).length && this.clearKeyTimer(), this.editorInstance.pasting || this.oldFocusData == a(d).html() || (this.doLikeKeyDown(a(d)), this.oldFocusData = a(d).html())
        }, this), 100)
    }, z.prototype.blurHandler = function (a) {
        this.clearKeyTimer()
    }, z.prototype.keyDownHandler = function (b) {
        var c = a.Editable.getKey(b);
        if (c.isTabKey()) return this.editorInstance.focus(), !1;
        var d = this.editorInstance.getSelection(),
            e = this.editorInstance.getSelectionElement(),
            f = a(b.currentTarget);
        if (d.isCollapsed)
            if (this.selectionInSubTitle()) {
                if (c.isEnterKey()) return !1
            } else if (c.isEnterKey()) {
            b.stopPropagation(), b.preventDefault();
            var g = this.getLine(f);
            if (2 > g || 2 >= g && 0 == f.find("br").length)
                if (this.editorInstance.browser.msie) {
                    f.blur(), f.remove("br");
                    var h = this.editorInstance.getRange(),
                        i = document.createElement("br");
                    if (this.editorInstance.getSelectionTextInfo(e).atEnd) {
                        h.insertNode(i), h.setStartAfter(i), h.setEndAfter(i);
                        var j = document.createTextNode("â€‹");
                        h.insertNode(j), h.setStartAfter(j), h.setEndAfter(j)
                    } else h.insertNode(i), h.setStartAfter(i), h.setEndAfter(i);
                    d.removeAllRanges(), d.addRange(h), f.focus()
                } else {
                    var h = this.editorInstance.getRange(),
                        i = document.createElement("br");
                    h.insertNode(i), this.editorInstance.getSelectionTextInfo(e).atEnd && (i = document.createElement("br"), h.insertNode(i)), h.setStartAfter(i), d.removeAllRanges(), d.addRange(h)
                }
        }
        return !0
    }, z.prototype.keyUpHandler = function (b) {
        var c = a(b.currentTarget);
        this.limitTitle(c, b)
    }, z.prototype.doLikeKeyDown = function (b) {
        var d = !1,
            e = !0;
        if (b.hasClass("cover_title") ? d = !0 : b.hasClass("cover_sub_title") && (d = !0, e = !1), d) {
            var f = b.get(0);
            if (e) {
                if (this.editorInstance.limitText(f, r)) return this.editorInstance.log(a.Editable.ERROR_MESSAGE[a.Editable.ERROR_CODE.OVERFLOW_TITLE_LIMIT]), !1
            } else if (this.editorInstance.limitText(f, s)) return this.editorInstance.log(a.Editable.ERROR_MESSAGE[a.Editable.ERROR_CODE.OVERFLOW_SUB_TITLE_LIMIT]), !1;
            var g = this.getLine(b);
            2 >= g ? this.lastCoverElementHTML = b.html() : this.limitTitle(b);
            var h = c.height();
            this.coverTextHeight != h && (this.onResizeHeight(), this.coverTextHeight = h)
        }
    }, z.prototype.getData = function () {
        return new function () {
            var a = b.data("app");
            return {
                getKind: function () {
                    return a.kind || k
                },
                setKind: function (b) {
                    a.kind = b
                },
                getAlign: function () {
                    return a.align
                },
                setAlign: function (b) {
                    a.align = b
                },
                getStyle: function () {
                    return a.style || {
                        "background-image": "",
                        "background-color": "transparent"
                    }
                },
                setImage: function (b, c, d) {
                    a.style = {
                        "background-image": b
                    }, a.width = c, a.height = d
                },
                getImage: function () {
                    return this.getStyle()["background-image"]
                },
                getBackgroundColor: function () {
                    return a.style ? a.style["background-color"] : {
                        "background-color": "transparent"
                    }
                },
                setBackgroundColor: function (b) {
                    a.style = {
                        "background-color": b
                    }
                },
                getFontBackgroundColor: function () {
                    var b = "";
                    return a.title && a.title.style && (b = a.title.style["background-color"]), b
                },
                setFontBackgroundColor: function (b) {
                    !a.title && (a.title = {}), !a.title.style && (a.title.style = {}), a.title.style["background-color"] = b
                },
                getFontColor: function () {
                    var b = "";
                    return a.title && a.title.style && (b = a.title.style.color), b
                },
                setFontColor: function (b) {
                    !a.title && (a.title = {}), !a.title.style && (a.title.style = {}), a.title.style.color = b
                },
                getFontFamily: function () {
                    var b = "";
                    return a.title && a.title.style && (b = a.title.style["font-family"]), b
                },
                setFontFamily: function (b) {
                    !a.title && (a.title = {}), !a.title.style && (a.title.style = {}), a.title.style["font-family"] = b
                },
                hasFontStyle: function () {
                    return this.getFontBackgroundColor() || this.getFontColor() || this.getFontFamily()
                },
                clearBackgroundStyle: function () {
                    delete a.style
                }
            }
        }
    }, z.prototype.show = function (a) {
        a ? b.show() : b.hide()
    }, z.prototype.exec = function (a, b) {
        var c = !1,
            d = this.getData();
        if ("fontFamily" == a ? (d.setFontFamily(b), c = !0) : "color" == a ? (d.setFontColor(b), c = !0) : "backgroundColor" == a && (d.setFontBackgroundColor(b), c = !0), g.removeAttr("style"), d.hasFontStyle()) {
            var e = d.getFontColor(),
                f = d.getFontBackgroundColor(),
                h = d.getFontFamily();
            e && g.css("color", e), f && g.css("background-color", f), h && g.css("font-family", h)
        }
        return "fontFamily" == a && this.limitTitle(g), c
    }, z.prototype.clearUglyData = function (a) {
        for (var b = a.get(0).childNodes, c = b.length - 1; c >= 0; c--) {
            var d = b[c];
            if (d) {
                var e = d.nodeType;
                1 == e && "BR" == d.tagName ? d.nextSibling || d.parentNode.removeChild(d) : 3 == e ? "" == d.nodeValue && d.parentNode.removeChild(d) : d.parentNode.removeChild(d)
            }
        }
    }, z.prototype.validateSaveData = function () {
        var a = b.data("app");
        this.clearUglyData(g), this.clearUglyData(h);
        var c = g.get(0),
            d = h.get(0);
        a.plain = {
            title: g.text(),
            "title-sub": h.text()
        }, a.title = {}, a["title-sub"] = {}, this.getFormattedData(a.title, c), this.getFormattedData(a["title-sub"], d), b.attr("data-app", JSON.stringify(b.data("app")))
    }, z.prototype.isEmpty = function () {
        var a = this.getSaveData(),
            b = a.plain.title,
            c = a.plain["title-sub"];
        return b && 0 != b.length || c && 0 != c.length ? !1 : !0
    }, z.prototype.getSaveData = function () {
        this.validateSaveData();
        var a = b.data("app");
        return a
    }, z.prototype.getSaveHTML = function () {
        var b = this.getSaveData(),
            c = a("<div>").append(a(".wrap_cover").clone());
        c.find("[contenteditable]").removeAttr("contenteditable"), c.find("[data-fr-verified]").removeAttr("data-fr-verified"), c.find(".f-marker").remove(), c.find(".cover_title+br").remove();
        var d = b.kind;
        return k == d ? c.find(".cover_inner, .cover_image").removeAttr("style") : (c.find(".cover_image, .cover_inner").css("height", ""), l == d ? c.find(".cover_image").removeAttr("style") : c.find(".cover_inner").removeAttr("style")), c.find(".cover_background_color").remove(), c.attr("data-app", c.data("app")), c.html()
    }, z.prototype.getErrorCodeValidSaveData = function (b) {
        var c = b.plain.title;
        if (c.length > r) return a.Editable.ERROR_CODE.OVERFLOW_TITLE_LIMIT;
        b.plain["title-sub"];
        return c.length > s ? a.Editable.ERROR_CODE.OVERFLOW_SUB_TITLE_LIMIT : 0
    }, z.prototype.isTitleEmpty = function (b) {
        var c = b.plain.title;
        return c && 0 != c.trim().length ? !1 : a.Editable.ERROR_CODE.EMPTY_TITLE
    }, z.prototype.isSubTitleEmpty = function (a) {
        var b = a.plain["title-sub"];
        return b && 0 != b.trim().length ? !1 : !0
    }, z.prototype.getFormattedData = function (b, c) {
        var d = a(c),
            e = "";
        if (d.length > 0) {
            var f = d.get(0);
            e = d.text(), f.style && (b.style = {}, f.style.color && (b.style.color = a.Editable.RGBToHex(f.style.color)), f.style.fontFamily && (b.style["font-family"] = f.style.fontFamily.split('"').join("")), f.style.backgroundColor && (b.style["background-color"] = a.Editable.RGBToHex(f.style.backgroundColor))), b.data = [];
            for (var g = d.contents(), h = 0, i = g.length; i > h; h++) {
                var j = g[h];
                if (j) {
                    var k = {};
                    1 == j.nodeType && "br" == j.tagName.toLowerCase() ? k.type = "br" : 3 == j.nodeType && (k.type = "text", k.text = j.nodeValue), b.data.push(k)
                }
            }
        }
        e && (b.text = e)
    }, z.prototype.getHeight = function () {
        return b ? b.height() : 0
    }, z.prototype.insertCoverImage = function () {
        var b = this.editorInstance.getModule("image");
        if (b) {
            var c = b.getUploadInterface(this.name);
            c.setOnStartCallback(a.proxy(this.startUploadImage, this)), c.setOnProgressCallback(a.proxy(this.progressUploadImage, this)), c.setOnFinishCallback(a.proxy(this.changeImage, this)), c.setOnErrorCallback(a.proxy(this.uploadImageError, this))
        }
    }, z.prototype.insertCoverColor = function () {
        var a = this.getData();
        a.getKind() == l ? a.setKind(k) : a.getKind() == k && (a.setKind(l), this.changeBackgroundSet(0), this.editorInstance.touchGuide(this.editorInstance.guideLabel.GUIDE_COVER, !0)), this.renderCover()
    }, z.prototype.validateData = function () {
        var a = this.getData(),
            b = a.getKind(),
            c = a.getAlign(),
            d = a.getImage();
        d ? (b == k || b == l) && a.setKind(t) : b != k && b != l && a.setKind(k), b = a.getKind(), k == b && a.clearBackgroundStyle(), c || (c = u)
    }, z.prototype.resetSidebar = function (b, c, d) {
        var e = a(document.body);
        e.removeClass(b + " cover_direction_left cover_direction_center"), e.addClass(c + " " + d)
    }, z.prototype.resetStyle = function () {
        var a = this.getData(),
            b = a.getKind();
        b != k && this.resetFontColor(), b != l && this.resetFontBackgroundColor()
    }, z.prototype.resetFontColor = function () {
        this.getData().setFontColor(""), this.exec()
    }, z.prototype.resetFontBackgroundColor = function () {
        this.getData().setFontBackgroundColor(""), this.exec()
    }, z.prototype.renderCover = function (g) {
        this.validateData();
        var h = this.getData(),
            o = h.getImage(),
            p = h.getAlign(),
            q = h.getKind();
        if (d.css("background-color", ""), e.css("background-image", ""), o) e.css("background-image", "url(" + a.Editable.getThumbnailUrl(o) + ")");
        else if (q == l) {
            d.css("background-color", h.getBackgroundColor());
            var r = h.getFontBackgroundColor();
            this.exec("backgroundColor", r)
        }
        this.resetStyle(h);
        var s = v[m] + " " + v[n],
            t = w[m] + " " + w[n];
        c.removeClass(s).addClass(v[p]), b.removeClass(s).addClass(v[p]), f.removeClass(t).addClass(w[p]);
        var u = i + " " + j + " " + k + " " + l;
        b.removeClass(u).addClass(q), this.checkHeight(!0), this.resetSidebar(u, q, v[p]), g || this.editorInstance.saveUndoStep()
    }, z.prototype.checkHeight = function (b) {
        this.resizeTimer && (clearTimeout(this.resizeTimer), this.resizeTimer = null);
        var c = this.getData(),
            d = c.getKind();
        (b || d == i) && (this.resizeTimer = setTimeout(a.proxy(function () {
            this.onResizeHeight()
        }, this), this.editorInstance.options.animationDuration + 10))
    }, z.prototype.onResizeHeight = function () {
        var b = 0,
            d = this.getData(),
            e = d.getKind(),
            f = d.getImage();
        b = f ? e == i ? Math.max(o, a(window).height()) : p : e == l ? q : c.height() + 160, this.resizeHeight(b), this.editorInstance.raiseEvent("resizeCover", [b])
    }, z.prototype.resizeHeight = function (a) {
        var a = a ? a + "px" : "";
        e.css("height", a), d.css("height", a)
    }, z.prototype.changeImage = function (a) {
        if (!a.error) {
            this.editorInstance.enableEditorCoverTool(!0), b.find(".image_wrapper").remove();
            var c = a.url,
                d = a.model.width,
                e = a.model.height,
                f = this.getData();
            f.setImage(c, d, e), this.renderCover(), this.editorInstance.showGuide(this.editorInstance.guideLabel.GUIDE_COVER_HEIGHT)
        }
    }, z.prototype.uploadImageError = function (a) {
        this.editorInstance.enableEditorCoverTool(!0), b.find(".image_wrapper").remove()
    }, z.prototype.startUploadImage = function () {
        this.editorInstance.enableEditorCoverTool(!1), b.append('<div class="image_wrapper"><div class="image_wrapper_overlay"></div><div class="jq_ui_progress_wrap"></div></div>')
    }, z.prototype.progressUploadImage = function (a) {
        b.find(".jq_ui_progress_wrap").progressbar({
            value: a
        })
    }, z.prototype.changeKind = function () {
        var a = this.getData(),
            b = a.getImage(),
            c = k,
            d = a.getKind();
        b && (c = d == i ? j : i), a.setKind(c), this.renderCover()
    }, z.prototype.changeAlign = function () {
        var a = this.getData().getAlign(),
            b = "center" == a ? "left" : "center";
        this.getData().setAlign(b), this.renderCover()
    }, z.prototype.deleteImage = function () {
        this.changeImage({
            url: "",
            model: {
                width: 0,
                height: 0
            }
        })
    }, z.prototype.selectTitle = function () {
        var a = g[0];
        this.editorInstance.setSelection(a, 0, null, a.childNodes.length)
    }, z.prototype.getRootElement = function () {
        return b && b.get(0)
    }, z.prototype.getLine = function (b) {
        b = a(b);
        var c = parseInt(b.css("line-height").replace(/[^0-9.]*/g, ""), 10);
        return Math.floor(b.height() / c)
    }, z.prototype.enableContenteditable = function (a) {
        b && (b.attr("contentEditable", !1), g.attr("contentEditable", a), h.attr("contentEditable", a))
    }, z.prototype.makeBackgroundColorToolbar = function () {
        a(".cover_background_color").remove();
        var b, c = '<div class="cover_background_color"> 				<div class="cover_color_selector">				</div>			</div>',
            e = a(c),
            f = "";
        f += '<div class="cover_color_arrow cover_color_arrow_prev" data-cmd="changeBackgroundSet" data-val="prev"></div>', f += '<div class="cover_color_arrow cover_color_arrow_next" data-cmd="changeBackgroundSet" data-val="next"></div>';
        for (var g = 0, h = y.length; h > g; g++) b = y[g], f += '<span class="cover_color_selector_chip" data-cmd="changeBackgroundSet" data-val="' + g + '" data-fr-verified="true"><span class="cover_color_selector_chip_color" data-fr-verified="true"></span></span>';
        e.find(".cover_color_selector").html(f);
        var i = this;
        if (d.on(this.editorInstance.mousedown, "[data-cmd=changeBackgroundSet][data-val]", function () {
                var b = a(this),
                    c = b.data("val"),
                    d = 0;
                d = "prev" == c || "next" == c ? x + ("prev" == c ? -1 : 1) : c, 0 > d ? d = y.length - 1 : d >= y.length && (d = 0), i[b.data("cmd")](d)
            }), d.append(e), this.getData().getKind() == l) {
            for (var j = -1, k = this.getData().getBackgroundColor(), g = 0, h = y.length; h > g; g++)
                if (y[g]["background-color"] == k) {
                    j = g;
                    break
                }
            this.setCurrentBackgroundColorSetIndex(j)
        }
    }, z.prototype.changeBackgroundSet = function (a) {
        var b = y[a],
            c = b["background-color"],
            e = b.color;
        this.getData().setBackgroundColor(c), this.getData().setFontBackgroundColor(e), this.setCurrentBackgroundColorSetIndex(a);
        var f = d.clone();
        f.html(""), f.addClass("animation_cover_background"), d.append(f), this.renderCover(), f.addClass("animation_change_cover_background"), setTimeout(function () {
            f.remove()
        }, 201)
    }, z.prototype.setCurrentBackgroundColorSetIndex = function (a) {
        x = a, d.find(".cover_color_selector_chip[data-cmd][data-val]").removeClass("active"), d.find(".cover_color_selector_chip[data-cmd][data-val=" + a + "]").addClass("active")
    }, z.prototype.limitTitle = function (a, b) {
        var c = (a.text(), r);
        a.hasClass("cover_sub_title") && (c = s);
        var d = this.getLine(a);
        if (d > 2) {
            if (b && b.stopPropagation(), this.lastCoverElements && (a.blur(), a.html(this.lastCoverElementHTML), this.editorInstance.setSelectionEnd(a.get(0)), this.lastCoverElementHTML = null, a.focus()), this.getLine(a) > 2) {
                a.blur();
                var e = a.get(0);
                do {
                    var f = e.lastChild;
                    if (!f) return;
                    var h = f.nodeType;
                    if (1 == h) f.parentNode.removeChild(f);
                    else {
                        if (3 != h) break;
                        var i = f.nodeValue;
                        !i || i.length < 1 ? f.parentNode.removeChild(f) : f.nodeValue = i.substring(0, i.length - 1)
                    }
                } while (this.getLine(a) > 2);
                this.editorInstance.setSelection(e.lastChild, e.lastChild.length), a.focus()
            }
        } else if (1 == d) {
            a.find("br").remove();
            var j = this.editorInstance.selectionIn(g);
            j && "" == g.text() && g.html("")
        }
    }, z.prototype.processPaste = function (b) {
        var c = a("<div></div>");
        c.html(b);
        var d = c.text();
        d = d.trim(), d = a.Editable.unionToComplete(d);
        var e = d.length,
            f = this.editorInstance.getSelectionElement(),
            g = a(f).text(),
            h = g.length,
            i = r,
            j = a.Editable.ERROR_MESSAGE[a.Editable.ERROR_CODE.OVERFLOW_TITLE_LIMIT];
        this.selectionInSubTitle() && (i = s, j = a.Editable.ERROR_MESSAGE[a.Editable.ERROR_CODE.OVERFLOW_SUB_TITLE_LIMIT]), h + e > i && this.editorInstance.log(j), d && (c.html(d), this.editorInstance.insertHTML(c.html(), !0, f)), this.editorInstance.cutText(f, i)
    }, z.prototype.checkLimitText = function () {
        this.editorInstance.cutText(g, r), this.editorInstance.cutText(h, s)
    }, z.prototype.showBttnWrapper = function (a) {
        if (this.editorInstance.selectionIn(h)) return !1;
        a.find(">[data-cmd],>[data-name]").hide();
        var b = this.getData().getKind();
        return a.find('>[data-name="fontFamily"]').show(), b == k && a.find('>[data-name="titleColor"]').show(), !0
    }, z.prototype.getFocusWrap = function () {
        return g
    }, z.prototype.selectionInSubTitle = function () {
        return this.editorInstance.selectionIn(h)
    }, z.prototype.beforeSaveUndoStep = function () {
        b && b.attr("data-app", JSON.stringify(b.data("app")))
    }, z.prototype.fixTitle = function () {
        var a = g.next();
        (0 == a.length || "br" != a.get(0).tagName.toLowerCase()) && g.after("<br>"), this.editorInstance.$element.find(".wrap_cover").addClass("cover_init")
    }, z.prototype.analysisImage = function (b) {
        if (!this.editorInstance.isReal()) {
            var c = this;
            this.canvas = document.createElement("canvas"), this.$canvas = a(this.canvas), this.canvasContext = this.canvas.getContext("2d");
            var e = new Image;
            e.crossOrigin = "Anonymous", e.onload = function () {
                var a = this,
                    b = a.naturalWidth,
                    e = a.naturalHeight;
                c.$canvas.attr("width", b), c.$canvas.attr("height", e), c.canvasContext.drawImage(a, 0, 0, b, e);
                var f, g, h = c.canvasContext.getImageData(0, 0, b, e).data,
                    i = (new Date).getTime(),
                    j = 0;
                for (f = 0, g = h.length; g > f; f += 4) {
                    var k = h[f],
                        l = h[f + 1],
                        m = h[f + 2];
                    j += k + k + k + m + l + l + l + l >> 3
                }
                j /= g / 4, be.log("result luminance > ", j), be.log("performance > ", (new Date).getTime() - i + "ms", "color arr len > " + g);
                var n = .3,
                    o = .6,
                    p = o - n;
                lum = p * (j / 255), lum += n, d.css("opacity", lum), be.log("perform luminance > ", lum)
            };
            var f = b;
            f = a.Editable.getSampleUrl(b), be.log("load URL > ", f), e.src = f
        }
    }
}(jQuery), ! function (a) {
    var b = a.Editable.ModuleClass.extend({
        init: function () {
            this._super.apply(this, arguments);
            var a = this;
            this.addCommands({
                uploadFiles: {
                    title: "íŒŒì¼",
                    icon: "be_icon be_icon_side_file",
                    undo: !1,
                    callback: function () {
                        a.insertFile()
                    },
                    tiara: "side_toolbar,attach_file"
                }
            })
        },
        initEvent: function () {
            var b = this;
            this.editorInstance.$element.on(this.editorInstance.mousedown, ".wrap_body .item_type_file, .wrap_body .item_type_file a.file", function (c) {
                c.stopPropagation(), c.preventDefault();
                var d = a(c.currentTarget);
                return d.hasClass("file") ? b.select(d) : b.select(d.find("a.file")), !1
            }), a(document.body).on("change", '.file_form_wrap input[type="file"]', function () {
                if (b.editorInstance.saveUndoStep(), b.editorInstance.browser.msie ? b.editorInstance.restoreSelectionByMarkers() : b.editorInstance.restoreSelection(), void 0 !== this.files) b.uploadFiles(this.files);
                else {
                    var c = a(this).closest("form");
                    c.find('input[type="hidden"]').remove();
                    var d;
                    for (d in b.options.fileUploadParams) c.prepend('<input type="hidden" name="' + d + '" value="' + b.options.fileUploadParams[d] + '" />');
                    c.submit()
                }
                a(this).val("")
            })
        },
        buildWrapper: function () {
            a.Editable.makeFileInputWrapper(".be_icon_side_file", a.proxy(function () {
                return this.makeFileform(this._id, a.Editable.commands.uploadFiles.title)
            }, this))
        },
        getElement: function () {
            return a(".item_type_file:has(span.inner_wrap_active)")
        },
        getElements: function () {
            return a(".wrap_item.item_type_file:not(.item_type_preview)")
        },
        select: function (b) {
            if (this._super(b), b = a.Editable.getHtmlTag(b)) {
                "A" != b.tagName && (b = a(b).find("a.file"), b.length > 0 && (b = b.get(0)));
                var c = a(this.editorInstance.getWrapItem(b)),
                    d = a(b),
                    e = d.parent();
                e.hasClass("inner_wrap_active") || d.wrap('<span data-fr-verified="true" class="inner_wrap_active"></span>'), this.editorInstance.callback("moduleSelected", [c]), this.active = !0
            }
        },
        deselect: function () {
            var b = this.getElement();
            return this.editorInstance.$element.find(".wrap_body span.inner_wrap_active > a.file").each(a.proxy(function (b, c) {
                a(c).closest(".inner_wrap_active").length > 0 && a(c).unwrap()
            }, this)), this.active = !1, b && b.get(0)
        },
        validData: function (a, b) {
            return a ? b ? a.url && -1 != a.url.indexOf("1.daumcdn.net/brunch") : "file" == a.type && a.originalName && a.url && -1 != a.url.indexOf("1.daumcdn.net/brunch") : !1
        },
        validTag: function (a) {
            return a && 0 != a.length ? 0 == a.has(".inner_wrap a.file").length ? !1 : !0 : !1
        },
        make: function (b) {
            var c = b.url,
                d = b.originalName || c,
                e = '<div class="wrap_item item_type_file">	<div class="inner_wrap">		<a class="file" href="' + c + '">' + d + "</a>	</div></div>",
                f = a(e);
            return f.find("a.file").attr("href", b.url).attr("title", d), f.attr("data-app", JSON.stringify({
                type: this.name,
                url: c,
                fileSize: b.fileSize || 0,
                originalName: d,
                contentType: b.contentType || ""
            })), f
        }
    });
    b.MODULE_NAME = "file", b.DEFAULTS = {
        allowedFileTypes: ["*"],
        fileDeleteUrl: null,
        fileDeleteParams: {},
        fileUploadParams: {
            type: "file"
        },
        fileUploadParam: "file",
        maxFileSize: 52428800,
        maxAllFileSize: 524288e3
    }, a.Editable.addModule(b), b.prototype.insertFile = function () {
        this.editorInstance.hide()
    }, b.prototype.makeFileform = function (b, c) {
        var d = '<div class="be_file_form file_form_wrap">';
        return d += '<form target="file-frame-' + b + '" enctype="multipart/form-data" encoding="multipart/form-data" action="' + this.editorInstance.getUploadURL() + '" method="post" id="f-file-form-' + b + '"><input id="f-file-upload-' + b + '" type="file" name="' + this.options.fileUploadParam + '" title="' + c + '" accept="/*" multiple></form>', this.editorInstance.browser.msie && a.Editable.getIEversion() <= 9 && (d += '<iframe id="file-frame-' + b + '" name="file-frame-' + b + '" src="javascript:false;" style="width:0; height:0; border:0px solid #FFF; position: fixed; z-index: -1;" data-loaded="true"></iframe>'), d + "</div>"
    }, b.prototype.getAttachedFileSize = function () {
        var b = 0;
        return this.editorInstance.$body.find(".item_type_file").each(function (c, d) {
            var e = a(d),
                f = e.data("app");
            if (f) {
                var g = f.fileSize;
                isNaN(g) || (b += parseInt(f.fileSize, 10))
            }
        }), b
    }, b.prototype.beforeFileUpload = function (b) {
        for (var c = "", d = this.getAttachedFileSize(), e = [], f = 0, g = b.length; g > f; f++) {
            var h = (new Date).getTime(),
                i = b[f],
                j = i.size;
            if (j > this.options.maxFileSize) this.throwFileError(a.Editable.ERROR_CODE.FILE_TOO_LARGE, null);
            else {
                if (d += j, d > this.options.maxAllFileSize) {
                    this.throwFileError(a.Editable.ERROR_CODE.FILE_TOO_LARGE_PER_ARTICLE, null);
                    break
                }
                i.id = h + "_" + f, c += '<div class="wrap_item item_type_file item_type_preview" data-file-id="' + i.id + '"><div class="inner_wrap"><div class="file_wrapper">', c += '<a class="file" href="">' + i.name + "</a>", c += '<div class="jq_ui_progress_wrap"></div></div></div></div>', e.push(i)
            }
        }
        return "" == c ? this.editorInstance.restoreSelectionByMarkers() : this.editorInstance.insertItem(this, c, !0, !0), e
    }, b.prototype.uploadFiles = function (a) {
        if (void 0 !== a && a.length > 0) {
            a = this.beforeFileUpload(a);
            for (var b = 0, c = a.length; c > b; b++) {
                a[b];
                this.uploadFile(a[b])
            }
        }
    }, b.prototype.getPreviewAnchor = function (b) {
        return a('.item_type_preview[data-file-id="' + b + '"]')
    }, b.prototype.uploadFile = function (b) {
        if (b && b.id) {
            var c, d = b.id;
            if (this.editorInstance.drag_support.formdata && (c = this.editorInstance.drag_support.formdata ? new FormData : null), c) {
                var e;
                for (e in this.options.fileUploadParams) c.append(e, this.options.fileUploadParams[e]);
                if (c.append(this.options.fileUploadParam, b), this.options.allowedFileTypes.indexOf(b.type) < 0 && this.options.allowedFileTypes.indexOf("*") < 0) return this.throwFileError(a.Editable.ERROR_CODE.FILE_INVALID_TYPE, null, d), !1
            }
            if (c) {
                var f = a.proxy(function (a) {
                        if (a.lengthComputable) {
                            var b = a.loaded / a.total * 100 | 0;
                            this.getPreviewAnchor(d).find(".jq_ui_progress_wrap").progressbar({
                                value: b
                            })
                        }
                    }, this),
                    g = b.name,
                    h = this.editorInstance.getAjax("POST", this.editorInstance.getUploadURL(), {
                        formData: c
                    }, d, f);
                h.success(a.proxy(function (b) {
                    try {
                        this.parseFileResponse(b, g, d)
                    } catch (c) {
                        this.throwFileError(a.Editable.ERROR_CODE.PARSING, null, d)
                    }
                }, this)).error(a.proxy(function (b, c) {
                    "abort" != c && this.throwFileError(a.Editable.ERROR_CODE.UPLOAD, null, d)
                }, this))
            }
        }
    }, b.prototype.throwFileError = function (b, c, d) {
        c = c || a.Editable.ERROR_MESSAGE[b], this.hideFilePreview(d), this.editorInstance.error(c)
    }, b.prototype.hideFilePreview = function (a) {
        this.getPreviewAnchor(a).remove()
    }, b.prototype.parseFileResponse = function (b, c, d) {
        try {
            b.data && b.data.url ? this.writeFile(b.data, c, d) : b.desc ? this.throwFileError(a.Editable.UNKNOWN, b.desc, d) : this.throwFileError(a.Editable.ERROR_CODE.NO_LINK, null, d)
        } catch (e) {
            this.throwFileError(a.Editable.ERROR_CODE.PARSING, null, d)
        }
    }, b.prototype.writeFile = function (a, b, c) {
        var d = a.url,
            e = a.fileSize,
            f = a.contentType,
            g = this.getPreviewAnchor(c);
        g.removeClass("item_type_preview"), g.removeAttr("data-file-id"), g.find(".jq_ui_progress_wrap").remove(), g.find(".file_wrapper>:first-Child").unwrap(), g.find("a.file").attr("href", a.url).attr("title", b), g.attr("data-app", JSON.stringify({
            type: this.name,
            url: d,
            fileSize: e,
            originalName: b,
            contentType: f
        })), this.editorInstance.callback("afterInsertModule", [g]), this.editorInstance.triggerEvent("attached", [this, a, g])
    }
}(jQuery), ! function (a) {
    var b = a.Editable.ModuleClass.extend({
        init: function () {
            this._super.apply(this, arguments);
            var a = this;
            this.addCommands({
                insertLine: {
                    title: "êµ¬ë¶„ì„ ",
                    icon: "be_icon be_icon_side_line",
                    undo: !0,
                    callback: function () {
                        a.showWrapper()
                    }
                }
            })
        },
        initEvent: function () {
            var b = this;
            this.editorInstance.$element.on(this.editorInstance.mousedown, ".wrap_body .item_type_hr", function (c) {
                c.stopPropagation(), c.preventDefault();
                var d = a(c.currentTarget);
                b.select(d.find("hr"))
            })
        },
        buildWrapper: function () {
            this.$popupWrapper = a(this.insertLineHTML()), this.editorInstance.$side_bttn_wrapper.append(this.$popupWrapper);
            var b = this;
            this.editorInstance.addListener("hidePopups", function () {
                b.hideWrapper()
            }), this.$popupWrapper.on("mouseup touchend", a.proxy(function (a) {
                this.editorInstance.isDisabled() || a.stopPropagation()
            }, this)), this.$popupWrapper.on("click", "button.button_line", function (c) {
                c.stopPropagation();
                var d = a(this);
                b[d.data("cmd")](d.data("index"))
            }), this.$popupWrapper.on("click", "*", function (a) {
                a.stopPropagation()
            }), this.$popupButton = a(".be_button[data-cmd=insertLine]")
        },
        getElement: function () {
            return a(".wrap_item.item_type_hr:has(span.inner_wrap_active)")
        },
        getElements: function () {
            return a(".wrap_item.item_type_hr")
        },
        select: function (b) {
            if (this._super(b), b = a.Editable.getHtmlTag(b), !b) return null;
            "HR" != b.tagName && (b = a(b).find("hr"), b.length > 0 && (b = b.get(0)));
            var c = a(this.editorInstance.getWrapItem(b)),
                d = a(b),
                e = d.parent();
            e.hasClass("inner_wrap_active") && "SPAN" == e.get(0).tagName || d.wrap('<span data-fr-verified="true" class="inner_wrap_active"></span>'), this.editorInstance.callback("moduleSelected", [c]), this.active = !0
        },
        deselect: function () {
            var b = this.getElement();
            return this.editorInstance.$element.find(".wrap_body span.inner_wrap_active > hr").each(a.proxy(function (b, c) {
                a(c).closest(".inner_wrap_active").length > 0 && a(c).unwrap()
            }, this)), this.active = !1, b && b.get(0)
        },
        validData: function (a, b) {
            return a ? b ? !!a.kind : "hr" == a.type && a.kind : !1
        },
        validTag: function (a) {
            return a && 0 != a.length ? 0 == a.has(".inner_wrap hr").length ? !1 : !0 : !1
        },
        make: function (a) {
            return this.makeLineElement(a.kind)
        }
    });
    b.MODULE_NAME = "line", b.DEFAULTS = {
        lineIndices: ["hr_type_1", "hr_type_2", "hr_type_4", "hr_type_3", "hr_type_6", "hr_type_5"],
        defaultLineIndex: 3
    }, a.Editable.addModule(b), b.prototype.insertLineHTML = function () {
        for (var a = '			<div class="sidebar-popup sidebar-popup-line">				<ul>', b = 0, c = this.options.lineIndices.length; c > b; b++) {
            var d = this.options.lineIndices[b];
            a += '<li><button class="button_line button_' + d + '" data-cmd="insertLine" data-index="' + d + '">êµ¬ë¶„ì„  ' + d + "</button></li>"
        }
        return a += "				</ul>			</div>"
    }, b.prototype.makeDefaultLineElement = function () {
        return this.makeLineElement(this.options.lineIndices[this.options.defaultLineIndex])
    }, b.prototype.makeLineElement = function (b) {
        var c = a('<div class="wrap_item item_type_hr ' + b + '"><div class="inner_wrap"><hr/></div></div>'),
            d = {
                type: "hr",
                kind: b
            };
        return c.attr("data-app", JSON.stringify(d)), c
    }, b.prototype.insertLine = function (a) {
        var b = this.makeLineElement(a);
        this.editorInstance.insertItem(this, b, !0)
    }
}(jQuery), ! function (a) {
    var b = a.Editable.ModuleClass.extend({
        init: function () {
            this._super.apply(this, arguments);
            var a = this;
            this.addCommands({
                changeAlign: {
                    title: "ì •ë ¬",
                    icon: "be_icon",
                    undo: !1,
                    callback: function () {
                        a.changeAlign()
                    }
                }
            })
        },
        initModule: function () {
            var a = this.editorInstance.$body;
            a.data("app") || a.data("app", {}), this.setAlign(this.getAlign().align)
        },
        validate: function () {
            return !0
        }
    });
    b.MODULE_NAME = "align", b.DEFAULTS = {
        alignState: ["text_align_left", "text_align_center", "text_align_justify"],
        alignButtons: {
            text_align_left: "be_icon_side_align_left",
            text_align_center: "be_icon_side_align_center",
            text_align_justify: "be_icon_side_align_justify"
        }
    }, a.Editable.addModule(b), b.prototype.getAlign = function () {
        var a = (this.editorInstance.$body, this.editorInstance.$body.attr("class"));
        for (var b in this.options.alignState) {
            var c = this.options.alignState[b];
            if (-1 != a.indexOf(c)) return {
                index: b,
                align: c
            }
        }
        return {
            index: 0,
            align: this.options.alignState[0]
        }
    }, b.prototype.setAlign = function (a) {
        var b = this.editorInstance.$body;
        b.data("app") || b.data("app", {}), b.data("app").align = a;
        this.editorInstance.$body.removeClass(this.options.alignState.join(" ")).addClass(a), this.editorInstance.$side_bttn_wrapper.find("[data-cmd=changeAlign]").children(0).removeClass("be_icon_side_align_left be_icon_side_align_center be_icon_side_align_justify").addClass(this.options.alignButtons[a])
    }, b.prototype.changeAlign = function () {
        var a = this.getAlign().index;
        a++, a >= this.options.alignState.length && (a = 0);
        var b = this.options.alignState[a];
        this.setAlign(b)
    }
}(jQuery), ! function (a) {
    var b = a.Editable.ModuleClass.extend({
        init: function () {
            this._super.apply(this, arguments), this.userId = this.editorInstance.getUserId();
            var a = this;
            this.addCommands({
                insertSticker: {
                    title: "ìŠ¤í‹°ì»¤",
                    icon: "be_icon be_icon_side_sticker",
                    undo: !1,
                    callback: function () {
                        a.showWrapper()
                    }
                }
            })
        },
        initEvent: function () {
            var b = this;
            this.editorInstance.$element.on(this.editorInstance.mousedown, ".wrap_body .item_type_sticker, .wrap_body .item_type_sticker img", function (c) {
                c.stopPropagation(), c.preventDefault();
                var d = a(c.currentTarget);
                "IMG" != d.get(0).tagName && (d = d.find("img")), b.select(d)
            })
        },
        buildWrapper: function () {
            this.$popupWrapper = a(this.insertWrapperHTML()), this.$sticker_list_wrapper = this.$popupWrapper.find(".sidebar-popup-content"), this.editorInstance.$side_bttn_wrapper.append(this.$popupWrapper);
            var b = this;
            this.editorInstance.addListener("hidePopups", function () {
                b.hideWrapper()
            }), this.$popupWrapper.on("mouseup touchend", a.proxy(function (a) {
                this.editorInstance.isDisabled() || a.stopPropagation()
            }, this)), this.$popupWrapper.on(this.editorInstance.mouseup, "button.button-tab-sticker", function (c) {
                c.stopPropagation();
                var d = a(this);
                b[d.data("cmd")](d.data("group"))
            }), this.$popupWrapper.on("click", "button.button-sticker", function (c) {
                c.stopPropagation();
                var d = a(this);
                b[d.data("cmd")](d.data("url"))
            }), this.$popupWrapper.on("click", "*", function (a) {
                a.stopPropagation()
            });
            var c = this.options.defaultGroup;
            this.getRecentData().length > 0 && (c = this.options.recentGroup), this.selectGroup(c), this.$popupButton = a(".be_button[data-cmd=insertSticker]")
        },
        getElement: function () {
            return a(".wrap_item.item_type_sticker:has(span.inner_wrap_active)")
        },
        getElements: function () {
            return a(".wrap_item.item_type_sticker")
        },
        select: function (b) {
            if (this._super(b), b = a.Editable.getHtmlTag(b)) {
                "IMG" != b.tagName && (b = a(b).find("img"), b.length > 0 && (b = b.get(0)));
                var c = a(this.editorInstance.getWrapItem(b)),
                    d = a(b),
                    e = d.parent();
                e.hasClass("inner_wrap_active") && "SPAN" == e.get(0).tagName || d.wrap('<span data-fr-verified="true" class="inner_wrap_active"></span>'), this.editorInstance.callback("moduleSelected", [c]), this.active = !0
            }
        },
        deselect: function () {
            var b = this.getElement();
            return this.editorInstance.$element.find(".wrap_body span.inner_wrap_active > img").each(a.proxy(function (b, c) {
                a(c).closest(".inner_wrap_active").length > 0 && a(c).unwrap()
            }, this)), this.active = !1, b && b.get(0)
        },
        validData: function (a, b) {
            return a ? b ? a.url && -1 != a.url.indexOf("1.daumcdn.net/brunch") : "sticker" == a.type && a.url && -1 != a.url.indexOf("1.daumcdn.net/brunch") : !1
        },
        validTag: function (a) {
            return a && 0 != a.length ? 0 == a.has(".inner_wrap img.sticker").length ? !1 : !0 : !1
        },
        make: function (a) {
            return this.makeStickerElement(a.url)
        }
    });
    b.MODULE_NAME = "sticker", b.DEFAULTS = {
        defaultGroup: "apeach",
        recentGroup: "recent_sticker",
        recentStickers: [],
        recentStickerLimitCount: 50,
        stickerPrefix: "//t1.daumcdn.net/brunch/static/img/sticker/",
        groups: [{
            name: "apeach",
            sub: [{
                name: "muzi",
                len: 32
            }, {
                name: "apeach",
                len: 24
            }]
        }, {
            name: "frodo",
            sub: [{
                name: "frodo",
                len: 23
            }, {
                name: "neo",
                len: 24
            }]
        }, {
            name: "jay-g",
            sub: [{
                name: "jay-g",
                len: 24
            }, {
                name: "tube",
                len: 24
            }]
        }, {
            name: "frodo_neo",
            sub: [{
                name: "frodo_neo",
                len: 9
            }]
        }]
    }, a.Editable.addModule(b), b.prototype.insertWrapperHTML = function () {
        var a = '			<div class="sidebar-popup sidebar-popup-sticker">				<div class="sidebar-popup-tab">';
        this.options.stickerPrefix;
        a += '<button class="fr-bttn button-tab-sticker button-tab-sticker-recent" data-cmd="selectGroup" data-group="' + this.options.recentGroup + '"></button>';
        for (var b = this.options.groups, c = 0, d = b.length; d > c; c++) a += '<button class="button-tab-sticker button-tab-sticker-' + b[c].name + '" data-cmd="selectGroup" data-group="' + b[c].name + '"></button>';
        return a += '				</div>				<div class="sidebar-popup-content"></div>			</div>'
    }, b.prototype.selectGroup = function (a) {
        this.$popupWrapper.find(".button-tab-sticker").removeClass("active"), this.$popupWrapper.find(".button-tab-sticker[data-group=" + a + "]").addClass("active");
        var b = this.$popupWrapper.find(".button-sticker-wrap[data-group=" + a + "]");
        0 == b.length && this.$sticker_list_wrapper.append(this.makeStickerList(a)), this.$sticker_list_wrapper.find(".button-sticker-wrap").hide(), this.$sticker_list_wrapper.find(".button-sticker-wrap[data-group=" + a + "]").show()
    }, b.prototype.getThumbnailUrl = function (a) {
        return a = 0 == a.indexOf("//") ? "http:" + a : a, "//i1.daumcdn.net/thumb/R50x50/?fname=" + encodeURIComponent(a)
    }, b.prototype.makeStickerHTML = function (a) {
        var b = "";
        return b += '<li><button class="button-sticker" data-cmd="insertSticker" data-url="' + a + '" style="background-image: url(' + this.getThumbnailUrl(a) + ')">', b += "</button></li>"
    }, b.prototype.makeStickerList = function (b) {
        var c = '<ul class="button-sticker-wrap" data-group="' + b + '">';
        if (this.options.recentGroup != b)
            for (var d = this.options.stickerPrefix, e = this.options.groups, f = 0, g = e.length; g > f; f++) {
                var h = e[f];
                if (h.name == b)
                    for (var i = h.sub, j = 0, k = i.length; k > j; j++)
                        for (var l = i[j], m = l.name, n = 0, o = l.len; o > n; n++) {
                            var p = d + m + "/" + (n + 1) + ".png";
                            c += this.makeStickerHTML(p)
                        }
            }
        c += "</ul>";
        var q = a(c).data("group", b);
        return this.options.recentGroup == b && this.renderRecentSticker(q), q
    }, b.prototype.renderRecentSticker = function (b) {
        var c = this.getRecentData(),
            d = "",
            e = "";
        if (0 == c.length) d = '<li class="recent_empty"><img src="//t1.daumcdn.net/brunch/static/img/help/pc/img_logo_empty.png" alt="brunch"><span class="sticker_message">ìµœê·¼ì— ì‚¬ìš©í•œ ìŠ¤í‹°ì»¤ê°€ ì—†ìŠµë‹ˆë‹¤</span></li>';
        else
            for (var f = 0, g = c.length; g > f; f++) e = c[f], d += this.makeStickerHTML(e);
        b = b || this.$sticker_list_wrapper.find(".button-sticker-wrap[data-group=" + this.options.recentGroup + "]"), b.empty().append(a(d))
    }, b.prototype.makeStickerElement = function (b) {
        var c = '<img class="sticker" src="' + b + '"/>',
            d = a('<div class="wrap_item item_type_sticker"><div class="inner_wrap">' + c + "</div></div>"),
            e = {
                type: this.name,
                url: b
            };
        return d.attr("data-app", JSON.stringify(e)), d
    }, b.prototype.insertSticker = function (a) {
        var b = this.makeStickerElement(a);
        this.editorInstance.insertItem(this, b, !0), this.addRecentSticker(a)
    }, b.prototype.addRecentSticker = function (a) {
        var b = this.options.recentStickers,
            c = this.options.recentStickerLimitCount,
            d = b.indexOf(a); - 1 != d && b.splice(d, 1), b.splice(0, 0, a), b.length > c && b.splice(c, b.length - c), this.setRecentData(), this.renderRecentSticker()
    }, b.prototype.getRecentUserId = function () {
        return this.options.recentGroup + "_" + this.userId
    }, b.prototype.getRecentData = function () {
        if (0 == this.options.recentStickers.length) {
            var b = localStorage.getItem(this.getRecentUserId());
            this.options.recentStickers = b ? a.parseJSON(b) : []
        }
        return this.options.recentStickers
    }, b.prototype.setRecentData = function () {
        localStorage.setItem(this.getRecentUserId(), JSON.stringify(this.getRecentData()))
    }
}(jQuery), ! function (a) {
    var b = a.Editable.ModuleClass.extend({
        init: function () {
            this._super.apply(this, arguments);
            var a = this;
            this.addCommands({
                insertPlace: {
                    title: "ìž¥ì†Œ",
                    icon: "be_icon be_icon_side_place",
                    undo: !1,
                    callback: function () {
                        a.showWrapper()
                    }
                }
            })
        },
        initEvent: function () {
            var b = this;
            this.editorInstance.$element.on(this.editorInstance.mousedown, ".wrap_body .item_type_place, .wrap_body .item_type_place a.place", function (c) {
                c.stopPropagation(), c.preventDefault();
                var d = a(c.currentTarget);
                return d.hasClass("place") ? b.select(d) : b.select(d.find("a.place")), !1
            })
        },
        buildWrapper: function () {
            this.$popupWrapper = a(this.insertPlaceHTML()), this.editorInstance.$side_bttn_wrapper.append(this.$popupWrapper);
            var b = this;
            this.editorInstance.addListener("hidePopups", function () {
                b.hideWrapper()
            }), this.$popupWrapper.on("mouseup touchend", a.proxy(function (a) {
                this.editorInstance.isDisabled() || (a.stopPropagation(), a.preventDefault())
            }, this)), this.$popupWrapper.on("click", ".result_place, .result_more, .be_icon_place_del_btn", function (c) {
                c.stopPropagation(), c.preventDefault();
                var d = a(this);
                if (d.hasClass("result_place")) b[d.data("cmd")](d.data("place"));
                else if (d.hasClass("result_more")) {
                    var e = b.$place_input.val();
                    b[d.data("cmd")](e, d.data("page"))
                } else d.hasClass("be_icon_place_del_btn") && b[d.data("cmd")]()
            }), this.$popupWrapper.on("keydown", ".place_input", function (b) {
                b.stopPropagation(), a.Editable.getKey(b).isEnterKey() && b.preventDefault()
            }), this.$popupWrapper.on("keyup", ".place_input", function (a) {
                a.stopPropagation();
                var c = b.$place_input.val();
                "" == c ? b.$delete_bttn.hide() : b.$delete_bttn.show(), c != b.query && (b.searchTimer && (clearTimeout(b.searchTimer), b.searchTimer = null), b.query = c, b.searchTimer = setTimeout(function () {
                    b.searchPlace(c)
                }, 300))
            }), this.$place_input = this.$popupWrapper.find(".place_input"), this.$place_list = this.$popupWrapper.find(".place_list"), this.$place_empty = this.$popupWrapper.find(".place_empty"), this.$place_help = this.$popupWrapper.find(".place_help"), this.$delete_bttn = this.$popupWrapper.find(".be_icon_place_del_btn"), this.$delete_bttn.hide(), this.setPlaceList(this.options.status.reset), this.$popupButton = a(".be_button[data-cmd=insertPlace]")
        },
        showWrapper: function () {
            this._super(), this.wrapperActive && (this.deleteQuery(), this.$popupWrapper.find("input").focus())
        },
        hideWrapper: function () {
            this.$popupWrapper && this.wrapperActive && (this.$popupWrapper.find("input").blur(), this.editorInstance.focus()), this._super()
        },
        getElement: function () {
            return a(".wrap_item.item_type_place:has(span.inner_wrap_active)")
        },
        getElements: function () {
            return a(".wrap_item.item_type_place")
        },
        select: function (b) {
            if (this._super(b), b = a.Editable.getHtmlTag(b)) {
                "A" != b.tagName && (b = a(b).find("a.place"), b.length > 0 && (b = b.get(0)));
                var c = a(this.editorInstance.getWrapItem(b)),
                    d = a(b),
                    e = d.parent();
                e.hasClass("inner_wrap_active") || d.wrap('<span data-fr-verified="true" class="inner_wrap_active"></span>'), this.editorInstance.callback("moduleSelected", [c]), this.active = !0
            }
        },
        deselect: function () {
            var b = this.getElement();
            return this.editorInstance.$element.find(".wrap_body span.inner_wrap_active > .place").each(a.proxy(function (b, c) {
                    a(c).closest(".inner_wrap_active").length > 0 && a(c).unwrap()
                }, this)), this.active = !1,
                b && b.get(0)
        },
        validData: function (a, b) {
            return a ? b ? a.pointX && a.pointY && a.pointWX && a.pointWY && a.placeName && a.address && a.docid : "place" == a.type && this.validData(a, !0) : !1
        },
        validTag: function (a) {
            return a && 0 != a.length ? 0 == a.has(".inner_wrap a.place .place_name").length ? !1 : 0 == a.has(".inner_wrap a.place .address").length ? !1 : !0 : !1
        },
        make: function (b) {
            var c = "http://map.daum.net/?ct=wcong&x=" + b.pointWX + "&y=" + b.pointWY + "&SHOWMARK=true&itemId=" + b.docid,
                d = '<a href="' + c + '" class="place" target="_blank"><p class="place_name">' + b.placeName + '</p><p class="address">' + b.address + "</p></a>",
                e = a('<div class="wrap_item item_type_place"><div class="inner_wrap">' + d + "</div></div>"),
                f = {
                    type: this.name,
                    docid: b.docid,
                    placeName: b.placeName,
                    address: b.address,
                    pointWX: b.pointWX,
                    pointWY: b.pointWY,
                    pointX: b.pointX,
                    pointY: b.pointY
                };
            return e.attr("data-app", JSON.stringify(f)), e
        }
    });
    b.MODULE_NAME = "place", b.DEFAULTS = {
        countPerPage: 10,
        status: {
            reset: 1,
            list: 2,
            empty: 3
        }
    }, a.Editable.addModule(b), b.prototype.insertPlaceHTML = function () {
        var a = '			<div class="sidebar-popup sidebar-popup-place">      	<div>      		<div class="f-popup-line place_input_wrapper">      			<input type="text" spellcheck="false" class="place_input" value="" placeholder="ìž¥ì†Œ, ì£¼ì†Œë¥¼ ê²€ìƒ‰í•˜ì„¸ìš”" />      			<button class="be_icon be_icon_place_del_btn" data-cmd="deleteQuery"></button>      			<button class="be_icon be_icon_place_search"></button>      		</div>      		<div class="place_list_wrapper">      			<ul class="place_list"></ul>						<div class="place_empty"><span class="be_icon be_icon_place_pin"></span>í•´ë‹¹ ìž¥ì†Œê°€ ê²€ìƒ‰ë˜ì§€ ì•ŠìŠµë‹ˆë‹¤.</div>						<div class="place_help"><span class="be_icon be_icon_place_pin"></span>ìž¥ì†Œ ì²¨ë¶€</div>      		      		</div>				</div>			</div>';
        return a
    }, b.prototype.deleteQuery = function () {
        this.$place_input.val(""), this.searchPlace(""), this.$delete_bttn.hide()
    }, b.prototype.renderPlaceList = function (b) {
        if (b && b.placeList && 0 != b.placeList.length) {
            this.setPlaceList(this.options.status.list);
            var c = b.page,
                d = b.lastPage,
                e = b.placeList;
            if (1 == c && this.$place_list.html(""), this.$place_list.find(".result_more").remove(), e.length > 0)
                for (var f = "", g = 0, h = e.length; h > g; g++) {
                    var i = e[g],
                        j = i.placeName;
                    i.placeName = j.replace(/(<\/?b>)/gi, ""), f += '<li class="result_place" data-cmd="attachPlace" data-place="' + JSON.stringify(i).replace(/"/gi, "&quot;") + '"><div class="result_place_content">' + j, f += '<em class="result_address">' + i.address + "</em></div></li>"
                }
            d || (f += '<li class="result_more" data-cmd="searchPlace" data-page="' + (c + 1) + '">ë”ë³´ê¸°</li>')
        } else this.setPlaceList(this.options.status.empty);
        this.$place_list.append(a(f))
    }, b.prototype.setPlaceList = function (a) {
        switch (a) {
            case this.options.status.reset:
                this.$place_empty.hide(), this.$place_help.show(), this.$place_input.val(""), this.$place_list.hide();
                break;
            case this.options.status.list:
                this.$place_empty.hide(), this.$place_help.hide(), this.$place_list.show();
                break;
            case this.options.status.empty:
                this.$place_empty.show(), this.$place_help.hide(), this.$place_list.html(""), this.$place_list.hide()
        }
    }, b.prototype.searchPlace = function (b, c) {
        if (!b) return void this.setPlaceList(this.options.status.reset);
        c = c || 1;
        var d = this.editorInstance.getAjax("GET", this.editorInstance.getApiDomain() + "/place", {
            q: b,
            page: c,
            count: this.options.countPerPage
        });
        d.success(a.proxy(function (a) {
            this.renderPlaceList(a.data)
        }, this))
    }, b.prototype.attachPlace = function (a) {
        this.editorInstance.restoreSelectionByMarkers();
        var b = this.make(a);
        this.editorInstance.insertItem(this, b, !0)
    }
}(jQuery), ! function (a) {
    var b = 1,
        c = 2,
        d = 3,
        e = 500,
        f = a.Editable.ModuleClass.extend({
            init: function () {
                this._super.apply(this, arguments), this.isChanged = !1
            },
            validate: function () {
                return !0
            }
        });
    f.MODULE_NAME = "spell", f.DEFAULTS = {
        spellCheckURL: "/api/spell",
        spellLogURL: "/api/spell_log"
    }, a.Editable.addModule(f), f.prototype.makeSpellTop = function () {
        var b = this,
            c = a('<div class="spell_top">ë§žì¶¤ë²• ì˜¤ë¥˜ê°€ <span class="spell_total_count"></span>ê°œ ìžˆìŠµë‹ˆë‹¤<button class="spell_close" data-cmd="stopSpellCheck">ë§žì¶¤ë²• ê²€ì‚¬ ì¢…ë£Œ</buttonspell_close></div>').appendTo(document.body);
        return c.hide(), c.on(this.editorInstance.mouseup, "button[data-cmd]", a.proxy(function (c) {
            c.stopPropagation();
            var d = a(c.currentTarget),
                e = d.data("cmd");
            b[e].apply(b)
        }, this)), this.editorInstance.$element.on(this.editorInstance.mousedown, ".spell_underline[data-cmd][data-spell][data-spell-id]", function (c) {
            c.stopPropagation();
            var d = a(c.currentTarget),
                e = d.data("cmd"),
                f = d.data("spell-id");
            b[e].apply(b, [f])
        }), c
    }, f.prototype.makeSpellWrapper = function () {
        var b = this,
            c = a('<div class="spell_wrapper"></div>').appendTo(document.body);
        return c.hide(), c.on(this.editorInstance.mousedown, "button[data-cmd]", a.proxy(function (c) {
            c.stopPropagation();
            var d = a(c.currentTarget),
                e = d.data("cmd"),
                f = d.data("args");
            b[e].apply(b, f)
        }, this)), this.editorInstance.$element.on(this.editorInstance.mousedown, ".spell_underline[data-cmd][data-spell][data-spell-id]", function (c) {
            c.stopPropagation();
            var d = a(c.currentTarget),
                e = d.data("cmd"),
                f = d.data("spell-id");
            b[e].apply(b, [f])
        }), a(document.body).on("mouseover mouseout", ".spell_shortcut_info", function (b) {
            var c = a(".spell_shortcut");
            "mouseover" == b.originalEvent.type ? c.show() : c.hide()
        }), c
    }, f.prototype.getErrorLabel = function (a) {
        switch (a) {
            case "spell":
                return "ì² ìž ì˜¤ë¥˜";
            case "space":
                return "ë„ì–´ì“°ê¸° ì˜¤ë¥˜";
            case "space_spell":
                return "ì² ìž+ë„ì–´ì“°ê¸° ì˜¤ë¥˜";
            case "doubt":
                return "ì˜¤ë¥˜ì˜ì‹¬"
        }
        return ""
    }, f.prototype.hasError = function (a) {
        return "no_error" == a || "doubt" == a ? !1 : !0
    }, f.prototype.startSpell = function (b) {
        var d = this.getTextNodeListByTextType(),
            f = [],
            g = 0,
            h = 0;
        this.compositResultsIndices = [], this.editorInstance.enableContenteditable(!0);
        for (var i = (new Date).getTime() - this.spellStartTime, j = 0, k = b.length; k > j; j++) {
            var l = b[j].result;
            if (a.Editable.isArray(l))
                for (var m = 0, n = l.length; n > m; m++) {
                    var o = l[m],
                        p = o.input,
                        q = o.output,
                        r = o.etype,
                        s = p.length,
                        t = !0,
                        u = "",
                        v = "";
                    this.hasError(r) && (m > 1 ? (v += l[m - 2].input + " ", v += l[m - 1].input + " ") : m > 0 && (v += l[m - 1].input + " "));
                    for (var w = {
                            result: o,
                            startPoint: 0,
                            endPoint: 0,
                            textNodes: []
                        }, x = !1; t && g < d.length;) {
                        var y = d[g],
                            z = y.nodeValue,
                            A = z.length;
                        u ? u += z : u = z;
                        var B = u.indexOf(p, h);
                        if (-1 != B) {
                            t = !1, w.startPoint = B, w.endPoint = A - u.length + B + s, w.textNodes.push({
                                textNode: y,
                                len: A
                            }), u.length <= B + s && (g++, h = 0, x = !0);
                            for (var C = 0, D = 0, E = w.textNodes.length; E > D; D++) {
                                var F = w.textNodes[D].textNode;
                                if (B < C + F.length) {
                                    0 != D && (w.textNodes.splice(0, D), w.startPoint -= C);
                                    break
                                }
                                C += F.length
                            }
                        } else w.textNodes.push({
                            textNode: y,
                            len: A
                        }), g++, h = 0
                    }
                    if (x || (h = w.endPoint), this.hasError(r)) {
                        v += p, n - 3 > m ? (v += " " + l[m + 1].input, v += " " + l[m + 2].input) : n - 2 > m && (v += " " + l[m + 1].input), w.log = {}, w.log.etype = r, w.log.input = p, w.log.output = q, w.log.context = v, w.log.uaction = "unknown", w.log.uanswer = "";
                        var G = this.markSpellResultOne(w, f.length);
                        f.push(w), G && 3 == G.nodeType && (h = 0, d[g] = G)
                    }
                }
        }
        this.showResult(), this.compositResults = f, this.editorInstance.enableContenteditable(!1);
        var H = this;
        f && f.length > 0 ? e > i ? setTimeout(function () {
            H.setSpellStatus(c)
        }, e - i) : H.setSpellStatus(c) : e > i ? setTimeout(function () {
            H.noError()
        }, e - i) : H.noError(), this.compositResultsIndices && this.compositResultsIndices.length > 0 && this.focusIndex(0)
    }, f.prototype.markSpellResultOne = function (b, c) {
        b.id = c, this.compositResultsIndices[c] = c;
        var d = b.textNodes[0],
            e = b.textNodes[b.textNodes.length - 1],
            f = b.startPoint,
            g = b.endPoint;
        d.len > d.textNode.length && (f -= d.len - d.textNode.length), e.len > e.textNode.length && (g -= e.len - e.textNode.length);
        var h = e.textNode.nodeValue.length == g;
        this.editorInstance.setSelection(d.textNode, f, e.textNode, g), this.drawUnderline(b);
        var i = a("[data-cmd='focusID'][data-spell-id=" + c + "]");
        return !h && i && i.length > 0 ? i.get(i.length - 1) && i.get(i.length - 1).nextSibling : null
    }, f.prototype.focusIndex = function (a) {
        if (!this.compositResultsIndices || 0 == this.compositResultsIndices.length) return this.stopSpellCheck(), void alert("ë§žì¶¤ë²• ê²€ì‚¬ë¥¼ ì™„ë£Œí–ˆìŠµë‹ˆë‹¤.");
        this.compositResultsIndices.length <= a && (a = 0);
        var b = this.compositResultsIndices[a];
        this.stageResult(a, b)
    }, f.prototype.focusID = function (b) {
        var c = a.inArray(b, this.compositResultsIndices);
        this.stageResult(c, b)
    }, f.prototype.pass = function () {
        if (this.compositResultsIndices) {
            var b = this.getCurrentId(),
                c = a.inArray(b, this.compositResultsIndices);
            this.compositResultsIndices.length <= c + 1 ? c = 0 : c++, this.compositResults[b].log.uaction = "pass", this.focusIndex(c)
        }
    }, f.prototype.change = function (b) {
        this.isChanged = !0;
        var c = a(".spell_underline.active[data-cmd][data-spell]"),
            b = c.data("spell-id"),
            d = a.inArray(b, this.compositResultsIndices),
            e = this.$spell_wanna_word.val();
        c.each(function (b, c) {
            if (0 == b) {
                for (var d = c, f = c.firstChild; d && 3 != d.nodeType;)
                    for (d && (d = d.firstChild); d.nextSibling;) a(d.nextSibling).remove();
                3 == d.nodeType ? d.nodeValue = e : d.innerHTML = e, a(f).unwrap()
            } else jQuery(c).remove()
        }), this.compositResultsIndices.splice(d, 1);
        var f = this.compositResults[b];
        e == f.result.output ? f.log.uaction = "change1" : (f.log.uaction = "change2", f.log.uanswer = e), this.focusIndex(d)
    }, f.prototype.getCurrentId = function () {
        var b = a(".spell_underline.active[data-cmd][data-spell]"),
            c = b.data("spell-id");
        return c
    }, f.prototype.stageResult = function (b, c) {
        var d = a(".spell_underline.active[data-cmd][data-spell]");
        d.removeClass("active");
        var e = a(".spell_underline[data-cmd][data-spell][data-spell-id='" + c + "']");
        if (e.addClass("active"), e && e.length > 0) {
            var f = e.offset().top,
                g = a(window).scrollTop(),
                h = a(window).height() - this.$spell_wrapper.height();
            (g > f || f > g + h - 30) && a("html, body").animate({
                scrollTop: f - 100
            }, this.editorInstance.animationDuration);
            var i = e.data("spell") || {};
            this.$spell_current_word.text(i.input || ""), this.$spell_current_word.data("args", [c]), this.$spell_current_error_type.html(this.getErrorLabel(i.etype)), this.$spell_wanna_word.val(i.output || ""), this.$spell_current_index.html(b + 1 || 0), this.$spell_total_count.html(this.compositResultsIndices.length || 0)
        }
    }, f.prototype.noError = function () {
        this.stopSpellCheck(), this.editorInstance.log(a.Editable.ERROR_MESSAGE[a.Editable.ERROR_CODE.NOT_FOUND_ERROR])
    }, f.prototype.drawUnderline = function (b) {
        var c = this.editorInstance.browser.webkit;
        if (c) {
            var d = function (a) {
                return a.attr("style").indexOf("font-size") >= 0
            };
            this.editorInstance.$element.find("span").each(function (b, c) {
                var e = a(c);
                e.attr("style") && d(e) && (e.data("font-size", e.css("font-size")), e.css("font-size", ""))
            })
        }
        document.execCommand("fontSize", !1, 4), c && this.editorInstance.$element.find("span").each(function (b, c) {
            var d = a(c);
            d.data("font-size") && (d.css("font-size", d.data("font-size")), d.removeData("font-size"))
        });
        var e = function (b, c) {
                var d = a(c);
                "" === d.attr("style") && d.replaceWith(d.html())
            },
            f = JSON.stringify(b.result).replace(/"/gi, "&quot;");
        this.editorInstance.$element.find("font").each(function (c, d) {
            var g = a('<span data-fr-verified="true" class="spell_underline" data-cmd="focusID" data-spell="' + f + '" data-spell-id="' + b.id + '">' + a(d).html() + "</span>");
            a(d).replaceWith(g), g.find("span").each(e)
        })
    }, f.prototype.showResult = function () {
        var b = '<div class="spell_result"><p class="spell_current_word_wrapper"><button class="spell_current_word spell_underline" data-cmd="focusID" data-spell-id=""></button><span class="spell_error_type"></span></p><input  class="spell_wanna_word" type="text" value=""><p class="spell_result_detail"><span>ë§žì¶¤ë²• ê²€ì‚¬</span><span class="spell_current_index"></span><span>/</span><span class="spell_total_count"></span></p><button class="spell_check_next" data-cmd="pass">ë„˜ê¸°ê¸°</button><button class="spell_check_change" data-cmd="change">ìˆ˜ì •</button><span class="spell_shortcut_info"></span><div class="spell_shortcut">tab - ë„˜ê¸°ê¸°, enter - ì ìš©, esc - ì¢…ë£Œ</div></div>';
        this.$spell_result = a(b), this.$spell_wrapper.append(this.$spell_result), this.$spell_current_word = a(".spell_current_word"), this.$spell_current_error_type = a(".spell_error_type"), this.$spell_wanna_word = a(".spell_wanna_word"), this.$spell_current_index = a(".spell_current_index"), this.$spell_total_count = a(".spell_total_count")
    }, f.prototype.getTextNodeListByTextType = function () {
        var b = [],
            c = a(".cover_title, .cover_sub_title, .item_type_text, .item_type_bullet");
        if (c.length > 0)
            for (var d = 0, e = c.length; e > d; d++) {
                var f = c.get(d);
                this.getTextNodeList(f, b)
            }
        return b
    }, f.prototype.getTextNodeList = function (a, b) {
        var c = a.nodeType;
        if (1 == c)
            for (var d = a.childNodes, e = 0, f = d.length; f > e; e++) this.getTextNodeList(d[e], b);
        else 3 == c && b.push(a)
    }, f.prototype.startSpellCheck = function () {
        var c = "";
        if (this.editorInstance.$element.find(".cover_title, .cover_sub_title, .item_type_text, .item_type_bullet").each(function (b, d) {
                c += "\n";
                var e = a(d.cloneNode(!0));
                e.find("br").replaceWith("\n"), c += e.text()
            }), "" == a.trim(c) || c.length < 2) return void this.editorInstance.log(a.Editable.ERROR_MESSAGE[a.Editable.ERROR_CODE.NO_CHECK_SPELL]);
        this.editorInstance.saveUndoStep(), this.spellStartTime = (new Date).getTime(), this.active = !0, this.editorInstance.setDisabled(!0), this.editorInstance.$element.css("margin-bottom", "220px"), this.editorInstance.enableContenteditable(!1), this.editorInstance.enableEditorTool(!1), this.keyEvent = a.proxy(function (a) {
            return this.keyFunction(a)
        }, this), a(window).on("keydown", this.keyEvent), this.$spell_wrapper || (this.$spell_wrapper = this.makeSpellWrapper(), this.$spell_top = this.makeSpellTop()), this.setSpellStatus(b);
        var d = this,
            e = this.editorInstance.getAjax("POST", this.options.spellCheckURL, {
                q: c,
                from: "brunch"
            });
        e.error(function (a) {
            d.stopSpellCheck(!0)
        }).success(function (a) {
            if (a && a.sentences && a.sentences.length > 0) try {
                d.startSpell(a.sentences)
            } catch (b) {
                console.error(b), d.editorInstance.error("ë§žì¶¤ë²• ê²€ì‚¬ ì¤‘ ì—ëŸ¬ê°€ ë°œìƒí•˜ì˜€ìŠµë‹ˆë‹¤."), d.stopSpellCheck(!0)
            } else d.startSpell([])
        })
    }, f.prototype.destroy = function () {
        this.compositResults = [], this.compositResultsIndices = [], a(window).off("keydown", this.keyEvent), a(".spell_underline[data-cmd][data-spell][data-spell-id]").each(function (b, c) {
            a(c.firstChild).unwrap()
        }), this.editorInstance.clearSelection(), this.setSpellStatus(c), this.setSpellStatus(d), this.editorInstance.$element.css("margin-bottom", ""), this.editorInstance.setDisabled(!1), this.editorInstance.enableContenteditable(!0), this.editorInstance.enableEditorTool(!0);
        var b = this.editorInstance.getModule("cover");
        b && b.checkLimitText(), this.isChanged && (this.editorInstance.saveUndoStep(), this.isChanged = !1)
    }, f.prototype.stopSpellCheck = function (a) {
        try {
            !a && this.log()
        } catch (b) {}
        this.active = !1, this.destroy()
    }, f.prototype.setSpellStatus = function (e) {
        e == b ? (this.editorInstance.showProgressCode(a.Editable.ERROR_CODE.CHECKING_SPELL), this.progressTimer = setInterval(function () {
            NProgress.inc()
        }, 200), this.$spell_wrapper.show(), this.$spell_top.show()) : e == c ? this.status == b && (clearInterval(this.progressTimer), this.progressTimer = null, this.editorInstance.hideProgress(), this.editorInstance.enableContenteditable(!1)) : e == d && (this.$spell_wrapper.hide(), this.$spell_top.hide(), this.$spell_result && this.$spell_result.remove()), this.status = e
    }, f.prototype.getSpellStatus = function () {
        return this.status
    }, f.prototype.keyFunction = function (c) {
        if (this.status == b) return c.stopPropagation(), c.preventDefault(), !1;
        var d = !0,
            e = a.Editable.getKey(c);
        if (e.isEnterKey()) {
            var f = this.getCurrentId();
            this.change(f), d = !1
        } else e.isTabKey() ? (this.pass(), d = !1) : e.isEscKey() && (this.stopSpellCheck(!0), d = !1);
        return d ? void 0 : (c.stopPropagation(), c.preventDefault(), d)
    }, f.prototype.log = function () {
        if (this.compositResults && this.compositResults.length > 0) {
            for (var a = this.compositResults, b = [], c = 0, d = a.length; d > c; c++) {
                var e = a[c].log;
                b.push(e)
            }
            be.log("spell log query > ", b);
            var f = JSON.stringify(b),
                g = this.editorInstance.getAjax("POST", this.options.spellLogURL, {
                    service: "brunch",
                    query: f
                });
            g.error(function (a) {}).success(function (a) {
                be.log("log success > ", a)
            })
        }
    }
}(jQuery), ! function (a) {
    var b = null,
        c = {
            wrapItem: "wrap_item",
            gridGalleryItem: "wrap_item item_type_gridGallery",
            wrapOuter: "wrap_outer",
            lineMarkers: "dnd_droppable_top dnd_droppable_bottom dnd_droppable_left dnd_droppable_right"
        },
        d = 1,
        e = null,
        f = [],
        g = [],
        h = [],
        i = [],
        j = a.Editable.ModuleClass.extend({
            init: function () {
                this._super.apply(this, arguments);
                var b = this;
                this.addCommands({
                    insertGridGallery: {
                        title: "ê·¸ë£¹ ì´ë¯¸ì§€",
                        icon: "be_icon be_icon_side_grid",
                        callback: function () {
                            b.insertGridGallery()
                        },
                        tiara: "side_toolbar,attach_groupimg"
                    }
                }), this.editorInstance.addUseImageUploadButton(".be_icon_side_grid", a.Editable.commands.insertGridGallery.title)
            },
            initModule: function () {
                this._super(), b = this.editorInstance.getModule("image"), window.grid = this, this.initImageSelect(), this.setAppDataInfo(), this.initImagePopup()
            },
            getElement: function () {
                return a(".wrap_item.item_type_gridGallery:has(span.f-img-editor)")
            },
            getElements: function () {
                return a(".wrap_item.item_type_gridGallery")
            },
            itemSelect: function (b) {
                if ("IMG" != b.target.tagName) {
                    var c = a(b.currentTarget);
                    this.clickSelect({
                        currentTarget: a("img:first", c),
                        immediately: !0
                    })
                }
            },
            select: function (b, c) {
                var d = {
                    currentTarget: null,
                    immediately: !0
                };
                "IMG" == b.tagName ? d.currentTarget = b : c ? c == a(b).next()[0] ? d.currentTarget = a("img:last", b)[0] : c == a(b).prev()[0] && (d.currentTarget = a("img:first", b)[0]) : a(b).get(0) && (d.currentTarget = a("img:first", b)), d.currentTarget && this.clickSelect(d)
            },
            _razySelect: function (b) {
                var c = {
                    currentTarget: null,
                    immediately: !1
                };
                "IMG" == b.tagName ? c.currentTarget = b : a(b).get(0) && (c.currentTarget = a("img:last", b)), c.currentTarget && this.clickSelect(c)
            },
            deselect: function () {
                this.toolbarTimer && (clearTimeout(this.toolbarTimer), this.toolbarTimer = null), this.$image_editor && this.$image_editor.hide();
                var b = jQuery(".f-img-editor").parents(".item_type_gridGallery");
                return this.editorInstance.$element.find(".wrap_body span.f-img-editor > img").each(a.proxy(function (b, c) {
                    a(c).parents(".f-img-editor").length > 0 && a(c).unwrap()
                }, this)), this.active = !1, b && b.get(0)
            },
            deleteItem: function () {
                var b = a(".item_type_gridGallery .wrap_img_float:has(span.f-img-editor)"),
                    c = this.editorInstance.getWrapItem(b[0]);
                return this.editorInstance.callback("beforeDeleteModule", [b.get(0), !0, !0], !1) ? (this.updateColumn(c, !0), this.editorInstance.saveUndoStep(), !0) : !1
            },
            validData: function (a, b) {
                return a ? !0 : !1
            },
            validTag: function (a) {
                return a && 0 != a.length ? !0 : !1
            }
        });
    j.MODULE_NAME = "gridGallery", j.DEFAULTS = {
        imageButtons: ["editGridImage"]
    }, j.IMAGE_COMMANDS = {
        editGridImage: {
            title: "ì´ë¯¸ì§€ íŽ¸ì§‘",
            icon: {
                value: "be_icon be_icon_image_edit"
            }
        }
    }, a.Editable.addModule(j), j.prototype.insertGridGallery = function (c) {
        h = [];
        var d = b.getUploadInterface(this.name);
        d.setOnStartCallback(a.proxy(this.startUploadImage, this)), d.setOnErrorCallback(a.proxy(this.errorUploadImage, this)), d.setOnProgressCallback(a.proxy(this.progressUploadImage, this)), d.setOnFinishCallback(a.proxy(this.insertImage, this))
    }, j.prototype.startUploadImage = function (a, b) {
        b > 1 && (a.url = "https://t1.daumcdn.net/brunch/static/img/help/pc/img_dummy_gridgallery.png", f.push(a), f.length == b && this.makeLocalGridArrayData(f, b))
    }, j.prototype.makeLocalGridArrayData = function (a, b) {
        if (g = [], a.length > 1) {
            for (var c = 3; a.length > 1;) {
                var d = a.length;
                (d >= c && d % c == 0 || d / c > 1 && d % c > 1 || d / c > 2) && this.insertLocalGridDataArray(a, c), c = 3 == c ? 2 : 3
            }
            this.makeLocalFileGridGallery()
        }
    }, j.prototype.insertLocalGridDataArray = function (a, b) {
        g.push({
            files: [],
            images: []
        });
        for (var c = g[g.length - 1].files, d = 0; b > d; d++) {
            var e = a[0];
            delete e.type, c.push(e), a.shift()
        }
    }, j.prototype.progressUploadImage = function (a, b) {
        "string" == typeof b && (b = this.getPreviewAnchor(b)), b.find(".jq_ui_progress_wrap").progressbar({
            value: a
        })
    }, j.prototype.errorUploadImage = function () {}, j.prototype.getPreviewAnchor = function (b) {
        return a('.item_type_preview[data-file-id="' + b + '"]')
    }, j.prototype.setPreviewGridLocalImage = function () {
        for (var a = 0, b = g.length; b > a; a++)
            for (var c = g[a], d = 0, e = c.files.length; e > d; d++) {
                var f = g[a].files[d];
                f.imagesArrayIndex = a
            }
    }, j.prototype.previewLocalImage = function (b, c) {
        var d = ((new Date).getTime(), 1),
            e = {};
        loadImage.parseMetaData(b, a.proxy(function (f) {
            f.exif && (d = f.exif.get("Orientation")), void 0 == d && (d = 1), e = 1 == d ? loadImage(b, a.proxy(function (d) {
                if ("error" != d.type) {
                    var e = a(d),
                        f = d.naturalWidth,
                        h = d.naturalHeight;
                    e.removeAttr("width"), e.removeAttr("height");
                    var i = {
                        contentType: b.type,
                        fileSize: b.size,
                        model: {
                            width: f,
                            height: h
                        },
                        originalName: b.name,
                        url: "",
                        image: d,
                        id: b.id
                    };
                    g[b.imagesArrayIndex].images.push(i), c && this.makeLocalFileGridGallery(g)
                }
            }, this)) : loadImage(b, a.proxy(function (d) {
                if ("error" != d.type) {
                    var e = new Image;
                    e.src = d.toDataURL();
                    var f = (a(e), e.naturalWidth),
                        h = e.naturalHeight,
                        i = {
                            contentType: b.type,
                            fileSize: b.size,
                            model: {
                                width: f,
                                height: h
                            },
                            originalName: b.name,
                            url: "",
                            image: e,
                            id: b.id
                        };
                    g[b.imagesArrayIndex].images.push(i), c && this.makeLocalFileGridGallery(g)
                }
            }, this), {
                orientation: d,
                maxWidth: 940
            }), e.onerror = a.proxy(function () {}, this)
        }, this))
    }, j.prototype.makeLocalFileGridGallery = function () {
        for (var b = document.createDocumentFragment(), c = 0, e = g.length; e > c; c++) {
            var f = g[c].files;
            g[c].column = f.length, g[c].id = d++;
            for (var h = 0, i = 0, j = f.length; j > i; i++) h += 1;
            for (var i = 0, j = f.length; j > i; i++) f[i].widthRatio = 1 / h * 100 + "%";
            var k = this.generateTemplate(g[c], !0);
            b.appendChild(k.get(0))
        }
        var l = this.editorInstance.getCurrentElement().get(0),
            m = l.nextSibling,
            n = !1;
        if (!m) {
            var o = this.editorInstance.makeTextWrap();
            a(l).after(o), this.editorInstance.addFontFamily(o), m = o.get(0)
        }
        a(m).hasClass("item_type_text") || (n = !0), this.editorInstance.insertItem(this, b);
        m.previousSibling;
        n || this.editorInstance.setSelection(m);
        var p = this;
        window.setTimeout(function () {
            a(".wrap_outer.column_update").each(function (b, c) {
                a(c).removeClass("column_update").addClass("column" + g[b].column), p.readyDropData(a("img:first", c))
            })
        }, 100)
    }, j.prototype.insertImage = function (a, c, d) {
        if (a && !a.error) {
            var e = b.getImageAppData(a);
            e.uploadData = a, h.push(e)
        } else a.uploadData = a, h.push(null);
        d == c + 1 && this.makeGridDataArray()
    }, j.prototype.makeGridDataArray = function () {
        if (1 == h.length) this.editorInstance.insertItem(this, b.make(h[0]));
        else {
            for (var c = 0, d = h.length; d > c; c++)
                if (null != h[c] && null != h[c].uploadData) {
                    var e = h[c].uploadData,
                        f = a(".item_type_gridGallery.dummyGridGalleryItem .item_type_preview[data-file-id=" + e.id + "]").find("img"),
                        g = f.data("edit-id");
                    e.editID = g
                }
            for (var j = [], c = 0, d = h.length; d > c; c++) {
                var k = h[c];
                k && !k.error && j.push(k)
            }
            j.sort(function (a, b) {
                if (a.uploadData && b.uploadData && a.uploadData.editID && b.uploadData.editID) {
                    var c = parseInt(a.uploadData.editID, 10),
                        d = parseInt(b.uploadData.editID, 10);
                    return isNaN(c) || isNaN(d) ? 0 : c > d
                }
                return 0
            }), h = j;
            var l = 3;
            for (i = []; h.length > 1;) {
                var m = h.length;
                (m >= l && m % l == 0 || m / l > 1 && m % l > 1 || m / l > 2) && this.insertGridDataArray(l), l = 3 == l ? 2 : 3
            }
            this.makeGridGallery()
        }
    }, j.prototype.insertGridDataArray = function (a) {
        i.push({
            images: []
        });
        for (var b = i[i.length - 1].images, c = 0; a > c; c++) {
            var d = h[0];
            delete d.type, b.push(d), h.shift()
        }
    }, j.prototype.makeGridGallery = function () {
        var c = null;
        if (b.isEditProgress())
            for (var d = 0, e = i.length; e > d; d++)
                for (var f = i[d].images, h = 0, j = f.length; j > h; h++) b.finishUploadBefore(f[h].uploadData, !0);
        for (var d = 0, e = i.length; e > d; d++) {
            var f = i[d].images;
            i[d].column = f.length, i[d].id = d;
            for (var k = 0, h = 0, j = f.length; j > h; h++) k += f[h].width / f[h].height;
            for (var h = 0, j = f.length; j > h; h++) f[h].widthRatio = f[h].width / f[h].height / k * 100 + "%";
            var l = this.generateTemplate(i[d]),
                m = a("#gridItem_" + g[d].id);
            if (b.isEditProgress())
                for (var n = l.find("img"), o = 0, p = n.length; p > o; o++) {
                    var q = f[o].uploadData.editID;
                    if (null != q) {
                        var r = a(n[o]);
                        r.data("edit-id", q), r.attr("data-edit-id", q)
                    }
                }
            c = a(l.get(0)), m.replaceWith(a(l.get(0))), l.css({
                width: m.css("width"),
                "margin-left": m.css("margin-left")
            }), a(".wrap_outer.column_update", l).removeClass("column_update").addClass("column" + i[d].column)
        }
        a(".item_type_gridGallery.dummyGridGalleryItem").remove();
        var s = this;
        window.setTimeout(function () {
            a(".wrap_outer").each(function (b, c) {
                s.readyDropData(a("img:first", c))
            }), c && c.next() && !c.next().hasClass("item_type_text") && s.razySelect(c), s.editorInstance.triggerEvent("attached", [s, null, null, !0]), s.editorInstance.showGuide(s.editorInstance.guideLabel.GUIDE_GROUP)
        }, 100)
    }, j.prototype.generateTemplate = function (b, c) {
        var d = {
            type: "gridGallery",
            gridImages: b.images
        };
        return b.data = JSON.stringify(d), a(c ? a.Editable.getTemplate("editor.gridLocal.hbs", b) : a.Editable.getTemplate("editor.grid.hbs", b))
    }, j.prototype.isDropable = function (b) {
        var d = b.dropElement,
            e = b.dragStartElement;
        if (d && e && "IMG" == d.tagName && "IMG" == e.tagName) {
            var f = a(this.editorInstance.getWrapItem(d));
            if (f.hasClass(c.gridGalleryItem)) {
                var g = a(".wrap_img_float img", f);
                return f.hasClass("dnd_droppable_top") || f.hasClass("dnd_droppable_bottom") ? !0 : g.length > 2 && f[0] != a(this.editorInstance.getWrapItem(e))[0] ? !1 : !0
            }
            return !0
        }
    }, j.prototype.setImageWidth = function (b) {
        var c = 0,
            d = [],
            e = this;
        b || (b = a(".item_type_gridGallery")), a(b).each(function (b, f) {
            var g = a(f),
                h = jQuery("img:first", g);
            h.data("app") || e.readyDropData(h), a("img", g).each(function (b, e) {
                d.push(e);
                var f = a(e),
                    g = f.data("app");
                c += g && g.width && g.height ? parseInt(g.width) / parseInt(g.height) : e.naturalWidth / e.naturalHeight
            }), a.each(d, function (b, d) {
                var e = a(d),
                    f = e.data("app");
                if (f && f.width && f.height) var g = parseInt(f.width) / parseInt(f.height) / c * 100;
                else var g = d.naturalWidth / d.naturalHeight / c * 100;
                e.parents(".wrap_img_float").css("width", g + "%");
                var h = e.data("app");
                h.widthRatio = g + "%", e.data("app", h), e.attr("data-app", JSON.stringify(h))
            }), e.setJSONData(g)
        })
    }, j.prototype.setJSONData = function (b) {
        var d = !1,
            e = a(b);
        if (e.hasClass(c.gridGalleryItem)) {
            var f = {
                    type: "gridGallery",
                    gridImages: []
                },
                g = a("img", e);
            if (g.each(function (b, c) {
                    var e = a(c),
                        g = e.data("app");
                    g || (d = !0), f.gridImages.push(g)
                }), d) return;
            e.data("app", f), e.attr("data-app", JSON.stringify(f))
        }
    }, j.prototype.imageDrop = function (d, e) {
        var f = d.dropElement,
            g = d.dragStartElement,
            h = null,
            i = null;
        if (f && g && !this.isDummyItem(f) && !this.isDummyItem(g)) {
            if (this.isDropable(d)) {
                h = this.editorInstance.getWrapItem(f), i = this.editorInstance.getWrapItem(g);
                var j = h == i,
                    k = e.originalEvent.offsetX || e.originalEvent.layerX,
                    l = e.originalEvent.offsetY || e.originalEvent.layerY,
                    m = f.offsetWidth,
                    n = f.offsetHeight,
                    o = .15 * n;
                this.readyDropData(g), j || this.readyDropData(f);
                var p = this.makeGridImageWrap(g, j);
                p.css("width", "10px"), p.addClass("gg_insert_image");
                var q = !0;
                if (l >= o && n - o >= l) m / 2 > k ? a(f).parent().before(p) : a(f).parent().after(p);
                else {
                    q = !!this.editorInstance.getWrapItem(g);
                    var r = a(g).data("app");
                    delete r.widthRatio;
                    var s = b.make(r);
                    p.remove(), o > l ? a(h).before(s) : a(h).after(s), window.setTimeout(function () {
                        b.select(s)
                    }, 400)
                }
                q ? (this.makeTextWrapItem(f), window.setTimeout(a.proxy(function (b) {
                    this.setImageWidth(b), p.removeClass("gg_insert_image"), this.updateColumn(a(i)), this._razySelect(g), this.editorInstance.saveUndoStep()
                }, this, h), 10)) : (this.updateColumn(a(i)), this.editorInstance.saveUndoStep())
            }
            a(h).removeClass(c.lineMarkers), a(".vertical_marker, .horizontal_marker").remove(), a(g).removeClass("dnd_drag_img"), this.editorInstance.callback("afterInsertModule", [g])
        }
    }, j.prototype.imageDragOver = function (b, d) {
        var e = b.dragOverElement,
            f = b.dragStartElement,
            g = a(e),
            h = a(this.editorInstance.getWrapItem(e));
        if (e && f && !this.isDummyItem(e) && !this.isDummyItem(f) && "IMG" == e.tagName && "IMG" == f.tagName && e != f) {
            this.makeLineMarker(g);
            var i = d.originalEvent.offsetX || d.originalEvent.layerX,
                j = d.originalEvent.offsetY || d.originalEvent.layerY,
                k = e.offsetWidth,
                l = e.offsetHeight,
                m = .15 * l;
            j >= m && l - m >= j ? k / 2 > i ? h.removeClass(c.lineMarkers).addClass("dnd_droppable_left") : h.removeClass(c.lineMarkers).addClass("dnd_droppable_right") : m > j ? h.removeClass(c.lineMarkers).addClass("dnd_droppable_top") : h.removeClass(c.lineMarkers).addClass("dnd_droppable_bottom")
        }
    }, j.prototype.initImageSelect = function () {
        this.editorInstance.$element.off(".gridClick"), this.editorInstance.$element.on("click.gridClick", ".item_type_gridGallery img", jQuery.proxy(function (a) {
            a.immediately = !0, this.clickSelect(a)
        }, this)), this.editorInstance.$element.on("click.gridClick", ".item_type_gridGallery", jQuery.proxy(this.itemSelect, this))
    }, j.prototype.isDummyItem = function (b) {
        var c = a(b);
        return c.hasClass("dummyGridGalleryItem") ? !0 : c.closest(".dummyGridGalleryItem").length > 0 ? !0 : !1
    }, j.prototype.clickSelect = function (b) {
        var c = b.immediately;
        this._selectModule(b.currentTarget);
        var d = jQuery(b.currentTarget),
            f = d;
        if (this.isDummyItem(f)) return !1;
        f.wrap('<span data-fr-verified="true" class="f-img-editor"></span>');
        var g = a(this.editorInstance.getWrapItem(f));
        e = g, this.showImageEditor(), c ? this.editorInstance.showByCoordinatesCenter(f.offset().left + f.width() / 2, f.offset().top + 40, this.$image_editor.width() / 2) : this.toolbarTimer = setTimeout(a.proxy(function () {
            this.editorInstance.showByCoordinatesCenter(f.offset().left + f.width() / 2, f.offset().top + 40, this.$image_editor.width() / 2)
        }, this), 400), this.editorInstance.$bttn_wrapper.find(".fr-bttn").removeClass("active"), this.editorInstance.callback("moduleSelected", [g]), this.active = !0, this.$activeImage = f
    }, j.prototype.makeLineMarker = function (b) {
        if (b.next()[0] && "vertical_marker" == b.next()[0].className) var c = b.next();
        else {
            var c = a('<div class="vertical_marker"></div>');
            b.after(c)
        }
        c.css("height", b.height() - 14 + "px");
        var d = a(this.editorInstance.getWrapItem(b[0]));
        if (d.children()[1] && "horizontal_marker" == d.children()[1].className) var e = a(d.children()[1]);
        else {
            var e = a('<div class="horizontal_marker"></div>');
            d.append(e)
        }
        var f = 940;
        d.hasClass("item_type_img") && (f = a(d.children()[0]).width()), e.css({
            width: f - 14 + "px",
            "margin-left": -(f / 2) + 7 + "px"
        })
    }, j.prototype.imageDragLeave = function (b) {
        var d = b.dragOverElement;
        d && "IMG" == d.tagName && (a(d).parents().removeClass(c.lineMarkers), a(".vertical_marker, .horizontal_marker").remove())
    }, j.prototype.imageDragEnd = function (a) {
        a.dragEndElement
    }, j.prototype.readyDropData = function (b) {
        var c = a(this.editorInstance.getWrapItem(b)),
            d = c.data("app");
        if (!d) return !1;
        if ("gridGallery" == d.type) {
            var e = d.gridImages;
            if (!e) return !1;
            c.find("img").each(function (b, c) {
                a(c).data("app", e[b]), a(c).attr("data-app", JSON.stringify(e[b]))
            })
        } else if ("img" == d.type) {
            var f = c.find(".text_caption");
            if (0 != f.length) {
                var g = f.text();
                g && (d.caption = g)
            }
            a(b).data("app", d)
        }
        return !0
    }, j.prototype.clearAppData = function (a) {
        a.find(".item_type_img img[data-app], .item_type_gridGallery img[data-app]").removeAttr("data-app")
    }, j.prototype.makeGridImageWrap = function (b, c) {
        var d = a(b);
        if (c) return d.parent();
        var e = a("<div>").addClass("wrap_img_float");
        return e.append(d)
    }, j.prototype.makeTextWrapItem = function (b) {
        var d = a(this.editorInstance.getWrapItem(b)),
            e = a(b).parent().parent();
        e[0].className.indexOf("_float") > 7 && (e.before(e.children()), e.remove());
        var f = a(".text_caption", d);
        if (f.remove(), 0 != f.length) {
            var g = a(b).data("app");
            if (g) {
                var h = f.text() || "";
                g.caption = h
            }
            f.remove()
        }
        d[0] && (d[0].className = c.gridGalleryItem, d.children(0)[0].className = c.wrapOuter + " column" + a("img", d).length)
    }, j.prototype.updateColumn = function (c, d) {
        c || (c = e);
        var f = a(".wrap_outer", c);
        jQuery("br", c).remove();
        var g = a("img", f);
        if (0 == g.length) c.remove();
        else if (1 == g.length) {
            var h = this.replaceImageItem(g, c);
            d && window.setTimeout(function () {
                b.select(h)
            }, 100), this.editorInstance.calculateWidth()
        } else f[0].className = "wrap_outer column" + g.length, a(".wrap_img_float", f).each(function (b, c) {
            a(c).children().length < 1 && a(c).remove()
        }), this.setImageWidth(c)
    }, j.prototype.replaceImageItem = function (a, c) {
        var d = a.data("app"),
            e = b.make(d);
        return e.replaceAll(c), e
    }, j.prototype.getSelectImage = function () {
        return a(".item_type_gridGallery .wrap_img_float:has(span.f-img-editor) img")
    }, j.prototype.getFirstOrLastImage = function (b, c) {
        return "first" == c ? a("img:first", b)[0] : a("img:last", b)[0]
    }, j.prototype.selectFirstImage = function (a) {
        var b = a || e,
            c = this.getFirstOrLastImage(b, "first");
        this.select(c)
    }, j.prototype.getImageByActive = function (b, c) {
        var d = a(".item_type_gridGallery .wrap_img_float:has(span.f-img-editor)"),
            e = d.prev(),
            f = d.next(),
            g = null;
        return "prev" == b ? e[0] ? g = e.children()[0] : c && f[0] ? ($previousItem = a(this.editorInstance.getWrapItem(d)).prev(), this.isGridGalleryItem($previousItem) ? g = a("img:last", $previousItem)[0] : (g = $previousItem[0], this.deselect(), g || (g = a("img:first", d)[0]))) : g = f.children()[0] : f[0] ? g = f.children()[0] : c && e[0] ? ($nextItem = a(this.editorInstance.getWrapItem(d)).next(), this.isGridGalleryItem($nextItem) ? g = a("img:first", $nextItem)[0] : (g = $nextItem[0], this.deselect())) : g = e.children()[0], g
    }, j.prototype.isGridGalleryItem = function (b) {
        return a(b).hasClass("item_type_gridGallery")
    }, j.prototype.setAppDataInfo = function () {
        _this = this, a(".item_type_gridGallery").each(function (b, c) {
            _this.readyDropData(a("img:first", c))
        })
    }, j.prototype.initImagePopup = function () {
        this.$image_editor = a('<div class="be_popup be_popup_grid" style="display: none"></div>');
        for (var b = a('<div class="f-popup-line">').appendTo(this.$image_editor), c = 0; c < this.options.imageButtons.length; c++) {
            var d = this.options.imageButtons[c];
            if (void 0 !== j.IMAGE_COMMANDS[d]) {
                var e = j.IMAGE_COMMANDS[d],
                    f = '<button class="be_button" data-cmd="' + d + '" title="' + e.title + '">';
                f += a.Editable.Module.generateButtonIcon(e), f += "</button>", b.append(f)
            }
        }
        var g = this;
        this.editorInstance.addListener("hidePopups", function () {
            g.hideImageEditorPopup()
        }), this.$image_editor.append(a('<div class="be_popup_image_bg"></div>')), this.$image_editor.find("button").click(function (b) {
            b.stopPropagation(), g[a(this).attr("data-cmd")]()
        }), this.editorInstance.$popup_editor.append(this.$image_editor)
    }, j.prototype.editGridImage = function () {
        var a = this.getElement(),
            b = a.find("span.f-img-editor img");
        this.editorInstance.getModule("image").globalEditImage(b)
    }, j.prototype.hideImageEditorPopup = function () {
        this.editorInstance.isDisabled() || (this.deselect(), this.isSaveActive = !1)
    }, j.prototype.showImageEditorPopup = function () {
        if (this.$image_editor) {
            var a = this.getElement();
            a.hasClass("item_type_preview") || this.$image_editor.find("[data-cmd=editGridImage]").length > 0 && this.$image_editor.show()
        }
    }, j.prototype.showImageEditor = function () {
        this.showImageEditorPopup()
    }, j.prototype.uploadEditImage = function (c, d, e) {
        var f = "edit_image_" + c,
            g = b.getEditImage(c),
            h = g.closest(".item_type_gridGallery"),
            i = h.data("app"),
            j = i.gridImages,
            k = -1;
        if (h.find("img").each(function (a, b) {
                return g.get(0) == b ? void(k = a) : void 0
            }), -1 != k) {
            var l = j[k],
                m = l.originalName || "";
            g.attr("src", d.dataURL);
            var n = l.url,
                o = l.width,
                p = l.height,
                q = d.width,
                r = d.height,
                s = !1;
            (o != q || p != r) && (s = !0, l.width = q, l.height = r, h.attr("data-app", JSON.stringify(i)), this.updateColumn(h, !1)), this.changePreviewImage(g.closest(".wrap_img_float"), f);
            var t = {
                url: n,
                width: o,
                height: p
            };
            return callback = {
                id: f,
                name: m,
                progressCallback: a.proxy(this.binaryUploadProgress, this),
                successCallback: a.proxy(function (a, b) {
                    try {
                        this.binaryUploadSuccess(a.data, b, k, e)
                    } catch (c) {
                        this.binaryUploadError(c, b, k, t, e)
                    }
                }, this),
                errorCallback: a.proxy(function (a, b) {
                    this.binaryUploadError(a, b, k, t, e)
                }, this)
            }
        }
    }, j.prototype.changePreviewImage = function (a, b) {
        a.attr("data-file-id", b), a.addClass("item_type_preview"), a.append('<div class="image_wrapper"><div class="image_wrapper_overlay"></div><div class="jq_ui_progress_wrap"></div></div>')
    }, j.prototype.binaryUploadProgress = function (a, b, c) {
        this.progressUploadImage(a, b, c)
    }, j.prototype.binaryUploadSuccess = function (c, d, e, f) {
        b.finishUploadBefore({
            id: d
        }, !0);
        var g = this.getPreviewAnchor(d),
            h = g.closest(".wrap_item"),
            i = h.data("app"),
            j = i.gridImages;
        j[e].url = c.url, g.find("img").attr("src", a.Editable.getThumbnailUrl(c.url)), this.updateColumn(h, !1), this.binaryUploadFinish(d, f)
    }, j.prototype.binaryUploadError = function (c, d, e, f, g) {
        b.finishUploadBefore({
            id: d
        }, !1);
        var h = this.getPreviewAnchor(d),
            i = h.closest(".wrap_item"),
            j = i.data("app"),
            k = j.gridImages,
            l = k[e];
        l.width = f.width, l.height = f.height, l.url = f.url, i.attr("data-app", JSON.stringify(j)), h.find("img").attr("src", a.Editable.getThumbnailUrl(l.url)), this.editorInstance.errorCode(a.Editable.ERROR_CODE.UPLOAD), this.updateColumn(i, !1), this.binaryUploadFinish(d, g)
    }, j.prototype.binaryUploadFinish = function (a, b) {
        var c = this.getPreviewAnchor(a);
        if (c && c.length > 0) {
            var d = c.find("img").get(0);
            c.removeClass("item_type_preview"), c.removeAttr("data-file-id"), this.removeProgress(c), b && b(d)
        }
    }, j.prototype.removeProgress = function (a) {
        a.find(".image_wrapper").remove()
    }
}(jQuery), ! function (a) {
    var b = a.Editable.ModuleClass.extend({
        init: function () {
            this._super.apply(this, arguments), this.userId = this.editorInstance.getUserId(), this.urlInfoApiVersion = 2
        },
        initEvent: function () {
            var b = this;
            this.editorInstance.$element.on(this.editorInstance.mousedown, ".wrap_body .item_type_opengraph, .item_type_opengraph .inner_wrap, .item_type_opengraph .inner_wrap_og_image", function (c) {
                c.stopPropagation(), c.preventDefault();
                var d = a(c.currentTarget);
                b.select(d)
            })
        },
        getApiUrl: function () {
            var a = this.editorInstance.getApiDomain();
            return a.split("/v1").join("/v" + this.urlInfoApiVersion)
        },
        getElement: function () {
            return a(".wrap_item.item_type_opengraph:has(span.inner_wrap_active)")
        },
        getElements: function () {
            return a(".wrap_item.item_type_opengraph")
        },
        select: function (b) {
            if (this._super(b), b = a.Editable.getHtmlTag(b)) {
                a(b).hasClass("inner_wrap") || (a(b).hasClass("inner_wrap_og_image") ? b = a(b).closest(".inner_wrap")[0] : (b = a(b).find(".inner_wrap"), b.length > 0 && (b = b.get(0))));
                var c = a(this.editorInstance.getWrapItem(b)),
                    d = a(b),
                    e = d.parent();
                e.hasClass("inner_wrap_active") && "SPAN" == e.get(0).tagName || d.wrap('<span data-fr-verified="true" class="inner_wrap_active"></span>'), this.editorInstance.callback("moduleSelected", [c]), this.active = !0
            }
        },
        deselect: function () {
            var b = this.getElement();
            return this.editorInstance.$element.find(".wrap_body .item_type_opengraph .inner_wrap").each(a.proxy(function (b, c) {
                a(c).closest(".inner_wrap_active").length > 0 && a(c).unwrap()
            }, this)), this.active = !1, b && b.get(0)
        },
        validData: function (a, b) {
            return a && a.openGraphData ? b ? "opengraph" == a.type : "opengraph" == a.type && a.openGraphData.url && a.openGraphData.title : !1
        },
        validTag: function (a) {
            return a && 0 != a.length ? 0 == a.has(".inner_wrap_text").length ? !1 : !0 : !1
        },
        make: function (a) {
            return this.makeOpengraphElement(a.url)
        }
    });
    b.MODULE_NAME = "opengraph", b.DEFAULTS = {}, a.Editable.addModule(b), b.prototype.makeOgUrl = function (b) {
        var c = "brunch.dev.daum.net",
            d = "brunch.co.kr",
            e = "",
            f = b.match(a.Editable.VALID_URL_EXPR),
            g = f[8];
        if (b.split(c).length > 1 || b.split(d).length > 1) {
            var h = f[10] ? "/" + f[10] : "";
            e = g + h
        } else e = g;
        return e
    }, b.prototype.makeOpengraphElement = function (b) {
        var c = "",
            d = "inner_wrap_text";
        b.imageUrl ? c = '<div class="inner_wrap_og_image" style="background-image:url(' + b.imageUrl + ')">&nbsp;</div>' : d += " no_og_image";
        var e = this.makeOgUrl(b.canonicalUrl),
            f = '<div class="' + d + '"><strong class="title">' + b.title + '</strong><p class="desc">' + b.description + '</p><p class="url">' + e + "</p></div>",
            g = a('<div class="wrap_item item_type_opengraph"><a target="_blank" href="' + b.requestUrl + '" class="inner_wrap">' + f + c + "</a></div>"),
            h = {
                type: this.name,
                openGraphData: {
                    title: b.title,
                    description: b.description,
                    url: b.requestUrl,
                    canonicalUrl: b.canonicalUrl
                }
            };
        return b.imageUrl && (h.openGraphData.image = b.imageUrl), g.attr("data-app", JSON.stringify(h)), g
    }, b.prototype.getDummyItem = function (b) {
        return a("[data-dummy-id=" + b + "]")
    }, b.prototype.insertOpengraph = function (a, b) {
        var c = this.makeOpengraphElement(a),
            d = this.getDummyItem(b);
        d.length > 0 ? (d.replaceWith(c), c.next().length > 0 && !c.next().hasClass("item_type_text") ? this.select(c) : this.editorInstance.resetCursor(this, c), this.editorInstance.callback("afterInsertModule", [c])) : this.editorInstance.insertItem(this, c, !0)
    }, b.prototype.insertDummyItem = function () {
        var b = (new Date).getTime(),
            c = a('<div class="wrap_item item_type_opengraph" data-dummy-id="' + b + '"><div class="inner_wrap"></div></div>');
        return this.editorInstance.insertItem(this, c, !1, !0), this.showSpinner(b), b
    }, b.prototype.checkLinkBykey = function (b) {
        if (!b.isEnterKey()) return !0;
        var c = this.editorInstance.getSelection();
        if (null == c || !c.isCollapsed) return !0;
        var d = this.editorInstance.getCurrentTextNode();
        if (!d) return !0;
        var e = a(d).closest(".wrap_item");
        if (e[0] && ("BLOCKQUOTE" == e[0].tagName || e.hasClass("item_type_bullet"))) return !0;
        var f = d.textContent,
            g = "";
        return a.Editable.containsUrl(f) && 3 == d.nodeType && (g = f.match(a.Editable.VALID_URL_EXPR_CONTAINS)[0]), g ? (this.editorInstance.linkCheckKeydown(), this.checkLinkUrl(g), !1) : !0
    }, b.prototype.showSpinner = function (b) {
        var c = this.getDummyItem(b),
            d = a('<div class="spinner">&nbsp;</div>');
        c && a(".inner_wrap", c).append(d)
    }, b.prototype.checkLinkUrl = function (a) {
        var b = this,
            c = {
                url: a || ""
            },
            d = this.insertDummyItem(),
            e = this.editorInstance.getAjax("GET", this.getApiUrl() + "/url/info", c);
        e.error(function (a, c) {
            b.getDummyItem(d).remove()
        }).success(function (a) {
            if (a && 200 == a.code && null != a.data) "outerOG" == a.data.itemType ? b.insertOpengraph(a.data.openGraphData, d) : "video" == a.data.itemType && a.data.videoData && a.data.videoData.url && b.editorInstance.getModule("video").makeItemByVideoData(a.data.videoData, d);
            else {
                var c = b.getDummyItem(d),
                    e = c.prev();
                c.remove(), 0 == e.next().length || e.next().length > 0 && !e.next().hasClass("item_type_text") ? b.editorInstance.resetCursor(b, e, !0) : e.next().length > 0 && e.next().hasClass("item_type_text") && b.editorInstance.focus(e.next())
            }
        })
    }
}(jQuery), ! function (a) {
    var b = null,
        c = a.Editable.ModuleClass.extend({
            init: function () {
                this._super.apply(this, arguments), this.elements = {
                    dragStartElement: null,
                    dragOverElement: null,
                    dragEndElement: null,
                    dragEnterElement: null,
                    dropElement: null
                }
            },
            initModule: function () {
                this._super(), b = this.editorInstance.getModule("gridGallery")
            },
            initEvent: function () {
                this.editorInstance.$element.on("mousedown mouseleave mouseover mouseout ", ".wrap_img_float img, .wrap_img_float .f-img-editor", a.proxy(this.handleDragEvent, this)), a(document).on("mouseup mouseleave, mousemove", a.proxy(this.handleDragEvent, this)), a(document).bind("contextmenu", a.proxy(this.handleDragEvent, this))
            },
            validate: function () {
                return !0
            }
        });
    c.MODULE_NAME = "dragAndDrop", a.Editable.addModule(c);
    var d, e = 0,
        f = {
            EMPTY: "empty",
            READY: "ready",
            START: "start",
            OVER: "over",
            OUT: "out"
        },
        g = 20,
        h = 20,
        i = 100,
        j = f.EMPTY,
        k = null,
        l = null,
        m = 0;
    c.prototype.setStatus = function (a) {
        j = a
    }, c.prototype.setPositionTarget = function (b, c) {
        l && l.length > 0 && l.css({
            left: b + 20,
            top: c + 20
        }), this.scrollTimer = setTimeout(a.proxy(function () {
            this.scroll(b, c)
        }, this), g)
    }, c.prototype.clearScroll = function () {
        this.scrollTimer && (clearTimeout(this.scrollTimer), this.scrollTimer = null)
    }, c.prototype.scroll = function (b, c) {
        var d = c,
            e = a(window),
            f = e.scrollTop(),
            g = e.height(),
            j = f + g;
        f > 0 && f + i > c ? (e.scrollTop(f - h), d = c - h) : c > j - i && m > j && (e.scrollTop(f + h), d = c + h), d != c && this.setPositionTarget(b, d)
    }, c.prototype.dragReady = function (b) {
        b.stopPropagation(), b.preventDefault();
        var c = b.target,
            g = a(c);
        g.hasClass("f-img-editor") && 0 != g.find("img").length && (c = g.find("img").get(0)), this.editorInstance.hide(), d = b.pageX, e = b.pageY, this.editorInstance.setDisabled(!0), this.elements.dragStartElement = c, k = c, this.setStatus(f.READY)
    }, c.prototype.dragStart = function (b) {
        a(document.body).addClass("drag_start"), a(k).addClass("drag_source"), m = jQuery(document.body).prop("scrollHeight"), l = a(k.cloneNode()).appendTo(document.body), l.addClass("drag_clone"), this.setStatus(f.START)
    }, c.prototype.dragMove = function (a) {
        if (f.EMPTY != j) {
            this.clearScroll();
            var b = a.pageX,
                c = a.pageY;
            j == f.READY && (Math.abs(e - c) > 5 || Math.abs(d - b) > 5) && this.dragStart(a), j != f.EMPTY && j != f.READY && (d = b, e = c, this.setPositionTarget(b, c)), j == f.OVER && this.dragOver(a)
        }
    }, c.prototype.dragOver = function (c) {
        if (f.EMPTY != j && f.READY != j) {
            var d = c.target;
            a(d).hasClass("drag_source") || (this.elements.dragOverElement = d, b.imageDragOver(this.elements, c), this.setStatus(f.OVER))
        }
    }, c.prototype.dragLeave = function () {
        f.EMPTY != j && f.READY != j && (this.setStatus(f.OUT), b.imageDragLeave(this.elements))
    }, c.prototype.dragEnd = function (c) {
        var d = c.target;
        f.EMPTY != j && (c.stopPropagation(), c.preventDefault(), f.OVER == j && this.dragDrop(c), this.elements.dragEndElement = k, b.imageDragEnd(this.elements), this.dragRelease()), j == f.READY && (this.setStatus(f.EMPTY, c), d == k && a(k).trigger("mouseup")), k = null, this.setStatus(f.EMPTY, c)
    }, c.prototype.dragDrop = function (a) {
        f.OVER == j && (this.elements.dropElement = a.target, b.imageDrop(this.elements, a))
    }, c.prototype.dragRelease = function () {
        this.clearScroll(), k && a(k).removeClass("drag_source"), a(document.body).removeClass("drag_start"), this.editorInstance.setDisabled(!1), l && (l.remove(), l = null)
    }, c.prototype.dragCancel = function (a) {
        f.EMPTY != j && (this.elements.dragEndElement = k, b.imageDragEnd(this.elements), b.imageDragLeave(this.elements), this.dragRelease(), k = null, this.setStatus(f.EMPTY, a))
    }, c.prototype.handleDragEvent = function (a) {
        var b = a.type;
        if (f.EMPTY != j || "mousedown" == b) switch (b) {
            case "mousedown":
                1 == a.which && this.dragReady(a);
                break;
            case "mousemove":
                this.dragMove(a);
                break;
            case "mouseup":
                this.dragEnd(a);
                break;
            case "mouseover":
                this.dragOver(a);
                break;
            case "mouseout":
                this.dragLeave();
                break;
            case "contextmenu":
                this.dragCancel()
        }
    }
}(jQuery), ! function (a) {
    a.Editable.prototype.useGuide = function () {
        return !0
    }, a.Editable.prototype.showIEGuide = function () {}, a.Editable.prototype.showGuide = function (b, c) {
        return this.useGuide() ? (this.pendingGuide && this.hideGuide(), this.isGuideTouch(b) ? !1 : (this.pendingGuide = b, this.pendingGuideCallback = c, this.workGuideFunc(b, !0), this.eventGuide = a.proxy(function () {
            this.hideGuide()
        }, this), this.addListener("hidePopups", this.eventGuide), !0)) : !1
    }, a.Editable.prototype.hideGuide = function () {
        this.useGuide() && (this.pendingGuide && (this.touchGuide(this.pendingGuide), this.pendingGuide = null, this.pendingGuideCallback && (this.pendingGuideCallback(), this.pendingGuideCallback = null)), this.eventGuide && (this.removeListener("hidePopups", this.eventGuide), this.eventGuide = null))
    }, a.Editable.prototype.initGuide = function () {
        this.pendingGuide = null, this.guideLabel = {
            GUIDE_TEXT: "guide_text",
            GUIDE_IMAGE: "guide_image",
            GUIDE_GROUP: "guide_group",
            GUIDE_COVER: "guide_cover",
            GUIDE_COVER_HEIGHT: "guide_cover_height",
            GUIDE_END: "guide_end",
            GUIDE_IE: "guide_ie"
        }, this.guide = {}, this.guide.style = {}, this.guide.style[this.guideLabel.GUIDE_TEXT] = {
            width: 800,
            height: 446,
            background: "url('//u1.daumcdn.net/brunch/static/img/guide/pc_guide_01.v1.png') no-repeat"
        }, this.guide.style[this.guideLabel.GUIDE_IMAGE] = {
            width: 800,
            height: 446,
            background: "url('//u1.daumcdn.net/brunch/static/img/guide/pc_guide_02.v1.png')"
        }, this.guide.style[this.guideLabel.GUIDE_GROUP] = {
            width: 800,
            height: 506,
            background: "url('//u1.daumcdn.net/brunch/static/img/guide/pc_guide_03.v1.png')"
        }, this.guide.style[this.guideLabel.GUIDE_COVER] = {
            width: 800,
            height: 486,
            background: "url('//u1.daumcdn.net/brunch/static/img/guide/pc_guide_04.v1.png')"
        }, this.guide.style[this.guideLabel.GUIDE_COVER_HEIGHT] = {
            width: 800,
            height: 436,
            background: "url('//u1.daumcdn.net/brunch/static/img/guide/pc_guide_05.v1.png')"
        }, this.guide.style[this.guideLabel.GUIDE_END] = {
            width: 800,
            height: 466,
            background: "url('//u1.daumcdn.net/brunch/static/img/guide/pc_guide_06.v1.png')"
        }, this.guide.style[this.guideLabel.GUIDE_IE] = {
            width: 940,
            height: 630,
            background: "url('//u1.daumcdn.net/brunch/static/img/guide/pc_ch_down.png')"
        }, this.guide.func = {}, this.guide.func[this.guideLabel.GUIDE_TEXT] = a.proxy(function (a) {
            this.toggleGuideText(a)
        }, this), this.guide.func[this.guideLabel.GUIDE_IMAGE] = a.proxy(function (a) {
            this.toggleGuideImage(a)
        }, this), this.guide.func[this.guideLabel.GUIDE_GROUP] = a.proxy(function (a) {
            this.toggleGuideGroup(a)
        }, this), this.guide.func[this.guideLabel.GUIDE_COVER] = a.proxy(function (a) {
            this.toggleGuideCover(a)
        }, this), this.guide.func[this.guideLabel.GUIDE_COVER_HEIGHT] = a.proxy(function (a) {
            this.toggleGuideCoverHeight(a)
        }, this), this.guide.func[this.guideLabel.GUIDE_END] = a.proxy(function (a) {
            this.toggleGuideEnd(a)
        }, this), this.guide.func[this.guideLabel.GUIDE_IE] = a.proxy(function (a) {
            this.toggleGuideIE(a)
        }, this), this.guide.touch = {};
        for (var b in this.guideLabel) {
            var c = this.guideLabel[b];
            this.guide.touch[c] = !1
        }
        this.guideKey = "localGuide_" + this.getUserId(), this.guide.touch = this.getLocalGuide(), this.$guidePopup = this.makeGuidePopup(), this.isGuideTouch(this.guideLabel.GUIDE_GROUP) || this.$side_bttn_wrapper.find('button[data-cmd="insertImage"], button[data-cmd="insertGridGallery"]').addClass("guide"), this.isGuideTouch(this.guideLabel.GUIDE_COVER) || this.$cover_bttn_wrapper.find('button[data-cmd="insertCoverImage"], button[data-cmd="insertCoverColor"], button[data-cmd="changeCoverAlign"]').addClass("guide"), this.isGuideTouch(this.guideLabel.GUIDE_COVER_HEIGHT) || this.$cover_bttn_wrapper.find('button[data-cmd="insertCoverImage"], button[data-cmd="changeCoverType"], button[data-cmd="changeCoverAlign"]').addClass("guide"), this.isGuideTouch(this.guideLabel.GUIDE_TEXT) || setTimeout(a.proxy(function () {
            this.showGuide(this.guideLabel.GUIDE_TEXT)
        }, this), 1e3), this.isGuideTouch(this.guideLabel.GUIDE_IE) || setTimeout(a.proxy(function () {
            this.showGuide(this.guideLabel.GUIDE_IE)
        }, this), 500)
    }, a.Editable.prototype.makeGuidePopup = function () {
        var b = a('<div class="guide_popup"><button class="guide_close"></button></div>').appendTo(document.body);
        return b.hide(), a(document.body).on(this.mouseup, ".guide_popup, .guide_popup .guide_close", a.proxy(function (b) {
            b.preventDefault(), b.stopPropagation();
            var c = a(b.target);
            c.hasClass("guide_close") && this.hideGuide()
        }, this)), b
    }, a.Editable.prototype.clearGuide = function () {
        localStorage.setItem(this.guideKey, "");
        for (var a in this.guide.touch) this.guide.touch[a] = !1
    }, a.Editable.prototype.getLocalGuide = function () {
        var b = localStorage.getItem(this.guideKey),
            c = b ? a.parseJSON(b) : {},
            d = a.extend(this.guide.touch, c);
        return d
    }, a.Editable.prototype.setLocalGuide = function () {
        localStorage.setItem(this.guideKey, JSON.stringify(this.guide.touch))
    }, a.Editable.prototype.workGuideFunc = function (a, b) {
        this.guide.func[a] && this.guide.func[a](b)
    }, a.Editable.prototype.setGuideTouch = function (a, b) {
        a == this.guideLabel.GUIDE_COVER_HEIGHT && (this.guide.touch[this.guideLabel.GUIDE_COVER] = b), this.guide.touch[a] = b
    }, a.Editable.prototype.isGuideTouch = function (a) {
        return this.guideLabel.GUIDE_IE == a ? this.browser.msie ? !1 : !0 : this.browser.msie ? !0 : this.getPublishCount() > 0 ? !0 : this.getArticleNo() && a == this.guideLabel.GUIDE_TEXT ? !0 : this.guide.touch[a]
    }, a.Editable.prototype.touchGuide = function (a) {
        this.setGuideTouch(a, !0), this.workGuideFunc(a, !1), this.guideLabel.GUIDE_IE != a && this.setLocalGuide()
    }, a.Editable.prototype.showGuideImageCenter = function (b) {
        var c = this.guide.style[b];
        c.width, c.height;
        this.$guidePopup || (this.$guidePopup = this.makeGuidePopup()), this.$guidePopup.css(c), this.$guidePopup.show(), this.rePositionGuidePopup(), setTimeout(a.proxy(function () {
            this.rePositionGuidePopup()
        }, this), 50)
    }, a.Editable.prototype.rePositionGuidePopup = function (b) {
        if (this.useGuide() && this.pendingGuide && "block" == this.$guidePopup.css("display")) {
            if (b || (b = this.guide.style[this.pendingGuide]), !b) return;
            this.$guidePopup.css("opacity", 1);
            var c = a(window),
                d = c.scrollTop(),
                e = c.scrollLeft(),
                f = c.width(),
                g = c.height(),
                h = b.width,
                i = b.height,
                j = d + (g - i) / 2,
                k = e + (f - h) / 2;
            this.$guidePopup.css({
                top: j,
                left: k
            })
        }
    }, a.Editable.prototype.hideGuideImageCenter = function () {
        this.$guidePopup && (this.$guidePopup.css("opacity", .5), this.$guidePopup.hide())
    }, a.Editable.prototype.toggleGuideText = function (a) {
        if (a) {
            var b = "ë¸ŒëŸ°ì¹˜ì—ë””í„°ì— ì˜¤ì‹ ê²ƒì„ í™˜ì˜í•©ë‹ˆë‹¤. ê¸€ìž ìž…ë ¥í›„ ë“œëž˜ê·¸í•˜ë©´ ìŠ¤íƒ€ì¼ íŽ¸ì§‘ì„ í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤.",
                c = (new Date).getHours();
            b = c >= 18 ? "ìž‘ê°€ë‹˜, ì»¤í”¼ í•œ ìž”ì— ê¸€ ì“°ê¸° ì¢‹ì€ ì €ë…ì´ë„¤ìš”.\nì´ë ‡ê²Œ ê¸€ìžë¥¼ ìž…ë ¥í•˜ê³  ë“œëž˜ê·¸í•˜ë©´ ë©”ë‰´ë¥¼ ë” ë³¼ ìˆ˜ ìžˆì–´ìš”." : c >= 12 ? "ìž‘ê°€ë‹˜, ì»¤í”¼ í•œ ìž”ì— ê¸€ ì“°ê¸° ì¢‹ì€ ì˜¤í›„ë„¤ìš”.\nì´ë ‡ê²Œ ê¸€ìžë¥¼ ìž…ë ¥í•˜ê³  ë“œëž˜ê·¸í•˜ë©´ ë©”ë‰´ë¥¼ ë” ë³¼ ìˆ˜ ìžˆì–´ìš”." : c >= 6 ? "ìž‘ê°€ë‹˜, ì»¤í”¼ í•œ ìž”ì— ê¸€ ì“°ê¸° ì¢‹ì€ ì•„ì¹¨ì´ë„¤ìš”.\nì´ë ‡ê²Œ ê¸€ìžë¥¼ ìž…ë ¥í•˜ê³  ë“œëž˜ê·¸í•˜ë©´ ë©”ë‰´ë¥¼ ë” ë³¼ ìˆ˜ ìžˆì–´ìš”." : "ìž‘ê°€ë‹˜, ì§‘ì¤‘í•´ì„œ ê¸€ ì“°ê¸° ì¢‹ì€ ìƒˆë²½ì´ë„¤ìš”.\nì´ë ‡ê²Œ ê¸€ìžë¥¼ ìž…ë ¥í•˜ê³  ë“œëž˜ê·¸í•˜ë©´ ë©”ë‰´ë¥¼ ë” ë³¼ ìˆ˜ ìžˆì–´ìš”.", this.workGuideTextPrev(b)
        }
    }, a.Editable.prototype.toggleGuideImage = function (a) {
        a ? this.showGuideImageCenter(this.guideLabel.GUIDE_IMAGE) : this.hideGuideImageCenter()
    }, a.Editable.prototype.toggleGuideGroup = function (a) {
        a ? (this.showGuideImageCenter(this.guideLabel.GUIDE_GROUP), this.$side_bttn_wrapper.find('button[data-cmd="insertImage"], button[data-cmd="insertGridGallery"]').addClass("guide_active")) : (this.hideGuideImageCenter(), this.$side_bttn_wrapper.find('button[data-cmd="insertImage"], button[data-cmd="insertGridGallery"]').removeClass("guide_active"))
    }, a.Editable.prototype.toggleGuideCover = function (a) {
        a ? (this.showGuideImageCenter(this.guideLabel.GUIDE_COVER), this.$cover_bttn_wrapper.find('button[data-cmd="insertCoverImage"], button[data-cmd="insertCoverColor"], button[data-cmd="changeCoverAlign"]').addClass("guide_active")) : (this.hideGuideImageCenter(), this.$cover_bttn_wrapper.find('button[data-cmd="insertCoverImage"], button[data-cmd="insertCoverColor"], button[data-cmd="changeCoverAlign"]').removeClass("guide guide_active"), this.isGuideTouch(this.guideLabel.GUIDE_COVER_HEIGHT) || this.$cover_bttn_wrapper.find('button[data-cmd="insertCoverImage"], button[data-cmd="changeCoverAlign"]').addClass("guide"))
    }, a.Editable.prototype.toggleGuideCoverHeight = function (a) {
        a ? (this.showGuideImageCenter(this.guideLabel.GUIDE_COVER_HEIGHT), this.$cover_bttn_wrapper.find('button[data-cmd="insertCoverImage"], button[data-cmd="changeCoverType"], button[data-cmd="changeCoverAlign"]').addClass("guide_active")) : (this.hideGuideImageCenter(), this.$cover_bttn_wrapper.find('button[data-cmd="insertCoverImage"], button[data-cmd="changeCoverType"], button[data-cmd="changeCoverAlign"]').removeClass("guide guide_active"), this.isGuideTouch(this.guideLabel.GUIDE_COVER) || this.$cover_bttn_wrapper.find('button[data-cmd="insertCoverImage"], button[data-cmd="changeCoverAlign"]').addClass("guide"))
    }, a.Editable.prototype.toggleGuideEnd = function (a) {
        a ? this.showGuideImageCenter(this.guideLabel.GUIDE_END) : this.hideGuideImageCenter()
    }, a.Editable.prototype.toggleGuideIE = function (b) {
        if (b) {
            this.showGuideImageCenter(this.guideLabel.GUIDE_IE);
            var c = this.$guidePopup.find(".guide_down_link");
            0 == c.length && (c = a('<a href="http://www.google.co.kr/chrome/" target="_blank">í¬ë¡¬ ë‹¤ìš´ë°›ê¸°</a>'), c.css({
                width: 157,
                height: 43,
                top: 517,
                left: 392,
                display: "block",
                position: "absolute",
                overflow: "hidden",
                "text-indent": -9999
            }), c.appendTo(this.$guidePopup)), this.$guidePopup.focus()
        } else this.hideGuideImageCenter()
    }, a.Editable.prototype.workGuideTextPrev = function (a) {
        var b = a.split("\n");
        2 == b.length && this.workGuideText(b[0], b[1], 0)
    }, a.Editable.prototype.workGuideText = function (b, c, d) {
        if (!this.isGuideTouch(this.guideLabel.GUIDE_TEXT))
            if (c && c.length >= d) {
                var e = this.getSelectionElement(),
                    f = c.substring(0, d);
                e.innerHTML = b + "<br>" + f, this.setSelectionEnd(e), setTimeout(a.proxy(function () {
                    this.workGuideText(b, c, d + 1)
                }, this), 50)
            } else {
                this.hideGuide();
                var g = this.getSelectionElement();
                this.setSelection(g, 2, g, g.childNodes.length), this.show(null), setTimeout(a.proxy(function () {
                    this.buttonDropdownEvents(jQuery("[data-name=formatBlock]"), jQuery("[data-name=formatBlock] button").get(0))
                }, this), 400)
            }
    }
}(jQuery),
function (a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.NProgress = b()
}(this, function () {
    function a(a, b, c) {
        return b > a ? b : a > c ? c : a
    }

    function b(a) {
        return 100 * (-1 + a)
    }

    function c(a, c, d) {
        var e;
        return e = "translate3d" === j.positionUsing ? {
            transform: "translate3d(" + b(a) + "%,0,0)"
        } : "translate" === j.positionUsing ? {
            transform: "translate(" + b(a) + "%,0)"
        } : {
            "margin-left": b(a) + "%"
        }, e.transition = "all " + c + "ms " + d, e
    }

    function d(a, b) {
        var c = "string" == typeof a ? a : g(a);
        return c.indexOf(" " + b + " ") >= 0
    }

    function e(a, b) {
        var c = g(a),
            e = c + b;
        d(c, b) || (a.className = e.substring(1))
    }

    function f(a, b) {
        var c, e = g(a);
        d(a, b) && (c = e.replace(" " + b + " ", " "), a.className = c.substring(1, c.length - 1))
    }

    function g(a) {
        return (" " + (a.className || "") + " ").replace(/\s+/gi, " ")
    }

    function h(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }
    var i = {};
    i.version = "0.1.6";
    var j = i.settings = {
        minimum: .08,
        easing: "ease",
        positionUsing: "",
        speed: 200,
        trickle: !0,
        trickleRate: .02,
        trickleSpeed: 800,
        showSpinner: !0,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    i.configure = function (a) {
            var b, c;
            for (b in a) c = a[b], void 0 !== c && a.hasOwnProperty(b) && (j[b] = c);
            return this
        }, i.status = null, i.set = function (b) {
            var d = i.isStarted();
            b = a(b, j.minimum, 1), i.status = 1 === b ? null : b;
            var e = i.render(!d),
                f = e.querySelector(j.barSelector),
                g = j.speed,
                h = j.easing;
            return e.offsetWidth, k(function (a) {
                "" === j.positionUsing && (j.positionUsing = i.getPositioningCSS()), l(f, c(b, g, h)), 1 === b ? (l(e, {
                    transition: "none",
                    opacity: 1
                }), e.offsetWidth, setTimeout(function () {
                    l(e, {
                        transition: "all " + g + "ms linear",
                        opacity: 0
                    }), setTimeout(function () {
                        i.remove(), a()
                    }, g)
                }, g)) : setTimeout(a, g)
            }), this
        }, i.isStarted = function () {
            return "number" == typeof i.status
        }, i.start = function () {
            i.status || i.set(0);
            var a = function () {
                setTimeout(function () {
                    i.status && (i.trickle(), a())
                }, j.trickleSpeed)
            };
            return j.trickle && a(), this
        }, i.done = function (a) {
            return a || i.status ? i.inc(.3 + .5 * Math.random()).set(1) : this
        }, i.inc = function (b) {
            var c = i.status;
            return c ? ("number" != typeof b && (b = (1 - c) * a(Math.random() * c, .1, .95)), c = a(c + b, 0, .994), i.set(c)) : i.start()
        }, i.trickle = function () {
            return i.inc(Math.random() * j.trickleRate)
        },
        function () {
            var a = 0,
                b = 0;
            i.promise = function (c) {
                return c && "resolved" != c.state() ? (0 == b && i.start(), a++, b++, c.always(function () {
                    b--, 0 == b ? (a = 0, i.done()) : i.set((a - b) / a)
                }), this) : this
            }
        }(), i.render = function (a) {
            if (i.isRendered()) return document.getElementById("nprogress");
            e(document.documentElement, "nprogress-busy");
            var c = document.createElement("div");
            c.id = "nprogress", c.innerHTML = j.template;
            var d, f = c.querySelector(j.barSelector),
                g = a ? "-100" : b(i.status || 0),
                k = document.querySelector(j.parent);
            return l(f, {
                transition: "all 0 linear",
                transform: "translate3d(" + g + "%,0,0)"
            }), j.showSpinner || (d = c.querySelector(j.spinnerSelector), d && h(d)), k != document.body && e(k, "nprogress-custom-parent"), k.appendChild(c), c
        }, i.remove = function () {
            f(document.documentElement, "nprogress-busy"), f(document.querySelector(j.parent), "nprogress-custom-parent");
            var a = document.getElementById("nprogress");
            a && h(a)
        }, i.isRendered = function () {
            return !!document.getElementById("nprogress")
        }, i.getPositioningCSS = function () {
            var a = document.body.style,
                b = "WebkitTransform" in a ? "Webkit" : "MozTransform" in a ? "Moz" : "msTransform" in a ? "ms" : "OTransform" in a ? "O" : "";
            return b + "Perspective" in a ? "translate3d" : b + "Transform" in a ? "translate" : "margin"
        };
    var k = function () {
            function a() {
                var c = b.shift();
                c && c(a)
            }
            var b = [];
            return function (c) {
                b.push(c), 1 == b.length && a()
            }
        }(),
        l = function () {
            function a(a) {
                return a.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (a, b) {
                    return b.toUpperCase()
                })
            }

            function b(a) {
                var b = document.body.style;
                if (a in b) return a;
                for (var c, d = e.length, f = a.charAt(0).toUpperCase() + a.slice(1); d--;)
                    if (c = e[d] + f, c in b) return c;
                return a
            }

            function c(c) {
                return c = a(c), f[c] || (f[c] = b(c))
            }

            function d(a, b, d) {
                b = c(b), a.style[b] = d
            }
            var e = ["Webkit", "O", "Moz", "ms"],
                f = {};
            return function (a, b) {
                var c, e, f = arguments;
                if (2 == f.length)
                    for (c in b) e = b[c], void 0 !== e && b.hasOwnProperty(c) && d(a, c, e);
                else d(a, f[1], f[2])
            }
        }();
    return i
}), this.BE = this.BE || {}, this.BE.Templates = this.BE.Templates || {}, this.BE.Templates["editor.grid.hbs"] = Handlebars.template({
    1: function (a, b, c, d) {
        var e, f = b.helperMissing,
            g = "function",
            h = this.escapeExpression;
        return '		<div class="wrap_img_float" style="width:' + h((e = null != (e = b.widthRatio || (null != a ? a.widthRatio : a)) ? e : f, typeof e === g ? e.call(a, {
            name: "widthRatio",
            hash: {},
            data: d
        }) : e)) + '">\n			<img src="//t1.daumcdn.net/thumb/R1280x0/?fname=' + h((e = null != (e = b.url || (null != a ? a.url : a)) ? e : f, typeof e === g ? e.call(a, {
            name: "url",
            hash: {},
            data: d
        }) : e)) + '" data-filename="' + h((e = null != (e = b.originalName || (null != a ? a.originalName : a)) ? e : f, typeof e === g ? e.call(a, {
            name: "originalName",
            hash: {},
            data: d
        }) : e)) + '">\n		</div>\n'
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, b, c, d) {
        var e, f;
        return '<div class="wrap_item item_type_gridGallery" data-app="' + this.escapeExpression((f = null != (f = b.data || (null != a ? a.data : a)) ? f : b.helperMissing, "function" == typeof f ? f.call(a, {
            name: "data",
            hash: {},
            data: d
        }) : f)) + '">\n	<div class="wrap_outer column_update">\n' + (null != (e = b.each.call(a, null != a ? a.images : a, {
            name: "each",
            hash: {},
            fn: this.program(1, d, 0),
            inverse: this.noop,
            data: d
        })) ? e : "") + "	</div>\n</div>"
    },
    useData: !0
}), this.BE.Templates["editor.gridLocal.hbs"] = Handlebars.template({
    1: function (a, b, c, d) {
        var e, f = b.helperMissing,
            g = "function",
            h = this.escapeExpression;
        return '		<div class="wrap_img_float item_type_preview" data-file-id="' + h((e = null != (e = b.id || (null != a ? a.id : a)) ? e : f, typeof e === g ? e.call(a, {
            name: "id",
            hash: {},
            data: d
        }) : e)) + '" style="width:' + h((e = null != (e = b.widthRatio || (null != a ? a.widthRatio : a)) ? e : f, typeof e === g ? e.call(a, {
            name: "widthRatio",
            hash: {},
            data: d
        }) : e)) + '">\n			<img class="replaceImageFrame" src="' + h((e = null != (e = b.url || (null != a ? a.url : a)) ? e : f, typeof e === g ? e.call(a, {
            name: "url",
            hash: {},
            data: d
        }) : e)) + '" data-filename="' + h((e = null != (e = b.name || (null != a ? a.name : a)) ? e : f, typeof e === g ? e.call(a, {
            name: "name",
            hash: {},
            data: d
        }) : e)) + '">\n			<div class="image_wrapper"><div class="image_wrapper_overlay"></div><div class="jq_ui_progress_wrap"></div></div>\n		</div>\n'
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, b, c, d) {
        var e, f;
        return '<div id="gridItem_' + this.escapeExpression((f = null != (f = b.id || (null != a ? a.id : a)) ? f : b.helperMissing, "function" == typeof f ? f.call(a, {
            name: "id",
            hash: {},
            data: d
        }) : f)) + '" class="wrap_item item_type_gridGallery dummyGridGalleryItem">\n	<div class="wrap_outer column_update">\n' + (null != (e = b.each.call(a, null != a ? a.files : a, {
            name: "each",
            hash: {},
            fn: this.program(1, d, 0),
            inverse: this.noop,
            data: d
        })) ? e : "") + "	</div>\n</div>"
    },
    useData: !0
}), this.BE.Templates["editor.image.hbs"] = Handlebars.template({
    1: function (a, b, c, d) {
        var e, f, g = b.helperMissing,
            h = "function",
            i = this.escapeExpression,
            j = this.lambda;
        return '    <div class="wrap_item item_type_img" data-app="' + i((f = null != (f = b.data || (null != a ? a.data : a)) ? f : g, typeof f === h ? f.call(a, {
            name: "data",
            hash: {},
            data: d
        }) : f)) + '">\n        <div class="wrap_full ' + i((f = null != (f = b.wrap_full_class || (null != a ? a.wrap_full_class : a)) ? f : g, typeof f === h ? f.call(a, {
            name: "wrap_full_class",
            hash: {},
            data: d
        }) : f)) + '">\n            <div class="wrap_img_float">\n                <img src="' + i(j(null != (e = null != a ? a.image : a) ? e.url : e, a)) + '" data-filename="' + i(j(null != (e = null != a ? a.image : a) ? e.originalName : e, a)) + '"/>\n                <span class="text_caption">' + i(j(null != (e = null != a ? a.image : a) ? e.caption : e, a)) + "</span>\n            </div>\n        </div>\n    </div>\n"
    },
    3: function (a, b, c, d) {
        var e, f, g = this.escapeExpression,
            h = this.lambda;
        return '	<div class="wrap_item item_type_img" data-app="' + g((f = null != (f = b.data || (null != a ? a.data : a)) ? f : b.helperMissing, "function" == typeof f ? f.call(a, {
            name: "data",
            hash: {},
            data: d
        }) : f)) + '">\n		<div class="wrap_outer">\n			<div class="wrap_img_float">\n				<img src="' + g(h(null != (e = null != a ? a.image : a) ? e.url : e, a)) + '" data-filename="' + g(h(null != (e = null != a ? a.image : a) ? e.originalName : e, a)) + '"/>\n				<span class="text_caption">' + g(h(null != (e = null != a ? a.image : a) ? e.caption : e, a)) + "</span>\n			</div>\n		</div>\n	</div>\n"
    },
    5: function (a, b, c, d) {
        var e, f, g = b.helperMissing,
            h = "function",
            i = this.escapeExpression,
            j = this.lambda;
        return '	<div class="wrap_item item_type_img ' + i((f = null != (f = b.wrap_item_class || (null != a ? a.wrap_item_class : a)) ? f : g, typeof f === h ? f.call(a, {
            name: "wrap_item_class",
            hash: {},
            data: d
        }) : f)) + '" data-app="' + i((f = null != (f = b.data || (null != a ? a.data : a)) ? f : g, typeof f === h ? f.call(a, {
            name: "data",
            hash: {},
            data: d
        }) : f)) + '">\n		<div class="wrap_content">\n			<div class="wrap_img_outer_float">\n				<div class="wrap_img_float">\n					<img class="img_float" src="' + i(j(null != (e = null != a ? a.image : a) ? e.url : e, a)) + '" data-filename="' + i(j(null != (e = null != a ? a.image : a) ? e.originalName : e, a)) + '"/>\n					<span class="text_caption">' + i(j(null != (e = null != a ? a.image : a) ? e.caption : e, a)) + "</span>\n				</div>\n			</div>\n		</div>\n	</div>\n"
    },
    7: function (a, b, c, d) {
        var e, f, g = this.escapeExpression,
            h = this.lambda;
        return '	<div class="wrap_item item_type_img" data-app="' + g((f = null != (f = b.data || (null != a ? a.data : a)) ? f : b.helperMissing, "function" == typeof f ? f.call(a, {
            name: "data",
            hash: {},
            data: d
        }) : f)) + '">\n		<div class="wrap_content">\n			<div class="wrap_img_float">\n				<img class="img_float" src="' + g(h(null != (e = null != a ? a.image : a) ? e.url : e, a)) + '" data-filename="' + g(h(null != (e = null != a ? a.image : a) ? e.originalName : e, a)) + '"/>\n				<span class="text_caption">' + g(h(null != (e = null != a ? a.image : a) ? e.caption : e, a)) + "</span>\n			</div>\n		</div>\n	</div>\n"
    },
    9: function (a, b, c, d) {
        var e, f, g = b.helperMissing,
            h = "function",
            i = this.escapeExpression,
            j = this.lambda;
        return '    <div class="wrap_item item_type_img ' + i((f = null != (f = b.wrap_item_class || (null != a ? a.wrap_item_class : a)) ? f : g, typeof f === h ? f.call(a, {
            name: "wrap_item_class",
            hash: {},
            data: d
        }) : f)) + '" data-app="' + i((f = null != (f = b.data || (null != a ? a.data : a)) ? f : g, typeof f === h ? f.call(a, {
            name: "data",
            hash: {},
            data: d
        }) : f)) + '">\n        <div class="wrap_content">\n            <div class="wrap_img_content_float">\n                <div class="wrap_img_float">\n                    <img class="img_float" src="' + i(j(null != (e = null != a ? a.image : a) ? e.url : e, a)) + '" data-filename="' + i(j(null != (e = null != a ? a.image : a) ? e.originalName : e, a)) + '"/>\n                    <span class="text_caption">' + i(j(null != (e = null != a ? a.image : a) ? e.caption : e, a)) + "</span>\n                </div>\n            </div>\n        </div>\n    </div>\n"
    },
    11: function (a, b, c, d) {
        var e, f, g = b.helperMissing,
            h = "function",
            i = this.escapeExpression,
            j = this.lambda;
        return '	<div class="wrap_item item_type_img ' + i((f = null != (f = b.wrap_item_class || (null != a ? a.wrap_item_class : a)) ? f : g, typeof f === h ? f.call(a, {
            name: "wrap_item_class",
            hash: {},
            data: d
        }) : f)) + '" data-app="' + i((f = null != (f = b.data || (null != a ? a.data : a)) ? f : g, typeof f === h ? f.call(a, {
            name: "data",
            hash: {},
            data: d
        }) : f)) + '">\n		<div class="wrap_content">\n			<div class="wrap_img_inner_float">\n				<div class="wrap_img_float" style="width:' + i(j(null != (e = null != (e = null != a ? a.image : a) ? e.model : e) ? e.width : e, a)) + 'px">\n					<img src="' + i(j(null != (e = null != a ? a.image : a) ? e.url : e, a)) + '" data-filename="' + i(j(null != (e = null != a ? a.image : a) ? e.originalName : e, a)) + '"/>\n					<span class="text_caption">' + i(j(null != (e = null != a ? a.image : a) ? e.caption : e, a)) + "</span>\n				</div>\n			</div>\n		</div>\n	</div>\n";
    },
    13: function (a, b, c, d) {
        var e, f, g = b.helperMissing,
            h = "function",
            i = this.escapeExpression,
            j = this.lambda;
        return '    <div class="wrap_item item_type_img ' + i((f = null != (f = b.wrap_item_class || (null != a ? a.wrap_item_class : a)) ? f : g, typeof f === h ? f.call(a, {
            name: "wrap_item_class",
            hash: {},
            data: d
        }) : f)) + '" data-app="' + i((f = null != (f = b.data || (null != a ? a.data : a)) ? f : g, typeof f === h ? f.call(a, {
            name: "data",
            hash: {},
            data: d
        }) : f)) + '">\n        <div class="wrap_content">\n            <div class="wrap_img_float" style="width:' + i(j(null != (e = null != (e = null != a ? a.image : a) ? e.model : e) ? e.width : e, a)) + 'px">\n                <img src="' + i(j(null != (e = null != a ? a.image : a) ? e.url : e, a)) + '" data-filename="' + i(j(null != (e = null != a ? a.image : a) ? e.originalName : e, a)) + '"/>\n                <span class="text_caption">' + i(j(null != (e = null != a ? a.image : a) ? e.caption : e, a)) + "</span>\n            </div>\n        </div>\n    </div>\n"
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, b, c, d) {
        var e, f = b.helperMissing;
        return (null != (e = (b.ifCond || a && a.ifCond || f).call(a, null != a ? a.templateId : a, "image_align_full", {
            name: "ifCond",
            hash: {},
            fn: this.program(1, d, 0),
            inverse: this.noop,
            data: d
        })) ? e : "") + (null != (e = (b.ifCond || a && a.ifCond || f).call(a, null != a ? a.templateId : a, "image_align_outer_fit", {
            name: "ifCond",
            hash: {},
            fn: this.program(3, d, 0),
            inverse: this.noop,
            data: d
        })) ? e : "") + (null != (e = (b.ifCond || a && a.ifCond || f).call(a, null != a ? a.templateId : a, "image_align_outer_with", {
            name: "ifCond",
            hash: {},
            fn: this.program(5, d, 0),
            inverse: this.noop,
            data: d
        })) ? e : "") + (null != (e = (b.ifCond || a && a.ifCond || f).call(a, null != a ? a.templateId : a, "image_align_content_fit", {
            name: "ifCond",
            hash: {},
            fn: this.program(7, d, 0),
            inverse: this.noop,
            data: d
        })) ? e : "") + (null != (e = (b.ifCond || a && a.ifCond || f).call(a, null != a ? a.templateId : a, "image_align_content_with", {
            name: "ifCond",
            hash: {},
            fn: this.program(9, d, 0),
            inverse: this.noop,
            data: d
        })) ? e : "") + (null != (e = (b.ifCond || a && a.ifCond || f).call(a, null != a ? a.templateId : a, "image_align_inner", {
            name: "ifCond",
            hash: {},
            fn: this.program(11, d, 0),
            inverse: this.noop,
            data: d
        })) ? e : "") + (null != (e = (b.ifCond || a && a.ifCond || f).call(a, null != a ? a.templateId : a, "image_align_text", {
            name: "ifCond",
            hash: {},
            fn: this.program(13, d, 0),
            inverse: this.noop,
            data: d
        })) ? e : "")
    },
    useData: !0
}), this.BE.Templates["editor.video.hbs"] = Handlebars.template({
    1: function (a, b, c, d) {
        var e, f, g = b.helperMissing,
            h = "function";
        return '    <div class="wrap_item item_type_video" data-app="' + this.escapeExpression((f = null != (f = b.data || (null != a ? a.data : a)) ? f : g, typeof f === h ? f.call(a, {
            name: "data",
            hash: {},
            data: d
        }) : f)) + '">\n		<div class="wrap_full">\n			<div class="wrap_video">\n				' + (null != (f = null != (f = b.tag || (null != a ? a.tag : a)) ? f : g, e = typeof f === h ? f.call(a, {
            name: "tag",
            hash: {},
            data: d
        }) : f) ? e : "") + '\n				<span class="text_caption"></span>\n			</div>\n		</div>\n	</div>\n'
    },
    3: function (a, b, c, d) {
        var e, f, g = b.helperMissing,
            h = "function",
            i = this.escapeExpression;
        return '    <div class="wrap_item item_type_video" data-app="' + i((f = null != (f = b.data || (null != a ? a.data : a)) ? f : g, typeof f === h ? f.call(a, {
            name: "data",
            hash: {},
            data: d
        }) : f)) + '">\n		<div class="wrap_outer">\n			<div class="wrap_video">\n				' + (null != (f = null != (f = b.tag || (null != a ? a.tag : a)) ? f : g, e = typeof f === h ? f.call(a, {
            name: "tag",
            hash: {},
            data: d
        }) : f) ? e : "") + '\n				<span class="text_caption">' + i(this.lambda(null != (e = null != a ? a.videoData : a) ? e.caption : e, a)) + "</span>\n			</div>\n		</div>\n	</div>\n"
    },
    5: function (a, b, c, d) {
        var e, f, g = b.helperMissing,
            h = "function",
            i = this.escapeExpression;
        return '	<div class="wrap_item item_type_video" data-app="' + i((f = null != (f = b.data || (null != a ? a.data : a)) ? f : g, typeof f === h ? f.call(a, {
            name: "data",
            hash: {},
            data: d
        }) : f)) + '">\n		<div class="wrap_content">\n			<div class="wrap_video">\n				' + (null != (f = null != (f = b.tag || (null != a ? a.tag : a)) ? f : g, e = typeof f === h ? f.call(a, {
            name: "tag",
            hash: {},
            data: d
        }) : f) ? e : "") + '\n				<span class="text_caption">' + i(this.lambda(null != (e = null != a ? a.videoData : a) ? e.caption : e, a)) + "</span>\n			</div>\n		</div>\n	</div>\n"
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function (a, b, c, d) {
        var e, f = b.helperMissing;
        return (null != (e = (b.ifCond || a && a.ifCond || f).call(a, null != a ? a.id : a, "video_align_full", {
            name: "ifCond",
            hash: {},
            fn: this.program(1, d, 0),
            inverse: this.noop,
            data: d
        })) ? e : "") + (null != (e = (b.ifCond || a && a.ifCond || f).call(a, null != a ? a.id : a, "video_align_outer_fit", {
            name: "ifCond",
            hash: {},
            fn: this.program(3, d, 0),
            inverse: this.noop,
            data: d
        })) ? e : "") + (null != (e = (b.ifCond || a && a.ifCond || f).call(a, null != a ? a.id : a, "video_align_content_fit", {
            name: "ifCond",
            hash: {},
            fn: this.program(5, d, 0),
            inverse: this.noop,
            data: d
        })) ? e : "")
    },
    useData: !0
});