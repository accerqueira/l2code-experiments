Blockly.Blocks['Image_A'] = {
    init: function() {
        this.appendDummyInput().appendField("Aa").appendField(new Blockly.FieldImage("./images/Aa.png", 120, 120, "Aa"));
        this.setOutput(true, "String");
        this.setColour(45);
        this.setTooltip("Aa");
    }
};

Blockly.Blocks['Image_B'] = {
    init: function() {
        this.appendDummyInput().appendField("Bb").appendField(new Blockly.FieldImage("./images/Bb.png", 120, 120, "Bb"));
        this.setOutput(true, "String");
        this.setColour(45);
        this.setTooltip("Bb");
    }
};

Blockly.Blocks['Image_C'] = {
    init: function() {
        this.appendDummyInput().appendField("Cc").appendField(new Blockly.FieldImage("./images/Cc.png", 120, 120, "Cc"));
        this.setOutput(true, "String");
        this.setColour(45);
        this.setTooltip("Cc");
    }
};

Blockly.Blocks['Image_D'] = {
    init: function() {
        this.appendDummyInput().appendField("Dd").appendField(new Blockly.FieldImage("./images/Dd.png", 120, 120, "Dd"));
        this.setOutput(true, "String");
        this.setColour(45);
        this.setTooltip("Dd");
    }
};

Blockly.Blocks['Image_E'] = {
    init: function() {
        this.appendDummyInput().appendField("Ee").appendField(new Blockly.FieldImage("./images/Ee.png", 120, 120, "Ee"));
        this.setOutput(true, "String");
        this.setColour(45);
        this.setTooltip("Ee");
    }
};

Blockly.Blocks['Image_F'] = {
    init: function() {
        this.appendDummyInput().appendField("Ff").appendField(new Blockly.FieldImage("./images/Ff.png", 120, 120, "Ff"));
        this.setOutput(true, "String");
        this.setColour(45);
        this.setTooltip("Ff");
    }
};

Blockly.Blocks['Image_G'] = {
    init: function() {
        this.appendDummyInput().appendField("Gg").appendField(new Blockly.FieldImage("./images/Gg.png", 120, 120, "Gg"));
        this.setOutput(true, "String");
        this.setColour(45);
        this.setTooltip("Gg");
    }
};

Blockly.Blocks['Image_H'] = {
    init: function() {
        this.appendDummyInput().appendField("Hh").appendField(new Blockly.FieldImage("./images/Hh.png", 120, 120, "Hh"));
        this.setOutput(true, "String");
        this.setColour(45);
        this.setTooltip("Hh");
    }
};

Blockly.Blocks['Image_Stripes'] = {
    init: function() {
        this.appendDummyInput().appendField("Stripes").appendField(new Blockly.FieldImage("./images/stripes.png", 120, 120, "Stripes"));
        this.setOutput(true, "String");
        this.setColour(45);
        this.setTooltip("Stripes");
    }
};


Blockly.Blocks['Game'] = {
    init: function() {
        this.appendDummyInput().appendField("Game");
        this.appendValueInput("Deck").setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField("Deck");
        this.appendStatementInput("Rules").setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField("Rules");
        this.setColour(135);
        this.setTooltip("Game");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['Deck'] = {
    init: function() {
        this.appendDummyInput().appendField("Deck");
        this.appendValueInput("Frontfaces").setCheck("Array").setAlign(Blockly.ALIGN_RIGHT).appendField("Frontfaces");
        this.appendValueInput("Backface").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField("Backface");
        this.setOutput(true, "Array");
        this.setColour(180);
        this.setTooltip("Deck");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['Function_IsEndOfGame'] = {
    init: function() {
        this.appendDummyInput().appendField("IsEndOfGame");
        this.setOutput(true, "Boolean");
        this.setColour(0);
    }
};

Blockly.Blocks['Function_AreCardsEqual'] = {
    init: function() {
        this.appendDummyInput().appendField("AreCardsEqual");
        this.setOutput(true, "Boolean");
        this.setColour(0);
    }
};

Blockly.Blocks['Function_ShuffleCards'] = {
    init: function() {
        this.appendDummyInput().appendField("ShuffleCards");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(225);
    }
};

Blockly.Blocks['Function_ShowCardPicked'] = {
    init: function() {
        this.appendDummyInput().appendField("ShowCardPicked");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(225);
    }
};

Blockly.Blocks['Function_HideCards'] = {
    init: function() {
        this.appendDummyInput().appendField("HideCards");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
    }
};

Blockly.Blocks['Function_TakeCards'] = {
    init: function() {
        this.appendDummyInput().appendField("TakeCards");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
    }
};

Blockly.Blocks['Function_ShowResults'] = {
    init: function() {
        this.appendDummyInput().appendField("ShowResults");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(225);
    }
};