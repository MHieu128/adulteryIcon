var textList = 'abcdefghiklmnopqrstuvwxyz';
var iconList = ['π','π','π','π','π₯°','π€£','π₯²','βΊοΈ','π','π','π','π','π','π','π','π','π','π','βΉοΈ','π‘','π','π³','π©','π­','π '];


var encodeFunc = () => {
    let rawTest = $("#rawTest").val();
    rawTest = rawTest.toLowerCase();
    for(let i = 0; i < textList.length; i++)
        rawTest = rawTest.replaceAll(textList[i], iconList[i]);
    $("#encryptedIcon").text(rawTest);
}

var decodeFunc = () => {
    let rawIcon = $("#rawIcon").val();
    for(let i = 0; i < textList.length; i++)
        rawIcon = rawIcon.replaceAll(iconList[i], textList[i]);
    $("#decryptedText").text(rawIcon);
}