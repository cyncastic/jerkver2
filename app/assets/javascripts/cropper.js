var AvatarCropper,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

jQuery(function() {
  var initCrop;
  initCrop = function() {
    return new AvatarCropper();
  };
  return setTimeout(initCrop, 1000);
});

AvatarCropper = (function() {
  function AvatarCropper() {
    this.update = __bind(this.update, this);
    $('#cropbox').Jcrop({
      aspectRatio: 1,
      setSelect: [0, 0, 300, 300],
      onSelect: this.update,
      onChange: this.update
    });
  }

  AvatarCropper.prototype.update = function(coords) {
    $('#wall_crop_x').val(coords.x);
    $('#wall_crop_y').val(coords.y);
    $('#wall_crop_w').val(coords.w);
    $('#wall_crop_h').val(coords.h);
    $('#artwork_crop_x').val(coords.x);
    $('#artwork_crop_y').val(coords.y);
    $('#artwork_crop_w').val(coords.w);
    return $('#artwork_crop_h').val(coords.h);
  };

  return AvatarCropper;

})();