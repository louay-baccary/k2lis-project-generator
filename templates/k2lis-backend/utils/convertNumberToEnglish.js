exports.convertNumbers2English = (string) => {
    return string
      .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (c) {
        return c.charCodeAt(0) - 1632;
      })
      .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (c) {
        return c.charCodeAt(0) - 1776;
      });
  };
  