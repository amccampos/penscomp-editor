import Blockly from 'blockly/core.js'

Blockly.Blocks['controls_for_count'] = {
  init: function() {
    this.jsonInit({
      "message0": "para %1 de %2 até %3",
      "args0": [
        {
          "type": "field_variable",
          "name": "VAR",
          "variable": null,
        },
        {
          "type": "input_value",
          "name": "FROM",
          "check": "Number",
          "align": "RIGHT",
        },
        {
          "type": "input_value",
          "name": "TO",
          "check": "Number",
          "align": "RIGHT",
        }
      ],
      "message1": "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
      "args1": [{
        "type": "input_statement",
        "name": "DO",
      }],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "loop_blocks",
      "helpUrl": "%{BKY_CONTROLS_FOR_HELPURL}",
      "extensions": [
        "contextMenu_newGetVariableBlock",
        "controls_for_tooltip",
      ],
    });
  }
}

const Python = Blockly['Python']
Python['controls_for_count'] = function(block) {
  var variable0 = Python.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  var argument0 = Python.valueToCode(block, 'FROM',
      Python.ORDER_NONE) || '0';
  var argument1 = Python.valueToCode(block, 'TO',
      Python.ORDER_NONE) || '0';
  var increment: string | number = '1';
  var branch = Python.statementToCode(block, 'DO');
  branch = Python.addLoopTrap(branch, block) || Python.PASS;

  var code = '';
  var range;

  // Helper functions.
  var defineUpRange = function() {
    return Python.provideFunction_(
        'upRange',
        ['def ' + Python.FUNCTION_NAME_PLACEHOLDER_ +
            '(start, stop, step):',
        '  while start <= stop:',
        '    yield start',
        '    start += abs(step)']);
  };
  var defineDownRange = function() {
    return Python.provideFunction_(
        'downRange',
        ['def ' + Python.FUNCTION_NAME_PLACEHOLDER_ +
            '(start, stop, step):',
        '  while start >= stop:',
        '    yield start',
        '    start -= abs(step)']);
  };
  // Arguments are legal Python code (numbers or strings returned by scrub()).
  var generateUpDownRange = function(start, end, inc) {
    return '(' + start + ' <= ' + end + ') and ' +
        defineUpRange() + '(' + start + ', ' + end + ', ' + inc + ') or ' +
        defineDownRange() + '(' + start + ', ' + end + ', ' + inc + ')';
  };

  if (Blockly.isNumber(argument0) && Blockly.isNumber(argument1) &&
      Blockly.isNumber(increment)) {
    // All parameters are simple numbers.
    argument0 = Number(argument0);
    argument1 = Number(argument1);
    increment = Math.abs(Number(increment));
    if (argument0 % 1 === 0 && argument1 % 1 === 0 && increment % 1 === 0) {
      // All parameters are integers.
      if (argument0 <= argument1) {
        // Count up.
        argument1++;
        if (argument0 == 0 && increment == 1) {
          // If starting index is 0, omit it.
          range = argument1;
        } else {
          range = argument0 + ', ' + argument1;
        }
        // If increment isn't 1, it must be explicit.
        if (increment != 1) {
          range += ', ' + increment;
        }
      } else {
        // Count down.
        argument1--;
        range = argument0 + ', ' + argument1 + ', -' + increment;
      }
      range = 'range(' + range + ')';
    } else {
      // At least one of the parameters is not an integer.
      if (argument0 < argument1) {
        range = defineUpRange();
      } else {
        range = defineDownRange();
      }
      range += '(' + argument0 + ', ' + argument1 + ', ' + increment + ')';
    }
  } else {
    // Cache non-trivial values to variables to prevent repeated look-ups.
    var scrub = function(arg, suffix) {
      if (Blockly.isNumber(arg)) {
        // Simple number.
        arg = Number(arg);
      } else if (arg.match(/^\w+$/)) {
        // Variable.
        arg = 'float(' + arg + ')';
      } else {
        // It's complicated.
        var varName = Python.variableDB_.getDistinctName(
            variable0 + suffix, Blockly.VARIABLE_CATEGORY_NAME);
        code += varName + ' = float(' + arg + ')\n';
        arg = varName;
      }
      return arg;
    };
    var startVar = scrub(argument0, '_start');
    var endVar = scrub(argument1, '_end');
    var incVar = scrub(increment, '_inc');

    if (typeof startVar == 'number' && typeof endVar == 'number') {
      if (startVar < endVar) {
        range = defineUpRange();
      } else {
        range = defineDownRange();
      }
      range += '(' + startVar + ', ' + endVar + ', ' + incVar + ')';
    } else {
      // We cannot determine direction statically.
      range = generateUpDownRange(startVar, endVar, incVar);
    }
  }
  code += 'for ' + variable0 + ' in ' + range + ':\n' + branch;
  return code;
}

const JavaScript = Blockly['JavaScript']
JavaScript['controls_for_count'] = function(block) {
  // For loop.
  var variable0 = JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  var argument0 = JavaScript.valueToCode(block, 'FROM',
      JavaScript.ORDER_ASSIGNMENT) || '0';
  var argument1 = JavaScript.valueToCode(block, 'TO',
      JavaScript.ORDER_ASSIGNMENT) || '0';
  var increment: string | number = '1';
  var branch = JavaScript.statementToCode(block, 'DO');
  branch = JavaScript.addLoopTrap(branch, block);
  var code;
  if (Blockly.isNumber(argument0) && Blockly.isNumber(argument1) &&
      Blockly.isNumber(increment)) {
    // All arguments are simple numbers.
    var up = Number(argument0) <= Number(argument1);
    code = 'for (' + variable0 + ' = ' + argument0 + '; ' +
        variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
        variable0;
    var step = Math.abs(Number(increment));
    if (step == 1) {
      code += up ? '++' : '--';
    } else {
      code += (up ? ' += ' : ' -= ') + step;
    }
    code += ') {\n' + branch + '}\n';
  } else {
    code = '';
    // Cache non-trivial values to variables to prevent repeated look-ups.
    var startVar = argument0;
    if (!argument0.match(/^\w+$/) && !Blockly.isNumber(argument0)) {
      startVar = JavaScript.variableDB_.getDistinctName(
          variable0 + '_start', Blockly.VARIABLE_CATEGORY_NAME);
      code += 'var ' + startVar + ' = ' + argument0 + ';\n';
    }
    var endVar = argument1;
    if (!argument1.match(/^\w+$/) && !Blockly.isNumber(argument1)) {
      endVar = JavaScript.variableDB_.getDistinctName(
          variable0 + '_end', Blockly.VARIABLE_CATEGORY_NAME);
      code += 'var ' + endVar + ' = ' + argument1 + ';\n';
    }
    // Determine loop direction at start, in case one of the bounds
    // changes during loop execution.
    var incVar = JavaScript.variableDB_.getDistinctName(
        variable0 + '_inc', Blockly.VARIABLE_CATEGORY_NAME);
    code += 'var ' + incVar + ' = ';
    if (Blockly.isNumber(increment)) {
      code += Math.abs(Number(increment)) + ';\n';
    } else {
      code += 'Math.abs(' + increment + ');\n';
    }
    code += 'if (' + startVar + ' > ' + endVar + ') {\n';
    code += JavaScript.INDENT + incVar + ' = -' + incVar + ';\n';
    code += '}\n';
    code += 'for (' + variable0 + ' = ' + startVar + '; ' +
        incVar + ' >= 0 ? ' +
        variable0 + ' <= ' + endVar + ' : ' +
        variable0 + ' >= ' + endVar + '; ' +
        variable0 + ' += ' + incVar + ') {\n' +
        branch + '}\n';
  }
  return code;
};
