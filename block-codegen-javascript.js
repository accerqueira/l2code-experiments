Blockly.JavaScript['Image_A'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '"Aa"';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code];
};

Blockly.JavaScript['Image_B'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '"Bb"';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code];
};

Blockly.JavaScript['Image_C'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '"Cc"';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code];
};

Blockly.JavaScript['Image_D'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '"Dd"';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code];
};

Blockly.JavaScript['Image_E'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '"Ee"';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code];
};

Blockly.JavaScript['Image_F'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '"Ff"';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code];
};

Blockly.JavaScript['Image_G'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '"Gg"';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code];
};

Blockly.JavaScript['Image_H'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '"Hh"';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code];
};

Blockly.JavaScript['Image_Stripes'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '"stripes"';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code];
};

Blockly.JavaScript['Game'] = function(block) {
    var value_deck = Blockly.JavaScript.valueToCode(block, 'Deck', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_regras = Blockly.JavaScript.statementToCode(block, 'Rules');
    // TODO: Assemble JavaScript into code variable.
    var code = `NewGame(${value_deck}, function*(ctx) {\n${statements_regras}})`;
    return code;
};

Blockly.JavaScript['Deck'] = function(block) {
    var value_cartas = Blockly.JavaScript.valueToCode(block, 'Frontfaces', Blockly.JavaScript.ORDER_ATOMIC);
    var value_verso = Blockly.JavaScript.valueToCode(block, 'Backface', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `{ fronts: ${value_cartas || '"[]"'}, back: ${value_verso || '""'} }`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code];
};

Blockly.JavaScript['Function_IsEndOfGame'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = `yield { func: IsEndOfGame }`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['Function_AreCardsEqual'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = `yield { func: AreCardsEqual }`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['Function_ShowResults'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = `yield { func: ShowResults }`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['Function_ShuffleCards'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = `yield { func: ShuffleCards };\n`;
    return code;
};

Blockly.JavaScript['Function_ShowCardPicked'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = `yield { func: ShowCardPicked };\n`;
    return code;
};

Blockly.JavaScript['Function_HideCards'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = `yield { func: HideCards };\n`;
    return code;
};

Blockly.JavaScript['Function_TakeCards'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = `yield { func: TakeCards };\n`;
    return code;
};

Blockly.JavaScript['logic_compare'] = function(block) {
    // Comparison operator.
    var OPERATORS = {
        'EQ': '==',
        'NEQ': '!=',
        'LT': '<',
        'LTE': '<=',
        'GT': '>',
        'GTE': '>='
    };
    var operator = OPERATORS[block.getFieldValue('OP')];
    var order = (operator == '==' || operator == '!=') ?
        Blockly.JavaScript.ORDER_EQUALITY :
        Blockly.JavaScript.ORDER_RELATIONAL;
    var argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || '0';
    var argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || '0';
    var code = `${argument0}.valueOf() ${operator} ${argument1}.valueOf()`;
    return [code, order];
};