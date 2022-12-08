import DarkTheme from "@blockly/theme-dark";

const INITIAL_XML =
  '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>';

// const INITIAL_TOOLBOX_JSON = {
//   kind: "categoryToolbox",
//   contents: [
//     {
//       kind: "category",
//       name: "Logic",
//       colour: 210,
//       contents: [
//         {
//           kind: "block",
//           type: "controls_if",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '<block type="logic_compare"><field name="OP">EQ</field></block>',
//         },
//         {
//           kind: "block",
//           blockxml:
//             '<block type="logic_operation"><field name="OP">AND</field></block>',
//         },
//         {
//           kind: "block",
//           type: "logic_negate",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '<block type="logic_boolean"><field name="BOOL">TRUE</field></block>',
//         },
//         {
//           kind: "block",
//           type: "logic_null",
//         },
//         {
//           kind: "block",
//           type: "logic_ternary",
//         },
//       ],
//     },
//     {
//       kind: "category",
//       name: "Loops",
//       colour: 120,
//       contents: [
//         {
//           kind: "block",
//           blockxml:
//             '<block type="controls_repeat_ext">\n' +
//             '      <value name="TIMES">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">10</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="controls_whileUntil">\n' +
//             '      <field name="MODE">WHILE</field>\n' +
//             "    </block>",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="controls_for">\n' +
//             '      <field name="VAR" id="C(8;cYCF}~vSgkxzJ+{O" variabletype="">i</field>\n' +
//             '      <value name="FROM">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">1</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             '      <value name="TO">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">10</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             '      <value name="BY">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">1</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="controls_forEach">\n' +
//             '      <field name="VAR" id="Cg!CSk/ZJo2XQN3=VVrz" variabletype="">j</field>\n' +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="controls_flow_statements">\n' +
//             '      <field name="FLOW">BREAK</field>\n' +
//             "    </block>\n",
//         },
//       ],
//     },
//     {
//       kind: "category",
//       name: "Math",
//       colour: 230,
//       contents: [
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="math_round">\n' +
//             '      <field name="OP">ROUND</field>\n' +
//             '      <value name="NUM">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">3.1</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="math_number">\n' +
//             '      <field name="NUM">0</field>\n' +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="math_single">\n' +
//             '      <field name="OP">ROOT</field>\n' +
//             '      <value name="NUM">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">9</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="math_trig">\n' +
//             '      <field name="OP">SIN</field>\n' +
//             '      <value name="NUM">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">45</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="math_constant">\n' +
//             '      <field name="CONSTANT">PI</field>\n' +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="math_number_property">\n' +
//             '      <mutation divisor_input="false"></mutation>\n' +
//             '      <field name="PROPERTY">EVEN</field>\n' +
//             '      <value name="NUMBER_TO_CHECK">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">0</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="math_arithmetic">\n' +
//             '      <field name="OP">ADD</field>\n' +
//             '      <value name="A">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">1</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             '      <value name="B">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">1</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="math_on_list">\n' +
//             '      <mutation op="SUM"></mutation>\n' +
//             '      <field name="OP">SUM</field>\n' +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="math_modulo">\n' +
//             '      <value name="DIVIDEND">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">64</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             '      <value name="DIVISOR">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">10</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="math_constrain">\n' +
//             '      <value name="VALUE">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">50</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             '      <value name="LOW">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">1</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             '      <value name="HIGH">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">100</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="math_random_int">\n' +
//             '      <value name="FROM">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">1</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             '      <value name="TO">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">100</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           type: "math_random_float",
//         },
//       ],
//     },
//     {
//       kind: "category",
//       name: "Text",
//       colour: 160,
//       contents: [
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="text_charAt">\n' +
//             '      <mutation at="true"></mutation>\n' +
//             '      <field name="WHERE">FROM_START</field>\n' +
//             '      <value name="VALUE">\n' +
//             '        <block type="variables_get">\n' +
//             '          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n' +
//             "        </block>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="text">\n' +
//             '      <field name="TEXT"></field>\n' +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="text_append">\n' +
//             '      <field name="VAR" id=":};P,s[*|I8+L^-.EbRi" variabletype="">item</field>\n' +
//             '      <value name="TEXT">\n' +
//             '        <shadow type="text">\n' +
//             '          <field name="TEXT"></field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="text_length">\n' +
//             '      <value name="VALUE">\n' +
//             '        <shadow type="text">\n' +
//             '          <field name="TEXT">abc</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="text_isEmpty">\n' +
//             '      <value name="VALUE">\n' +
//             '        <shadow type="text">\n' +
//             '          <field name="TEXT"></field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="text_indexOf">\n' +
//             '      <field name="END">FIRST</field>\n' +
//             '      <value name="VALUE">\n' +
//             '        <block type="variables_get">\n' +
//             '          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n' +
//             "        </block>\n" +
//             "      </value>\n" +
//             '      <value name="FIND">\n' +
//             '        <shadow type="text">\n' +
//             '          <field name="TEXT">abc</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="text_join">\n' +
//             '      <mutation items="2"></mutation>\n' +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="text_getSubstring">\n' +
//             '      <mutation at1="true" at2="true"></mutation>\n' +
//             '      <field name="WHERE1">FROM_START</field>\n' +
//             '      <field name="WHERE2">FROM_START</field>\n' +
//             '      <value name="STRING">\n' +
//             '        <block type="variables_get">\n' +
//             '          <field name="VAR" id="q@$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>\n' +
//             "        </block>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="text_changeCase">\n' +
//             '      <field name="CASE">UPPERCASE</field>\n' +
//             '      <value name="TEXT">\n' +
//             '        <shadow type="text">\n' +
//             '          <field name="TEXT">abc</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="text_trim">\n' +
//             '      <field name="MODE">BOTH</field>\n' +
//             '      <value name="TEXT">\n' +
//             '        <shadow type="text">\n' +
//             '          <field name="TEXT">abc</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="text_print">\n' +
//             '      <value name="TEXT">\n' +
//             '        <shadow type="text">\n' +
//             '          <field name="TEXT">abc</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="text_prompt_ext">\n' +
//             '      <mutation type="TEXT"></mutation>\n' +
//             '      <field name="TYPE">TEXT</field>\n' +
//             '      <value name="TEXT">\n' +
//             '        <shadow type="text">\n' +
//             '          <field name="TEXT">abc</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//       ],
//     },
//     {
//       kind: "category",
//       name: "Lists",
//       colour: 259,
//       contents: [
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="lists_indexOf">\n' +
//             '      <field name="END">FIRST</field>\n' +
//             '      <value name="VALUE">\n' +
//             '        <block type="variables_get">\n' +
//             '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
//             "        </block>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="lists_create_with">\n' +
//             '      <mutation items="0"></mutation>\n' +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="lists_repeat">\n' +
//             '      <value name="NUM">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">5</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           type: "lists_length",
//         },
//         {
//           kind: "block",
//           type: "lists_isEmpty",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="lists_create_with">\n' +
//             '      <mutation items="3"></mutation>\n' +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="lists_getIndex">\n' +
//             '      <mutation statement="false" at="true"></mutation>\n' +
//             '      <field name="MODE">GET</field>\n' +
//             '      <field name="WHERE">FROM_START</field>\n' +
//             '      <value name="VALUE">\n' +
//             '        <block type="variables_get">\n' +
//             '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
//             "        </block>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="lists_setIndex">\n' +
//             '      <mutation at="true"></mutation>\n' +
//             '      <field name="MODE">SET</field>\n' +
//             '      <field name="WHERE">FROM_START</field>\n' +
//             '      <value name="LIST">\n' +
//             '        <block type="variables_get">\n' +
//             '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
//             "        </block>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="lists_getSublist">\n' +
//             '      <mutation at1="true" at2="true"></mutation>\n' +
//             '      <field name="WHERE1">FROM_START</field>\n' +
//             '      <field name="WHERE2">FROM_START</field>\n' +
//             '      <value name="LIST">\n' +
//             '        <block type="variables_get">\n' +
//             '          <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>\n' +
//             "        </block>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="lists_split">\n' +
//             '      <mutation mode="SPLIT"></mutation>\n' +
//             '      <field name="MODE">SPLIT</field>\n' +
//             '      <value name="DELIM">\n' +
//             '        <shadow type="text">\n' +
//             '          <field name="TEXT">,</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="lists_sort">\n' +
//             '      <field name="TYPE">NUMERIC</field>\n' +
//             '      <field name="DIRECTION">1</field>\n' +
//             "    </block>\n",
//         },
//       ],
//     },
//     {
//       kind: "category",
//       name: "Colour",
//       colour: 19,
//       contents: [
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="colour_picker">\n' +
//             '      <field name="COLOUR">#ff0000</field>\n' +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           type: "colour_random",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="colour_rgb">\n' +
//             '      <value name="RED">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">100</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             '      <value name="GREEN">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">50</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             '      <value name="BLUE">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">0</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//         {
//           kind: "block",
//           blockxml:
//             '    <block type="colour_blend">\n' +
//             '      <value name="COLOUR1">\n' +
//             '        <shadow type="colour_picker">\n' +
//             '          <field name="COLOUR">#ff0000</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             '      <value name="COLOUR2">\n' +
//             '        <shadow type="colour_picker">\n' +
//             '          <field name="COLOUR">#3333ff</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             '      <value name="RATIO">\n' +
//             '        <shadow type="math_number">\n' +
//             '          <field name="NUM">0.5</field>\n' +
//             "        </shadow>\n" +
//             "      </value>\n" +
//             "    </block>\n",
//         },
//       ],
//     },
//     { kind: "sep" },
//     // {
//     //   kind: "category",
//     //   name: "Custom Button",
//     //   colour: 19,
//     //   contents: [
//     //     {
//     //       kind: "button",
//     //       text: "A button",
//     //       callbackKey: "myFirstButtonPressed",
//     //     },
//     //   ],
//     // },
//     {
//       kind: "category",
//       name: "Variables",
//       custom: "VARIABLE",
//       colour: 330,
//     },
//     {
//       kind: "category",
//       name: "Functions",
//       custom: "PROCEDURE",
//       colour: 290,
//     },
//   ],
// };

const DefaultPythonJSON = [
  {
    "kind": "category",
    "name": "Logic",
    "contents": [
      {
        "kind": "block",
        "type": "controls_if"

      },
      {
        "kind": "block",
        "type": "logic_compare"
      },
      {
        "kind": "block",
        "type": "logic_operation"
      },
      {
        "kind": "block",
        "type": "logic_negate"
      },
      {
        "kind": "block",
        "type": "logic_boolean"
      },
      {
        "kind": "block",
        "type": "logic_null"
      },
      {
        "kind": "block",
        "type": "logic_ternary"
      }
    ],
    "categorystyle": "logic_category"
  },
  {
    "kind": "category",
    "name": "Loops",
    "contents": [
      {
        "kind": "block",
        "type": "controls_repeat_ext",
        "inputs": {
          "TIMES": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "10"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "controls_whileUntil"
      },
      {
        "kind": "block",
        "type": "controls_for",
        "inputs": {
          "FROM": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "1"
              }
            }
          },
          "TO": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "10"
              }
            }
          },
          "BY": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "1"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "controls_forEach"
      },
      {
        "kind": "block",
        "type": "controls_flow_statements"
      }
    ],
    "categorystyle": "loop_category"
  },
  {
    "kind": "category",
    "name": "Math",
    "contents": [
      {
        "kind": "block",
        "type": "math_number",
        "fields": {
          "NUM": "123"
        }
      },
      {
        "kind": "block",
        "type": "math_arithmetic",
        "inputs": {
          "A": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "1"
              }
            }
          },
          "B": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "1"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "math_single",
        "inputs": {
          "NUM": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "9"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "math_trig",
        "inputs": {
          "NUM": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "45"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "math_constant"
      },
      {
        "kind": "block",
        "type": "math_number_property",
        "inputs": {
          "NUMBER_TO_CHECK": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "0"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "math_round",
        "inputs": {
          "NUM": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "3.1"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "math_on_list"
      },
      {
        "kind": "block",
        "type": "math_modulo",
        "inputs": {
          "DIVIDEND": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "64"
              }
            }
          },
          "DIVISOR": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "10"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "math_constrain",
        "inputs": {
          "VALUE": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "50"
              }
            }
          },
          "LOW": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "1"
              }
            }
          },
          "HIGH": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "100"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "math_random_int",
        "inputs": {
          "FROM": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "1"
              }
            }
          },
          "TO": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "100"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "math_random_float"
      },
      {
        "kind": "block",
        "type": "math_atan2",
        "inputs": {
          "X": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "1"
              }
            }
          },
          "Y": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "1"
              }
            }
          }
        }
      }
    ],
    "categorystyle": "math_category"
  },
  {
    "kind": "category",
    "name": "Text",
    "contents": [
      {
        "kind": "block",
        "type": "text"
      },
      {
        "kind": "block",
        "type": "text_join"
      },
      {
        "kind": "block",
        "type": "text_append",
        "inputs": {
          "TEXT": {
            "shadow": {
              "type": "text"
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "text_length",
        "inputs": {
          "VALUE": {
            "shadow": {
              "type": "text",
              "fields": {
                "TEXT": "abc"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "text_isEmpty",
        "inputs": {
          "VALUE": {
            "shadow": {
              "type": "text",
              "fields": {
                "TEXT": null
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "text_indexOf",
        "inputs": {
          "VALUE": {
            "block": {
              "type": "variables_get",
              "fields": {
                "VAR": "{textVariable}"
              }
            }
          },
          "FIND": {
            "shadow": {
              "type": "text",
              "fields": {
                "TEXT": "abc"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "text_charAt",
        "inputs": {
          "VALUE": {
            "block": {
              "type": "variables_get",
              "fields": {
                "VAR": "{textVariable}"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "text_getSubstring",
        "inputs": {
          "STRING": {
            "block": {
              "type": "variables_get",
              "fields": {
                "VAR": "{textVariable}"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "text_changeCase",
        "inputs": {
          "TEXT": {
            "shadow": {
              "type": "text",
              "fields": {
                "TEXT": "abc"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "text_trim",
        "inputs": {
          "TEXT": {
            "shadow": {
              "type": "text",
              "fields": {
                "TEXT": "abc"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "text_print",
        "inputs": {
          "TEXT": {
            "shadow": {
              "type": "text",
              "fields": {
                "TEXT": "abc"
              }
            }
          }
        }
      }
    ],
    "categorystyle": "text_category"
  },
  {
    "kind": "category",
    "name": "Lists",
    "contents": [
      {
        "kind": "block",
        "type": "lists_create_with",
        "extraState": {
          "itemCount": "0"
        }
      },
      {
        "kind": "block",
        "type": "lists_create_with"
      },
      {
        "kind": "block",
        "type": "lists_repeat",
        "inputs": {
          "NUM": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "5"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "lists_length"
      },
      {
        "kind": "block",
        "type": "lists_isEmpty"
      },
      {
        "kind": "block",
        "type": "lists_indexOf",
        "inputs": {
          "VALUE": {
            "block": {
              "type": "variables_get",
              "fields": {
                "VAR": "{listVariable}"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "lists_getIndex",
        "inputs": {
          "VALUE": {
            "block": {
              "type": "variables_get",
              "fields": {
                "VAR": "{listVariable}"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "lists_setIndex",
        "inputs": {
          "LIST": {
            "block": {
              "type": "variables_get",
              "fields": {
                "VAR": "{listVariable}"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "lists_getSublist",
        "inputs": {
          "LIST": {
            "block": {
              "type": "variables_get",
              "fields": {
                "VAR": "{listVariable}"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "lists_split",
        "inputs": {
          "DELIM": {
            "shadow": {
              "type": "text",
              "fields": {
                "TEXT": ","
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "lists_sort"
      }
    ],
    "categorystyle": "list_category"
  },
  {
    "kind": "category",
    "name": "Colour",
    "contents": [
      {
        "kind": "block",
        "type": "colour_picker"
      },
      {
        "kind": "block",
        "type": "colour_random"
      },
      {
        "kind": "block",
        "type": "colour_rgb",
        "inputs": {
          "RED": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "100"
              }
            }
          },
          "GREEN": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "50"
              }
            }
          },
          "BLUE": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "0"
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "colour_blend",
        "inputs": {
          "COLOUR1": {
            "shadow": {
              "type": "colour_picker",
              "fields": {
                "COLOUR": "#ff0000"
              }
            }
          },
          "COLOUR2": {
            "shadow": {
              "type": "colour_picker",
              "fields": {
                "COLOUR": "#3333ff"
              }
            }
          },
          "RATIO": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": "0.5"
              }
            }
          }
        }
      }
    ],
    "categorystyle": "colour_category"
  },
  {
    "kind": "sep"
  },
  {
    "kind": "category",
    "name": "Variables",
    "contents": [],
    "custom": "VARIABLE",
    "categorystyle": "variable_category"
  },
  {
    "kind": "category",
    "name": "Functions",
    "contents": [],
    "custom": "PROCEDURE",
    "categorystyle": "procedure_category"
  }
]
// ...DefaultPythonJSON,

export const INITIAL_TOOLBOX_JSON = {
  "kind": "categoryToolbox",
  "contents": [
    {
      "kind": "category",
      "name": "Python",
      "colour": "#F0B429",
      "contents": [
        ...DefaultPythonJSON,
      ]
    },
    {
      "kind": "sep",
      "gap": "8"
    },
    {
      "kind": "category",
      "name": "Excel",
      "colour": "#2680C2",
      "contents": [
        {
          "kind": "block",
          "type": "excel_to_dataframe_1669579133618",
          "tooltip": "Converts excel file to dataframe.",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.to_dataframe",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/of/input/file"
                },
                "type": "text"
              },
              "name": "Input File Path"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "Sheet1"
                },
                "type": "text"
              },
              "name": "Input Sheet Name"
            },
            "param_3": {
              "block": {
                "fields": {
                  "NUM": "1"
                },
                "type": "math_number"
              },
              "name": "Header row number"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_tabular_data_from_website_1669578647854",
          "tooltip": "Returns a dataframe from a website table.",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.tabular_data_from_website",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "url/of/the/website"
                },
                "type": "text"
              },
              "name": "Website URL"
            },
            "param_2": {
              "block": {
                "fields": {
                  "NUM": "1"
                },
                "type": "math_number"
              },
              "name": "Table number"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_get_single_cell_1669578207669",
          "tooltip": "Gets the text from the desired column/cell number for the given excel file.",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.get_single_cell",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "a dataframe"
                },
                "type": "text"
              },
              "name": "Dataframe"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "Column 1"
                },
                "type": "text"
              },
              "name": "Column name"
            },
            "param_3": {
              "block": {
                "fields": {
                  "NUM": "1"
                },
                "type": "math_number"
              },
              "name": "Cell number"
            },
            "param_4": {
              "block": {
                "fields": {
                  "NUM": "1"
                },
                "type": "math_number"
              },
              "name": "Header row number"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_get_dataframe_from_google_spreadsheet_1669577705415",
          "tooltip": "Get dataframe from Google spreadsheet",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.get_dataframe_from_google_spreadsheet",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "auth"
                },
                "type": "text"
              },
              "name": "Authentication object"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "url/of/spreadsheet"
                },
                "type": "text"
              },
              "name": "Spreadsheet URL"
            },
            "param_3": {
              "block": {
                "fields": {
                  "TEXT": "Sheet1"
                },
                "type": "text"
              },
              "name": "Sheet name"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_upload_dataframe_to_google_spreadsheet_1669097472632",
          "tooltip": "Uploads a dataframe to a google spreadsheet",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.upload_dataframe_to_google_spreadsheet",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "auth"
                },
                "type": "text"
              },
              "name": "Authentication object"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "google spreadsheet url"
                },
                "type": "text"
              },
              "name": "Spreadsheet url"
            },
            "param_3": {
              "block": {
                "fields": {
                  "TEXT": "Sheet 1"
                },
                "type": "text"
              },
              "name": "Sheet name"
            },
            "param_4": {
              "block": {
                "fields": {
                  "TEXT": "some dataframe"
                },
                "type": "text"
              },
              "name": "Dataframe"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_set_value_in_df_1669096716016",
          "tooltip": "Sets value in dataframe",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.set_value_in_df",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "some dataframe"
                },
                "type": "text"
              },
              "name": "Dataframe"
            },
            "param_2": {
              "block": {
                "fields": {
                  "NUM": "a number"
                },
                "type": "math_number"
              },
              "name": "Row number"
            },
            "param_3": {
              "block": {
                "fields": {
                  "NUM": "number"
                },
                "type": "math_number"
              },
              "name": "Column number"
            },
            "param_4": {
              "block": {
                "fields": {
                  "TEXT": "any value"
                },
                "type": "text"
              },
              "name": "Value"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_set_single_cell_1669096463852",
          "tooltip": "Writes the given text to the desired column/cell number for the given excel file",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.set_single_cell",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "some dataframe"
                },
                "type": "text"
              },
              "name": "Dataframe"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "a column name"
                },
                "type": "text"
              },
              "name": "Column name"
            },
            "param_3": {
              "block": {
                "fields": {
                  "NUM": "a cell number"
                },
                "type": "math_number"
              },
              "name": " Cell number"
            },
            "param_4": {
              "block": {
                "fields": {
                  "TEXT": "any value"
                },
                "type": "text"
              },
              "name": "Value"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_remove_duplicates_1669096109722",
          "tooltip": "Removes the duplicates from the given column",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.remove_duplicates",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "some dataframe"
                },
                "type": "text"
              },
              "name": "Dataframe"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "a column name"
                },
                "type": "text"
              },
              "name": "Column name"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_isNaN_1669095771671",
          "tooltip": "Checks if the value is NaN",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.isNaN",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "some value"
                },
                "type": "text"
              },
              "name": "Value"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_get_value_in_df_1669095596063",
          "tooltip": "Gets value from dataframe",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.get_value_in_df",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "some/dataframe"
                },
                "type": "text"
              },
              "name": "Dataframe"
            },
            "param_2": {
              "block": {
                "fields": {
                  "NUM": "some row number"
                },
                "type": "math_number"
              },
              "name": "Row number"
            },
            "param_3": {
              "block": {
                "fields": {
                  "NUM": "any column name"
                },
                "type": "math_number"
              },
              "name": "Column number"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_get_row_column_count_1669094976391",
          "tooltip": "Returns the row and column count of the dataframe",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.get_row_column_count",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "data/frame"
                },
                "type": "text"
              },
              "name": "Dataframe"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_get_all_sheet_names_1668847529842",
          "tooltip": "Gets the sheet names from the excel file",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.get_all_sheet_names",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path for/input file"
                },
                "type": "text"
              },
              "name": "Input filepath"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_get_all_header_columns_1668847280912",
          "tooltip": "Gets all header columns from the excel file",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.get_all_header_columns",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "data/frame"
                },
                "type": "text"
              },
              "name": "data frame"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_drop_columns_1668846989713",
          "tooltip": "Drops the columns from the excel file",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.drop_columns",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "dataframe/of excel"
                },
                "type": "text"
              },
              "name": "data frame"
            },
            "param_2": {
              "block": {
                "fields": {
                  "itemCount": "2"
                },
                "type": "lists_create_with"
              },
              "name": "Column Names"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_df_from_string_1668846600059",
          "tooltip": "Converts string to dataframe",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.df_from_string",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "string/to be converted"
                },
                "type": "text"
              },
              "name": "data frame string"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "' '"
                },
                "type": "text"
              },
              "name": "word delimiter"
            },
            "param_3": {
              "block": {
                "fields": {
                  "TEXT": "\\n"
                },
                "type": "text"
              },
              "name": "Line delimiter"
            },
            "param_4": {
              "block": {
                "fields": {
                  "itemCount": "2"
                },
                "type": "lists_create_with"
              },
              "name": "column names"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_df_from_list_1668845724264",
          "tooltip": "Converts list of lists to dataframe",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.df_from_list",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "itemCount": "2"
                },
                "type": "lists_create_with"
              },
              "name": "Values/List of lists"
            },
            "param_2": {
              "block": {
                "fields": {
                  "itemCount": "2"
                },
                "type": "lists_create_with"
              },
              "name": "column names"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_df_extract_sub_df_1668845246471",
          "tooltip": "Extracts sub dataframe from the given dataframe",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.df_extract_sub_df",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "data/frame"
                },
                "type": "text"
              },
              "name": "data frame"
            },
            "param_2": {
              "block": {
                "fields": {
                  "NUM": "starting/row"
                },
                "type": "math_number"
              },
              "name": "Row start"
            },
            "param_3": {
              "block": {
                "fields": {
                  "NUM": "ending/row"
                },
                "type": "math_number"
              },
              "name": "row end"
            },
            "param_4": {
              "block": {
                "fields": {
                  "NUM": "starting/column"
                },
                "type": "math_number"
              },
              "name": "column start"
            },
            "param_5": {
              "block": {
                "fields": {
                  "NUM": "ending/column"
                },
                "type": "math_number"
              },
              "name": "column end"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_df_drop_rows_1668844405417",
          "tooltip": "Drops rows from dataframe",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.df_drop_rows",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "data/frame"
                },
                "type": "text"
              },
              "name": "data frame"
            },
            "param_2": {
              "block": {
                "fields": {
                  "NUM": "starting/row"
                },
                "type": "math_number"
              },
              "name": "Row start"
            },
            "param_3": {
              "block": {
                "fields": {
                  "NUM": "ending/row"
                },
                "type": "math_number"
              },
              "name": "row end"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_dataframe_to_excel_1668839843957",
          "tooltip": "Converts the dataframe to excel file",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.dataframe_to_excel",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "data/frame"
                },
                "type": "text"
              },
              "name": "data frame"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "Output/folder/path"
                },
                "type": "text"
              },
              "name": "Output folder Path"
            },
            "param_3": {
              "block": {
                "fields": {
                  "TEXT": "output/file/name"
                },
                "type": "text"
              },
              "name": "output file name"
            },
            "param_4": {
              "block": {
                "fields": {
                  "TEXT": "sheet 1"
                },
                "type": "text"
              },
              "name": "output sheet name"
            },
            "param_5": {
              "block": {
                "fields": {
                  "TEXT": "a"
                },
                "type": "text"
              },
              "name": "Mode"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_create_file_1668838739786",
          "tooltip": "Creates an excel file with a sheet in the specified folder",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.create_file",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "output/folder/path"
                },
                "type": "text"
              },
              "name": "Output folder"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "output/file/name"
                },
                "type": "text"
              },
              "name": "Output filename"
            },
            "param_3": {
              "block": {
                "fields": {
                  "itemCount": "2"
                },
                "type": "lists_create_with"
              },
              "name": "Output sheet name(s)"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_clear_sheet_1668838155244",
          "tooltip": "Clears the sheet",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.clear_sheet",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "data/frame"
                },
                "type": "text"
              },
              "name": "data frame"
            }
          }
        },
        {
          "kind": "block",
          "type": "excel_authenticate_google_spreadsheet_1668793609672",
          "tooltip": "Creates authentication object for google spreadsheet.",
          "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.authenticate_google_spreadsheet",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/to/credentials"
                },
                "type": "text"
              },
              "name": "credential file path"
            }
          }
        }
      ]
    },
    {
      "kind": "category",
      "name": "Folder",
      "colour": "#2680C2",
      "contents": [
        {
          "kind": "block",
          "type": "folder_rename_folder_1669389560815",
          "tooltip": "Rename a folder at the given path",
          "helpUrl": "https://py-bots.github.io/dost/folder/#dost.folder.rename_folder",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/to/folder"
                },
                "type": "text"
              },
              "name": "Path"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "new folder name"
                },
                "type": "text"
              },
              "name": "New Name"
            }
          }
        },
        {
          "kind": "block",
          "type": "folder_move_folder_1669388669795",
          "tooltip": "Move a folder from the source to the destination",
          "helpUrl": "https://py-bots.github.io/dost/folder/#dost.folder.move_folder",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/to/input/folder"
                },
                "type": "text"
              },
              "name": "Input Folder"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "path/to/output/folder"
                },
                "type": "text"
              },
              "name": "Output folder"
            }
          }
        },
        {
          "kind": "block",
          "type": "folder_get_size_human_1669388432975",
          "tooltip": "Get the size of a folder in human readable format",
          "helpUrl": "https://py-bots.github.io/dost/folder/#dost.folder.get_size_human",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/to/folder"
                },
                "type": "text"
              },
              "name": "Path"
            }
          }
        },
        {
          "kind": "block",
          "type": "folder_get_size_1669387754500",
          "tooltip": "Get the size of a folder in bytes",
          "helpUrl": "https://py-bots.github.io/dost/folder/#dost.folder.get_size",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/to/folder"
                },
                "type": "text"
              },
              "name": "Path"
            }
          }
        },
        {
          "kind": "block",
          "type": "folder_get_contents_recursive_1669387099874",
          "tooltip": "Get a list of all files and folders in a folder and all subfolders.",
          "helpUrl": "https://py-bots.github.io/dost/folder/#dost.folder.get_contents_recursive",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/to/folder"
                },
                "type": "text"
              },
              "name": "Path"
            }
          }
        },
        {
          "kind": "block",
          "type": "folder_get_contents_1669386795890",
          "tooltip": "Get a list of all files and folders in a folder",
          "helpUrl": "https://py-bots.github.io/dost/folder/#dost.folder.get_contents",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/to/folder"
                },
                "type": "text"
              },
              "name": "Path"
            }
          }
        },
        {
          "kind": "block",
          "type": "folder_delete_folder_1669386469370",
          "tooltip": "Delete a folder at the given path",
          "helpUrl": "https://py-bots.github.io/dost/folder/#dost.folder.delete_folder",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/to/folder"
                },
                "type": "text"
              },
              "name": "Path"
            }
          }
        },
        {
          "kind": "block",
          "type": "folder_create_folder_1669386087331",
          "tooltip": "Create a folder at the given path",
          "helpUrl": "https://py-bots.github.io/dost/folder/#dost.folder.create_folder",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/to/folder"
                },
                "type": "text"
              },
              "name": "Path"
            }
          }
        },
        {
          "kind": "block",
          "type": "folder_copy_folder_1669385625327",
          "tooltip": "Copy a folder from the source to the destination",
          "helpUrl": "https://py-bots.github.io/dost/folder/#dost.folder.copy_folder",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/to/input/folder"
                },
                "type": "text"
              },
              "name": "Input Folder"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "path/to/output/folder"
                },
                "type": "text"
              },
              "name": "Output folder"
            }
          }
        }
      ]
    },
    {
      "kind": "category",
      "name": "Pdf",
      "colour": "#2680C2",
      "contents": [
        {
          "kind": "block",
          "type": "pdf_extract_all_tables_1669384596915",
          "tooltip": "Extracts all tables from a pdf file and saves them as csv files in the specified folder",
          "helpUrl": "https://py-bots.github.io/dost/pdf/#dost.pdf.extract_all_tables",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/to/PDF/file"
                },
                "type": "text"
              },
              "name": "Pdf file path"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "path/to/output/file"
                },
                "type": "text"
              },
              "name": "Output Folder"
            },
            "param_3": {
              "block": {
                "fields": {
                  "TEXT": "abc.pdf"
                },
                "type": "text"
              },
              "name": "Output Filename"
            },
            "param_4": {
              "block": {
                "fields": {
                  "BOOL": "True"
                },
                "type": "logic_boolean"
              },
              "name": "Table with borders"
            }
          }
        }
      ]
    },
    {
      "kind": "category",
      "name": "Mail",
      "colour": "#2680C2",
      "contents": [
        {
          "kind": "block",
          "type": "mail_send_gmail_using_app_password_1669383362374",
          "tooltip": "Send email using gmail app password",
          "helpUrl": "https://py-bots.github.io/dost/mail/#dost.mail.send_gmail_using_app_password",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "abc@abc.com"
                },
                "type": "text"
              },
              "name": "Gmail username"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "password/of/gmail"
                },
                "type": "text"
              },
              "name": "Gmail app password"
            },
            "param_3": {
              "block": {
                "fields": {
                  "TEXT": "abc@abc.com"
                },
                "type": "text"
              },
              "name": "To email id"
            },
            "param_4": {
              "block": {
                "fields": {
                  "TEXT": "Subject of the email"
                },
                "type": "text"
              },
              "name": "Subject"
            },
            "param_5": {
              "block": {
                "fields": {
                  "TEXT": "Message of the email"
                },
                "type": "text"
              },
              "name": "Message"
            },
            "param_6": {
              "block": {
                "fields": {
                  "TEXT": "'path/of/file'"
                },
                "type": "text"
              },
              "name": "Attachment path"
            }
          }
        }
      ]
    },
    {
      "kind": "category",
      "name": "Utility",
      "colour": "#2680C2",
      "contents": [
        {
          "kind": "block",
          "type": "utility_uninstall_module_1669103898483",
          "tooltip": "Uninstalls the specified module",
          "helpUrl": "https://py-bots.github.io/dost/utility/#dost.utility.uninstall_module",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "requests"
                },
                "type": "text"
              },
              "name": "Module name"
            }
          }
        },
        {
          "kind": "block",
          "type": "utility_pause_program_1669103777577",
          "tooltip": "Pauses the program for the specified number of seconds",
          "helpUrl": "https://py-bots.github.io/dost/utility/#dost.utility.pause_program",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "NUM": "5"
                },
                "type": "math_number"
              },
              "name": "Seconds"
            }
          }
        },
        {
          "kind": "block",
          "type": "utility_install_module_1669103181802",
          "tooltip": "Installs the specified module",
          "helpUrl": "https://py-bots.github.io/dost/utility/#dost.utility.install_module",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "requests"
                },
                "type": "text"
              },
              "name": "Module name"
            }
          }
        },
        {
          "kind": "block",
          "type": "utility_image_to_text_1669102899754",
          "tooltip": "Converts the specified image to text",
          "helpUrl": "https://py-bots.github.io/dost/utility/#dost.utility.image_to_text",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "tests\\demo2.png"
                },
                "type": "text"
              },
              "name": "Image path"
            }
          }
        },
        {
          "kind": "block",
          "type": "utility_get_module_version_1669102713773",
          "tooltip": "Gets the version of the specified module",
          "helpUrl": "https://py-bots.github.io/dost/utility/#dost.utility.get_module_version",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "requests"
                },
                "type": "text"
              },
              "name": "Module name"
            }
          }
        },
        {
          "kind": "block",
          "type": "utility_clear_output_1669102542662",
          "tooltip": "Clears the output of the console",
          "helpUrl": "https://py-bots.github.io/dost/utility/#dost.utility.clear_output"
        },
        {
          "kind": "block",
          "type": "utility_api_request_1669102420727",
          "tooltip": "Makes an API request to the specified URL",
          "helpUrl": "https://py-bots.github.io/dost/utility/#dost.utility.api_request",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "https://catfact.ninja/fact?max_length=140"
                },
                "type": "text"
              },
              "name": "URL"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "'GET'"
                },
                "type": "text"
              },
              "name": "Method"
            },
            "param_3": {
              "block": {
                "fields": {
                  "TEXT": "None"
                },
                "type": "text"
              },
              "name": "Body"
            },
            "param_4": {
              "block": {
                "fields": {
                  "TEXT": "None"
                },
                "type": "text"
              },
              "name": "Headers"
            }
          }
        }
      ]
    },
    {
      "kind": "category",
      "name": "Text",
      "colour": "#2680C2",
      "contents": [
        {
          "kind": "block",
          "type": "text_remove_special_characters_1669101698336",
          "tooltip": "Removes special characters from the given string.",
          "helpUrl": "https://py-bots.github.io/dost/text/#dost.text.remove_special_characters",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "\"hello123:l;,\""
                },
                "type": "text"
              },
              "name": "Text"
            }
          }
        },
        {
          "kind": "block",
          "type": "text_get_numbers_1669101548772",
          "tooltip": "Extracts alphabets from the given string.",
          "helpUrl": "https://py-bots.github.io/dost/text/#dost.text.get_numbers",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "\"hello123:l;,\""
                },
                "type": "text"
              },
              "name": "Text"
            }
          }
        },
        {
          "kind": "block",
          "type": "text_get_alphabets_1669101381809",
          "tooltip": "Extracts alphabets from the given string.",
          "helpUrl": "https://py-bots.github.io/dost/text/#dost.text.get_alphabets",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "\"hello123:l;,\""
                },
                "type": "text"
              },
              "name": "Text"
            }
          }
        }
      ]
    },
    {
      "kind": "category",
      "name": "File",
      "colour": "#2680C2",
      "contents": [
        {
          "kind": "block",
          "type": "file_move_1669056708080",
          "tooltip": "Move a file from source to destination",
          "helpUrl": "https://py-bots.github.io/dost/file/#dost.file.move",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/to/input/file"
                },
                "type": "text"
              },
              "name": "Input File path"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "path/to/output/file"
                },
                "type": "text"
              },
              "name": "Output File path"
            }
          }
        },
        {
          "kind": "block",
          "type": "file_write_text_1669055894457",
          "tooltip": "Write a text file with the given contents",
          "helpUrl": "https://py-bots.github.io/dost/file/#dost.file.write_text",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/to/file"
                },
                "type": "text"
              },
              "name": "Path of File"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "path/to/contents/of/text/file"
                },
                "type": "text"
              },
              "name": "Content"
            }
          }
        },
        {
          "kind": "block",
          "type": "file_rename_1669050923017",
          "tooltip": "Rename a file",
          "helpUrl": "https://py-bots.github.io/dost/file/#dost.file.rename",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/to/file"
                },
                "type": "text"
              },
              "name": "Path to File"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "path/to/new/name/of/file"
                },
                "type": "text"
              },
              "name": "New name"
            }
          }
        },
        {
          "kind": "block",
          "type": "file_read_text_1669049135264",
          "tooltip": "Reads a text file and returns its contents as a string",
          "helpUrl": "https://py-bots.github.io/dost/file/#dost.file.read_text",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/to/file"
                },
                "type": "text"
              },
              "name": "path of file"
            }
          }
        },
        {
          "kind": "block",
          "type": "file_delete_1669048668981",
          "tooltip": "Delete a file",
          "helpUrl": "https://py-bots.github.io/dost/file/#dost.file.delete",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/to/delete/file"
                },
                "type": "text"
              },
              "name": "path of file"
            }
          }
        },
        {
          "kind": "block",
          "type": "file_create_1669048400557",
          "tooltip": "Create a file",
          "helpUrl": "https://py-bots.github.io/dost/file/#dost.file.create",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/to/file"
                },
                "type": "text"
              },
              "name": "path of file"
            }
          }
        },
        {
          "kind": "block",
          "type": "file_copy_1669048131419",
          "tooltip": "Copy a file from source to destination",
          "helpUrl": "https://py-bots.github.io/dost/file/#dost.file.copy",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/to/input/file"
                },
                "type": "text"
              },
              "name": "Input File"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "path/to/output/file"
                },
                "type": "text"
              },
              "name": "Output File"
            }
          }
        }
      ]
    },
    {
      "kind": "category",
      "name": "Windows",
      "colour": "#2680C2",
      "contents": [
        {
          "kind": "block",
          "type": "windows_show_desktop_1669052323839",
          "tooltip": "Minimize all windows and show the desktop",
          "helpUrl": "https://py-bots.github.io/dost/windows/#dost.windows.show_desktop"
        },
        {
          "kind": "block",
          "type": "windows_minimize_window_1669052247010",
          "tooltip": "Minimize windows",
          "helpUrl": "https://py-bots.github.io/dost/windows/#dost.windows.minimize_window",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "Notepad"
                },
                "type": "text"
              },
              "name": "Window name"
            }
          }
        },
        {
          "kind": "block",
          "type": "windows_maximize_window_1669051946104",
          "tooltip": "Maximize windows",
          "helpUrl": "https://py-bots.github.io/dost/windows/#dost.windows.maximize_window",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "Notepad"
                },
                "type": "text"
              },
              "name": "Window name"
            }
          }
        },
        {
          "kind": "block",
          "type": "windows_launch_app_1669051764016",
          "tooltip": "Launch any exe/bat application",
          "helpUrl": "https://py-bots.github.io/dost/windows/#dost.windows.launch_app",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "Notepad"
                },
                "type": "text"
              },
              "name": "Path to application or application name"
            }
          }
        },
        {
          "kind": "block",
          "type": "windows_get_all_opened_window_titles_1669051580802",
          "tooltip": "Windows module for dost.This module contains functions that are specific to Windows",
          "helpUrl": "https://py-bots.github.io/dost/windows/#dost.windows.get_all_opened_window_titles"
        },
        {
          "kind": "block",
          "type": "windows_get_active_window_1669051446787",
          "tooltip": "Get active window",
          "helpUrl": "https://py-bots.github.io/dost/windows/#dost.windows.get_active_window"
        },
        {
          "kind": "block",
          "type": "windows_close_window_1669051216734",
          "tooltip": "Closes the window",
          "helpUrl": "https://py-bots.github.io/dost/windows/#dost.windows.close_window",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "Notepad"
                },
                "type": "text"
              },
              "name": "Window name"
            }
          }
        },
        {
          "kind": "block",
          "type": "windows_activate_window_1669051136235",
          "tooltip": "Activate window",
          "helpUrl": "https://py-bots.github.io/dost/windows/#dost.windows.activate_window",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "Notepad"
                },
                "type": "text"
              },
              "name": "Window name"
            }
          }
        }
      ]
    },
    {
      "kind": "category",
      "name": "Voice",
      "colour": "#2680C2",
      "contents": [
        {
          "kind": "block",
          "type": "voice_text_to_speech_1669050795243",
          "tooltip": "Converts text to speech offline",
          "helpUrl": "https://py-bots.github.io/dost/voice/#dost.voice.text_to_speech",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "Hello World"
                },
                "type": "text"
              },
              "name": "Text"
            },
            "param_2": {
              "block": {
                "fields": {
                  "BOOL": "True"
                },
                "type": "logic_boolean"
              },
              "name": "Show"
            },
            "param_3": {
              "block": {
                "fields": {
                  "NUM": "170"
                },
                "type": "math_number"
              },
              "name": "Rate"
            }
          }
        },
        {
          "kind": "block",
          "type": "voice_speech_to_text_1669050313140",
          "tooltip": "Converts speech to text",
          "helpUrl": "https://py-bots.github.io/dost/voice/#dost.voice.speech_to_text"
        }
      ]
    },
    {
      "kind": "category",
      "name": "Message",
      "colour": "#2680C2",
      "contents": [
        {
          "kind": "block",
          "type": "message_warning_1669050668259",
          "tooltip": "Display a warning message to the user",
          "helpUrl": "https://py-bots.github.io/dost/message/#dost.message.warning",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "Warning Message!!!"
                },
                "type": "text"
              },
              "name": "Message"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "PyBOTs"
                },
                "type": "text"
              },
              "name": "Title"
            }
          }
        },
        {
          "kind": "block",
          "type": "message_info_1669050482409",
          "tooltip": "Display an info message to the user",
          "helpUrl": "https://py-bots.github.io/dost/message/#dost.message.info",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "Welcome to Pybots"
                },
                "type": "text"
              },
              "name": "Message "
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "PyBOTs"
                },
                "type": "text"
              },
              "name": "Title"
            }
          }
        },
        {
          "kind": "block",
          "type": "message_error_1669050244522",
          "tooltip": "Display an error message to the user",
          "helpUrl": "https://py-bots.github.io/dost/message/#dost.message.error",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "Hello World"
                },
                "type": "text"
              },
              "name": "Message"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "PyBOTs"
                },
                "type": "text"
              },
              "name": "Title"
            }
          }
        }
      ]
    },
    {
      "kind": "category",
      "name": "Clipboard",
      "colour": "#2680C2",
      "contents": [
        {
          "kind": "block",
          "type": "clipboard_set_data_1669050069949",
          "tooltip": "Set the clipboard data to the given string.",
          "helpUrl": "https://py-bots.github.io/dost/clipboard/#dost.clipboard.set_data",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "Hello World!"
                },
                "type": "text"
              },
              "name": "Data"
            }
          }
        },
        {
          "kind": "block",
          "type": "clipboard_get_data_1669049912772",
          "tooltip": "Get the clipboard data as a string",
          "helpUrl": "https://py-bots.github.io/dost/clipboard/#dost.clipboard.get_data"
        }
      ]
    },
    {
      "kind": "category",
      "name": "Converter",
      "colour": "#2680C2",
      "contents": [
        {
          "kind": "block",
          "type": "converter_png_to_jpg_1668867000798",
          "tooltip": "Converts the image from png to jpg format.",
          "helpUrl": "https://py-bots.github.io/dost/converter/#dost.converter.png_to_jpg",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/of/input/file"
                },
                "type": "text"
              },
              "name": "Input File Path"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "path/of/output/folder"
                },
                "type": "text"
              },
              "name": "Output Folder"
            },
            "param_3": {
              "block": {
                "fields": {
                  "TEXT": "A.jpg"
                },
                "type": "text"
              },
              "name": "Output Filename"
            }
          }
        },
        {
          "kind": "block",
          "type": "converter_jpg_to_png_1668866731670",
          "tooltip": "Convert a JPG image to a PNG image.",
          "helpUrl": "https://py-bots.github.io/dost/converter/#dost.converter.jpg_to_png",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/of/input/file"
                },
                "type": "text"
              },
              "name": "Input File Path"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "path/of/output/folder"
                },
                "type": "text"
              },
              "name": "Output Folder"
            },
            "param_3": {
              "block": {
                "fields": {
                  "TEXT": "A.png"
                },
                "type": "text"
              },
              "name": "Output Filename"
            }
          }
        },
        {
          "kind": "block",
          "type": "converter_image_to_base64_1668866333553",
          "tooltip": "Get a base64 encoded string from an image.",
          "helpUrl": "https://py-bots.github.io/dost/converter/#dost.converter.image_to_base64",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/of/input/file"
                },
                "type": "text"
              },
              "name": "Input File Path"
            }
          }
        },
        {
          "kind": "block",
          "type": "converter_excel_to_html_1668866124788",
          "tooltip": "Converts the excel file to colored html file.",
          "helpUrl": "https://py-bots.github.io/dost/converter/#dost.converter.excel_to_html",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/of/input/file"
                },
                "type": "text"
              },
              "name": "Input File Path"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "path/of/output/folder"
                },
                "type": "text"
              },
              "name": "Output Folder"
            },
            "param_3": {
              "block": {
                "fields": {
                  "TEXT": "A.html"
                },
                "type": "text"
              },
              "name": "Output Filename"
            }
          }
        },
        {
          "kind": "block",
          "type": "converter_csv_to_excel_1668865795698",
          "tooltip": "Convert a CSV file to an Excel file.",
          "helpUrl": "https://py-bots.github.io/dost/converter/#dost.converter.csv_to_excel",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "path/of/input/file"
                },
                "type": "text"
              },
              "name": "Input File Path"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "path/of/output/folder"
                },
                "type": "text"
              },
              "name": "Output Folder"
            },
            "param_3": {
              "block": {
                "fields": {
                  "TEXT": "A.xlsx"
                },
                "type": "text"
              },
              "name": "Output Filename"
            },
            "param_4": {
              "block": {
                "fields": {
                  "BOOL": "True"
                },
                "type": "logic_boolean"
              },
              "name": "Header"
            },
            "param_5": {
              "block": {
                "fields": {
                  "TEXT": ","
                },
                "type": "text"
              },
              "name": "Separator"
            }
          }
        },
        {
          "kind": "block",
          "type": "converter_base64_to_image_1668865396102",
          "tooltip": "Get an image from a base64 encoded string.",
          "helpUrl": "https://py-bots.github.io/dost/converter/#dost.converter.base64_to_image",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "base_64_string"
                },
                "type": "text"
              },
              "name": "Input text"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "path/of/output/folder"
                },
                "type": "text"
              },
              "name": "Output Folder "
            },
            "param_3": {
              "block": {
                "fields": {
                  "TEXT": "demo.png"
                },
                "type": "text"
              },
              "name": "Output Filename"
            }
          }
        }
      ]
    },
    {
      "kind": "category",
      "name": "Keyboard",
      "colour": "#2680C2",
      "contents": [
        {
          "kind": "block",
          "type": "keyboard_write_1668864817432",
          "tooltip": "Write text to window and press enter key.",
          "helpUrl": "https://py-bots.github.io/dost/keyboard/#dost.keyboard.write",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "Hello World"
                },
                "type": "text"
              },
              "name": "Text"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "Notepad"
                },
                "type": "text"
              },
              "name": "Window Name"
            },
            "param_3": {
              "block": {
                "fields": {
                  "TEXT": "enter"
                },
                "type": "text"
              },
              "name": "Key"
            }
          }
        },
        {
          "kind": "block",
          "type": "keyboard_press_1668864510870",
          "tooltip": "Press a key or a combination of keys.",
          "helpUrl": "https://py-bots.github.io/dost/keyboard/#dost.keyboard.press",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "ctrl"
                },
                "type": "text"
              },
              "name": "Key 1"
            },
            "param_2": {
              "block": {
                "fields": {
                  "TEXT": "shift"
                },
                "type": "text"
              },
              "name": "Key 2"
            },
            "param_3": {
              "block": {
                "fields": {
                  "TEXT": "esc"
                },
                "type": "text"
              },
              "name": "Key 3"
            },
            "param_4": {
              "block": {
                "fields": {
                  "TEXT": "Notepad"
                },
                "type": "text"
              },
              "name": "Window Name"
            }
          }
        },
        {
          "kind": "block",
          "type": "keyboard_hit_enter_1668864227733",
          "tooltip": "Hit enter key",
          "helpUrl": "https://py-bots.github.io/dost/keyboard/#dost.keyboard.hit_enter",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "Notepad"
                },
                "type": "text"
              },
              "name": "Window Name"
            }
          }
        }
      ]
    },
    {
      "kind": "category",
      "name": "Mouse",
      "colour": "#2680C2",
      "contents": [
        {
          "kind": "block",
          "type": "mouse_search_1668864008229",
          "tooltip": "Searches for the given image and returns the co-ordinates of the image.",
          "helpUrl": "https://py-bots.github.io/dost/mouse/#dost.mouse.search",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "TEXT": "tests\\demo.png"
                },
                "type": "text"
              },
              "name": "Path of the image file"
            },
            "param_2": {
              "block": {
                "fields": {
                  "NUM": "0.9"
                },
                "type": "math_number"
              },
              "name": "Confidence level"
            },
            "param_3": {
              "block": {
                "fields": {
                  "NUM": "10"
                },
                "type": "math_number"
              },
              "name": "Waiting time"
            },
            "param_4": {
              "block": {
                "fields": {
                  "BOOL": "False"
                },
                "type": "logic_boolean"
              },
              "name": "Left click"
            }
          }
        },
        {
          "kind": "block",
          "type": "mouse_click_1668863373368",
          "tooltip": "Clicks the mouse at the given co-ordinates.",
          "helpUrl": "https://py-bots.github.io/dost/mouse/#dost.mouse.click",
          "inputs": {
            "param_1": {
              "block": {
                "fields": {
                  "NUM": "100"
                },
                "type": "math_number"
              },
              "name": "X co-ordinate"
            },
            "param_2": {
              "block": {
                "fields": {
                  "NUM": "100"
                },
                "type": "math_number"
              },
              "name": "Y co-ordinate"
            },
            "param_3": {
              "block": {
                "fields": {
                  "TEXT": "left"
                },
                "type": "text"
              },
              "name": "Button"
            },
            "param_4": {
              "block": {
                "fields": {
                  "NUM": "1"
                },
                "type": "math_number"
              },
              "name": "Number of Clicks"
            },
            "param_5": {
              "block": {
                "fields": {
                  "BOOL": "True"
                },
                "type": "logic_boolean"
              },
              "name": "Absolute"
            }
          }
        }
      ]
    }
  ]
}

const INITIAL_TOOLBOX_CATEGORIES = [
  {
    name: "Controls",
    blocks: [
      { type: "controls_if" },
      {
        type: "controls_repeat_ext",
        values: {
          TIMES: {
            type: "math_number",
            shadow: true,
            fields: {
              NUM: 10,
            },
          },
        },
        statements: {
          DO: {
            type: "text_print",
            shadow: true,
            values: {
              TEXT: {
                type: "text",
                shadow: true,
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
      },
    ],
  },
  {
    name: "Text",
    blocks: [
      { type: "text" },
      {
        type: "text_print",
        values: {
          TEXT: {
            type: "text",
            shadow: true,
            fields: {
              TEXT: "abc",
            },
          },
        },
      },
    ],
  },
];

const WORKSPACE_THEME_DARK = {
  renderer: "thrasos",
  collapse: true,
  comments: true,
  disable: true,
  maxBlocks: Infinity,
  trashcan: true,
  horizontalLayout: false,
  toolboxPosition: "start",
  css: true,
  // media : 'https://blockly-demo.appspot.com/static/media/',
  rtl: false,
  scrollbars: true,
  sounds: true,
  oneBasedIndex: true,
  grid: {
    spacing: 20,
    length: 0.5,
    colour: "#888",
    snap: true,
  },
  zoom: {
    controls: true,
    // wheel : true,
    startScale: 1,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
  },

  theme: DarkTheme,
};

const ConfigFiles = {
  INITIAL_XML,
  INITIAL_TOOLBOX_JSON,
  INITIAL_TOOLBOX_CATEGORIES,
  WORKSPACE_THEME_DARK,
};

export default ConfigFiles;



