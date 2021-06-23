var encodeFunc = () => {
    let rawTest = $("#rawTest").val();
    rawTest = rawTest.replaceAll('a', '😀');
    rawTest = rawTest.replaceAll('b', '😃');
    rawTest = rawTest.replaceAll('c', '😁');
    rawTest = rawTest.replaceAll('d', '😅');
    rawTest = rawTest.replaceAll('e', '🥰');
    rawTest = rawTest.replaceAll('f', '🤣');
    rawTest = rawTest.replaceAll('g', '🥲');
    rawTest = rawTest.replaceAll('h', '☺️');
    rawTest = rawTest.replaceAll('i', '😊');
    rawTest = rawTest.replaceAll('k', '😇');
    rawTest = rawTest.replaceAll('l', '😉');
    rawTest = rawTest.replaceAll('m', '😒');
    rawTest = rawTest.replaceAll('n', '😞');
    rawTest = rawTest.replaceAll('o', '😙');
    rawTest = rawTest.replaceAll('p', '😟');
    rawTest = rawTest.replaceAll('q', '😕');
    rawTest = rawTest.replaceAll('r', '🙂');
    rawTest = rawTest.replaceAll('s', '🙃');
    rawTest = rawTest.replaceAll('t', '☹️');
    rawTest = rawTest.replaceAll('u', '😡');
    rawTest = rawTest.replaceAll('v', '😍');
    rawTest = rawTest.replaceAll('w', '😳');
    rawTest = rawTest.replaceAll('x', '😩');
    rawTest = rawTest.replaceAll('y', '😭');
    rawTest = rawTest.replaceAll('z', '😠');
    $("#encryptedIcon").text(rawTest);
}

var decodeFunc = () => {
    let rawIcon = $("#rawIcon").val();
    rawIcon = rawIcon.replaceAll('😀', 'a');
    rawIcon = rawIcon.replaceAll('😃', 'b');
    rawIcon = rawIcon.replaceAll('😁', 'c');
    rawIcon = rawIcon.replaceAll('😅', 'd');
    rawIcon = rawIcon.replaceAll('🥰', 'e');
    rawIcon = rawIcon.replaceAll('🤣', 'f');
    rawIcon = rawIcon.replaceAll('🥲', 'g');
    rawIcon = rawIcon.replaceAll('☺️', 'h');
    rawIcon = rawIcon.replaceAll('😊', 'i');
    rawIcon = rawIcon.replaceAll('😇', 'k');
    rawIcon = rawIcon.replaceAll('😉', 'l');
    rawIcon = rawIcon.replaceAll('😒', 'm');
    rawIcon = rawIcon.replaceAll('😞', 'n');
    rawIcon = rawIcon.replaceAll('😙', 'o');
    rawIcon = rawIcon.replaceAll('😟', 'p');
    rawIcon = rawIcon.replaceAll('😕', 'q');
    rawIcon = rawIcon.replaceAll('🙂', 'r');
    rawIcon = rawIcon.replaceAll('🙃', 's');
    rawIcon = rawIcon.replaceAll('☹️', 't');
    rawIcon = rawIcon.replaceAll('😡', 'u');
    rawIcon = rawIcon.replaceAll('😍', 'v');
    rawIcon = rawIcon.replaceAll('😳', 'w');
    rawIcon = rawIcon.replaceAll('😩', 'x');
    rawIcon = rawIcon.replaceAll('😭', 'y');
    rawIcon = rawIcon.replaceAll('😠', 'z');
    $("#decryptedText").text(rawIcon);
}