(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1,2,3,4,5,7,8,9,10,12],{

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaImage", function() { return MetaImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meta_image_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _meta_image_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_meta_image_css__WEBPACK_IMPORTED_MODULE_1__);



var MetaImageComponent = function MetaImageComponent(_ref) {
  var image = _ref.image;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "meta-image",
    src: image,
    alt: ""
  });
};

var MetaImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(MetaImageComponent);

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./assets/images/icons/vk-vlaus.png
/* harmony default export */ var vk_vlaus = (__webpack_require__.p + "f463b5d4c6778ea2d44600b44a6facba.png");
// CONCATENATED MODULE: ./assets/images/icons/instagram-vlaus.png
/* harmony default export */ var instagram_vlaus = (__webpack_require__.p + "5715ac147653466aaf0600cddc2c3f0e.png");
// EXTERNAL MODULE: ./pages/album/components/social-links/social-links.css
var social_links = __webpack_require__(44);

// CONCATENATED MODULE: ./pages/album/components/social-links/social-links.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLinks", function() { return social_links_SocialLinks; });




var social_links_SocialLinks = function SocialLinks() {
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "social"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "social__item"
  }, /*#__PURE__*/react_default.a.createElement("a", {
    className: "social__link",
    href: "https://vk.com/vlados_lalala",
    target: "_blank"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: vk_vlaus,
    alt: ""
  }))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "social__item"
  }, /*#__PURE__*/react_default.a.createElement("a", {
    className: "social__link",
    href: "https://www.instagram.com/vlados_lalala/",
    target: "_blank"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: instagram_vlaus,
    alt: ""
  }))));
};

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBlock", function() { return InfoBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meta_image_meta_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _info_block_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var _info_block_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_info_block_css__WEBPACK_IMPORTED_MODULE_2__);




var InfoBlockComponent = function InfoBlockComponent(_ref) {
  var singer = _ref.singer,
      trackName = _ref.trackName,
      image = _ref.image,
      metaImage = _ref.metaImage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info__poster"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image,
    alt: "poster"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info__meta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "singer"
  }, singer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "track-name"
  }, trackName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_meta_image_meta_image__WEBPACK_IMPORTED_MODULE_1__["MetaImage"], {
    image: metaImage
  })));
};

var InfoBlock = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(InfoBlockComponent);

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./pages/album/components/social-links/social-links.jsx + 2 modules
var social_links = __webpack_require__(20);

// CONCATENATED MODULE: ./assets/images/icons/vk.svg
/* harmony default export */ var vk = (__webpack_require__.p + "ae1f848a04a4647197acd673633ffc78.svg");
// CONCATENATED MODULE: ./assets/images/icons/yandex.png
/* harmony default export */ var yandex = (__webpack_require__.p + "18907c0277c3aa83fa1e90ab6cfbcd6d.png");
// CONCATENATED MODULE: ./assets/images/icons/google.png
/* harmony default export */ var google = (__webpack_require__.p + "87dbbb856532b9c5c3839c65ddfc1802.png");
// CONCATENATED MODULE: ./assets/images/icons/youtube.png
/* harmony default export */ var youtube = (__webpack_require__.p + "f8e616cc298c61089bc8a55acb289af8.png");
// CONCATENATED MODULE: ./assets/images/icons/apple.png
/* harmony default export */ var apple = (__webpack_require__.p + "297925a5cacc2fcbbbc42c628ccea551.png");
// CONCATENATED MODULE: ./assets/images/icons/spotify.png
/* harmony default export */ var spotify = (__webpack_require__.p + "bff0a00dadb6a713f9d775615390af58.png");
// CONCATENATED MODULE: ./assets/images/icons/amazon.png
/* harmony default export */ var amazon = (__webpack_require__.p + "814a4e97003e607a0e121551648b0b2a.png");
// CONCATENATED MODULE: ./assets/images/icons/anghami.png
/* harmony default export */ var anghami = (__webpack_require__.p + "994a86de918e8742ad08a96ad8f85dfd.png");
// CONCATENATED MODULE: ./assets/images/icons/napster.png
/* harmony default export */ var napster = (__webpack_require__.p + "3aa4eb6976cb61cc92cfe9a4461a9322.png");
// EXTERNAL MODULE: ./pages/album/components/platform-links/platform-links.css
var platform_links = __webpack_require__(46);

// CONCATENATED MODULE: ./pages/album/components/platform-links/platform-links.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformLinks", function() { return PlatformLinks; });













var platform_links_PlatformLinksComponent = function PlatformLinksComponent(_ref) {
  var vkLink = _ref.vkLink,
      yandexLink = _ref.yandexLink,
      googleLink = _ref.googleLink,
      youtubeLink = _ref.youtubeLink,
      appleLink = _ref.appleLink,
      spotifyLink = _ref.spotifyLink,
      amazonLink = _ref.amazonLink,
      anghamiLink = _ref.anghamiLink,
      napsterLink = _ref.napsterLink;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "links"
  }, vkLink && /*#__PURE__*/react_default.a.createElement("div", {
    className: "links__item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "links__name"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: vk,
    alt: ""
  }), /*#__PURE__*/react_default.a.createElement("div", null, "VK")), /*#__PURE__*/react_default.a.createElement("a", {
    className: "link__button",
    href: vkLink,
    target: "_blank"
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C")), yandexLink && /*#__PURE__*/react_default.a.createElement("div", {
    className: "links__item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "links__name"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: yandex,
    alt: ""
  }), /*#__PURE__*/react_default.a.createElement("div", null, "Yandex Music")), /*#__PURE__*/react_default.a.createElement("a", {
    className: "link__button",
    href: yandexLink,
    target: "_blank"
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C")), googleLink && /*#__PURE__*/react_default.a.createElement("div", {
    className: "links__item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "links__name"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: google,
    alt: ""
  }), /*#__PURE__*/react_default.a.createElement("div", null, "Google Play")), /*#__PURE__*/react_default.a.createElement("a", {
    className: "link__button",
    href: googleLink,
    target: "_blank"
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C")), youtubeLink && /*#__PURE__*/react_default.a.createElement("div", {
    className: "links__item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "links__name"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: youtube,
    alt: ""
  }), /*#__PURE__*/react_default.a.createElement("div", null, "YouTube Music")), /*#__PURE__*/react_default.a.createElement("a", {
    className: "link__button",
    href: youtubeLink,
    target: "_blank"
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C")), appleLink && /*#__PURE__*/react_default.a.createElement("div", {
    className: "links__item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "links__name"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: apple,
    alt: ""
  }), /*#__PURE__*/react_default.a.createElement("div", null, "Apple Music")), /*#__PURE__*/react_default.a.createElement("a", {
    className: "link__button",
    href: appleLink,
    target: "_blank"
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C")), spotifyLink && /*#__PURE__*/react_default.a.createElement("div", {
    className: "links__item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "links__name"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: spotify,
    alt: ""
  }), /*#__PURE__*/react_default.a.createElement("div", null, "Spotify")), /*#__PURE__*/react_default.a.createElement("a", {
    className: "link__button",
    href: spotifyLink,
    target: "_blank"
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C")), amazonLink && /*#__PURE__*/react_default.a.createElement("div", {
    className: "links__item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "links__name"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: amazon,
    alt: ""
  }), /*#__PURE__*/react_default.a.createElement("div", null, "Amazon Music")), /*#__PURE__*/react_default.a.createElement("a", {
    className: "link__button",
    href: amazonLink,
    target: "_blank"
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C")), anghamiLink && /*#__PURE__*/react_default.a.createElement("div", {
    className: "links__item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "links__name"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: anghami,
    alt: ""
  }), /*#__PURE__*/react_default.a.createElement("div", null, "Anghami")), /*#__PURE__*/react_default.a.createElement("a", {
    className: "link__button",
    href: anghamiLink,
    target: "_blank"
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C")), napsterLink && /*#__PURE__*/react_default.a.createElement("div", {
    className: "links__item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "links__name"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    src: napster,
    alt: ""
  }), /*#__PURE__*/react_default.a.createElement("div", null, "Napster")), /*#__PURE__*/react_default.a.createElement("a", {
    className: "link__button",
    href: napsterLink,
    target: "_blank"
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C")), /*#__PURE__*/react_default.a.createElement(social_links["SocialLinks"], null));
};

var PlatformLinks = Object(react["memo"])(platform_links_PlatformLinksComponent);

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_album_kazhdomu_svoyo_kazhdomu_svoyo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var _pages_album_kazhdomu_svoyo_kazhdomu_svoyo_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_album_kazhdomu_svoyo_kazhdomu_svoyo_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _back_home_button_back_home_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _pages_album_components_platform_links_platform_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _pages_album_components_info_block_info_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);






var KazhdomuSvoyo = function KazhdomuSvoyo(_ref) {
  var singer = _ref.singer,
      trackName = _ref.trackName,
      images = _ref.images,
      platforms = _ref.platforms;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "background-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_back_home_button_back_home_button__WEBPACK_IMPORTED_MODULE_2__[/* BackHomeButton */ "a"], {
    isWhite: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_album_components_info_block_info_block__WEBPACK_IMPORTED_MODULE_4__["InfoBlock"], {
    singer: singer,
    trackName: trackName,
    image: images.image,
    metaImage: images.metaImage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_album_components_platform_links_platform_links__WEBPACK_IMPORTED_MODULE_3__["PlatformLinks"], {
    vkLink: platforms.vkLink,
    yandexLink: platforms.yandexLink,
    googleLink: platforms.googleLink,
    youtubeLink: platforms.youtubeLink,
    appleLink: platforms.appleLink,
    spotifyLink: platforms.spotifyLink,
    amazonLink: platforms.amazonLink,
    anghamiLink: platforms.anghamiLink,
    napsterLink: platforms.napsterLink
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (KazhdomuSvoyo);

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);