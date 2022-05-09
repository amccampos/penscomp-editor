import Blockly from 'blockly/core.js'

Blockly.Blocks['lists_addItem'] = {
  init: function() {
    this.jsonInit({
      "message0": "acrescente %1 na lista %2",
      "args0": [
        {
          "type": "input_value",
          "name": "ITEM",
          "align": "RIGHT",
        },
        {
          "type": "field_variable",
          "name": "LIST",
          "variable": null,
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "list_blocks",
    });
  }
}

Blockly.Blocks['lists_getItem'] = {
  init: function() {
    this.jsonInit({
      "message0": "item %1 da lista %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INDEX",
          "check": "Number",
          "align": "RIGHT",
        },
        {
          "type": "field_variable",
          "name": "LIST",
          "variable": null,
        },
      ],
      "output": null,
      "inputsInline": true,
      "style": "list_blocks",
    });
  }
}


Blockly.Blocks['lists_setItem'] = {
  init: function() {
    this.jsonInit({
      "message0": "faça o item %1 da lista %2 valer %3",
      "args0": [
        {
          "type": "input_value",
          "name": "INDEX",
          "check": "Number",
          "align": "RIGHT",
        },
        {
          "type": "field_variable",
          "name": "LIST",
          "variable": null,
        },
        {
          "type": "input_value",
          "name": "ITEM",
          "align": "RIGHT",
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "list_blocks",
    });
  }
}


const Python = Blockly['Python']
Python['lists_addItem'] = function(block) {
  const list = Python.variableDB_.getName(block.getFieldValue('LIST'), Blockly.VARIABLE_CATEGORY_NAME) || []
  const item = Python.valueToCode(block, 'ITEM', Python.ORDER_NONE) || '0'
  const code = `${list}.append(${item})\n`
  return code
}

Python['lists_getItem'] = function(block) {
  const index = Python.valueToCode(block, 'INDEX', Python.ORDER_NONE) || '0'
  const list = Python.variableDB_.getName(block.getFieldValue('LIST'), Blockly.VARIABLE_CATEGORY_NAME) || []
  const code = `${list}[${index}]\n`
  return [code, Python.ORDER_NONE];
}

Python['lists_setItem'] = function(block) {
  const index = Python.valueToCode(block, 'INDEX', Python.ORDER_NONE) || '0'
  const item = Python.valueToCode(block, 'ITEM', Python.ORDER_NONE) || '0'
  const list = Python.variableDB_.getName(block.getFieldValue('LIST'), Blockly.VARIABLE_CATEGORY_NAME) || []
  const code = `${list}[${index}] = ${item}\n`
  return code
}

// ---

const Js = Blockly['JavaScript']
Js['lists_addItem'] = function(block) {
  const list = Js.variableDB_.getName(block.getFieldValue('LIST'), Blockly.VARIABLE_CATEGORY_NAME) || []
  const item = Js.valueToCode(block, 'ITEM', Js.ORDER_NONE) || '0'
  const code = `${list}.push(${item})\n`
  return code
}

Js['lists_getItem'] = function(block) {
  const index = Js.valueToCode(block, 'INDEX', Js.ORDER_NONE) || '0'
  const list = Js.variableDB_.getName(block.getFieldValue('LIST'), Blockly.VARIABLE_CATEGORY_NAME) || []
  const code = `${list}[${index}]\n`
  return [code, Js.ORDER_NONE];
}

Js['lists_setItem'] = function(block) {
  const index = Js.valueToCode(block, 'INDEX', Js.ORDER_NONE) || '0'
  const item = Js.valueToCode(block, 'ITEM', Js.ORDER_NONE) || '0'
  const list = Js.variableDB_.getName(block.getFieldValue('LIST'), Blockly.VARIABLE_CATEGORY_NAME) || []
  const code = `${list}[${index}] = ${item}\n`
  return code
}
