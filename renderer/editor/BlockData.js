import Blockly from 'blockly';


Blockly.Blocks['excel_to_dataframe_1669579133618'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_to_dataframe_1669579133618",
                "message0": "| Excel to Dataframe | %1 Input File Path %2 Input Sheet Name %3 Header row number %4",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['Number'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Any'],
                "colour": "#2680C2",
                "tooltip": "Converts excel file to dataframe.",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.to_dataframe"
            }

        );
    }
};
Blockly.Python['excel_to_dataframe_1669579133618'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.to_dataframe(input_filepath=${value_param_1}, input_sheetname=${value_param_2}, header=${value_param_3})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['excel_tabular_data_from_website_1669578647854'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_tabular_data_from_website_1669578647854",
                "message0": "| Tabular Data from Website | %1 Website URL %2 Table number %3",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['Number'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Any'],
                "colour": "#2680C2",
                "tooltip": "Returns a dataframe from a website table.",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.tabular_data_from_website"
            }

        );
    }
};
Blockly.Python['excel_tabular_data_from_website_1669578647854'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.tabular_data_from_website(website_url=${value_param_1}, table_number=${value_param_2})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['excel_get_single_cell_1669578207669'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_get_single_cell_1669578207669",
                "message0": "| Get single cell | %1 Dataframe %2 Column name %3 Cell number %4 Header row number %5",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['Number'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_4', 'check': ['Number'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['String'],
                "colour": "#2680C2",
                "tooltip": "Gets the text from the desired column/cell number for the given excel file.",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.get_single_cell"
            }

        );
    }
};
Blockly.Python['excel_get_single_cell_1669578207669'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var value_param_4 = Blockly.Python.valueToCode(block, 'param_4', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.get_single_cell(df=${value_param_1}, column_name=${value_param_2}, cell_number=${value_param_3}, header=${value_param_4})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['excel_get_dataframe_from_google_spreadsheet_1669577705415'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_get_dataframe_from_google_spreadsheet_1669577705415",
                "message0": "| Dataframe from Google sheet | %1 Authentication object %2 Spreadsheet URL %3 Sheet name %4",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Any'],
                "colour": "#2680C2",
                "tooltip": "Get dataframe from Google spreadsheet",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.get_dataframe_from_google_spreadsheet"
            }

        );
    }
};
Blockly.Python['excel_get_dataframe_from_google_spreadsheet_1669577705415'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.get_dataframe_from_google_spreadsheet(auth=${value_param_1}, spreadsheet_url=${value_param_2}, sheet_name=${value_param_3})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['folder_rename_folder_1669389560815'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "folder_rename_folder_1669389560815",
                "message0": "| Rename folder | %1 Path %2 New Name %3",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Rename a folder at the given path",
                "helpUrl": "https://py-bots.github.io/dost/folder/#dost.folder.rename_folder"
            }

        );
    }
};
Blockly.Python['folder_rename_folder_1669389560815'] = function (block) {
    Blockly.Python.definitions_[
        "folder"] = "from dost import folder";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var code = `folder.rename_folder(path=${value_param_1}, new_name=${value_param_2})\n`;
    return code;
}


Blockly.Blocks['folder_move_folder_1669388669795'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "folder_move_folder_1669388669795",
                "message0": "| Move Folder | %1 Input Folder %2 Output folder %3",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String', 'Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Move a folder from the source to the destination",
                "helpUrl": "https://py-bots.github.io/dost/folder/#dost.folder.move_folder"
            }

        );
    }
};
Blockly.Python['folder_move_folder_1669388669795'] = function (block) {
    Blockly.Python.definitions_[
        "folder"] = "from dost import folder";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var code = `folder.move_folder(source=${value_param_1}, destination=${value_param_2})\n`;
    return code;
}


Blockly.Blocks['folder_get_size_human_1669388432975'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "folder_get_size_human_1669388432975",
                "message0": "| Get size human | %1 Path %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['String'],
                "colour": "#2680C2",
                "tooltip": "Get the size of a folder in human readable format",
                "helpUrl": "https://py-bots.github.io/dost/folder/#dost.folder.get_size_human"
            }

        );
    }
};
Blockly.Python['folder_get_size_human_1669388432975'] = function (block) {
    Blockly.Python.definitions_[
        "folder"] = "from dost import folder";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `folder.get_size_human(path=${value_param_1})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['folder_get_size_1669387754500'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "folder_get_size_1669387754500",
                "message0": "| Get Size | %1 Path %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Number'],
                "colour": "#2680C2",
                "tooltip": "Get the size of a folder in bytes",
                "helpUrl": "https://py-bots.github.io/dost/folder/#dost.folder.get_size"
            }

        );
    }
};
Blockly.Python['folder_get_size_1669387754500'] = function (block) {
    Blockly.Python.definitions_[
        "folder"] = "from dost import folder";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `folder.get_size(path=${value_param_1})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['folder_get_contents_recursive_1669387099874'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "folder_get_contents_recursive_1669387099874",
                "message0": "| Get contents recursive | %1 Path %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Array'],
                "colour": "#2680C2",
                "tooltip": "Get a list of all files and folders in a folder and all subfolders.",
                "helpUrl": "https://py-bots.github.io/dost/folder/#dost.folder.get_contents_recursive"
            }

        );
    }
};
Blockly.Python['folder_get_contents_recursive_1669387099874'] = function (block) {
    Blockly.Python.definitions_[
        "folder"] = "from dost import folder";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `folder.get_contents_recursive(path=${value_param_1})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['folder_get_contents_1669386795890'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "folder_get_contents_1669386795890",
                "message0": "| Get contents | %1 Path %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Array'],
                "colour": "#2680C2",
                "tooltip": "Get a list of all files and folders in a folder",
                "helpUrl": "https://py-bots.github.io/dost/folder/#dost.folder.get_contents"
            }

        );
    }
};
Blockly.Python['folder_get_contents_1669386795890'] = function (block) {
    Blockly.Python.definitions_[
        "folder"] = "from dost import folder";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `folder.get_contents(path=${value_param_1})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['folder_delete_folder_1669386469370'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "folder_delete_folder_1669386469370",
                "message0": "| Delete Folder | %1 Path %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Delete a folder at the given path",
                "helpUrl": "https://py-bots.github.io/dost/folder/#dost.folder.delete_folder"
            }

        );
    }
};
Blockly.Python['folder_delete_folder_1669386469370'] = function (block) {
    Blockly.Python.definitions_[
        "folder"] = "from dost import folder";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `folder.delete_folder(path=${value_param_1})\n`;
    return code;
}


Blockly.Blocks['folder_create_folder_1669386087331'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "folder_create_folder_1669386087331",
                "message0": "| Create Folder | %1 Path %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Create a folder at the given path",
                "helpUrl": "https://py-bots.github.io/dost/folder/#dost.folder.create_folder"
            }

        );
    }
};
Blockly.Python['folder_create_folder_1669386087331'] = function (block) {
    Blockly.Python.definitions_[
        "folder"] = "from dost import folder";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `folder.create_folder(path=${value_param_1})\n`;
    return code;
}


Blockly.Blocks['folder_copy_folder_1669385625327'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "folder_copy_folder_1669385625327",
                "message0": "| Copy Folder | %1 Input Folder %2 Output folder %3",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String', 'Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Copy a folder from the source to the destination",
                "helpUrl": "https://py-bots.github.io/dost/folder/#dost.folder.copy_folder"
            }

        );
    }
};
Blockly.Python['folder_copy_folder_1669385625327'] = function (block) {
    Blockly.Python.definitions_[
        "folder"] = "from dost import folder";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var code = `folder.copy_folder(source=${value_param_1}, destination=${value_param_2})\n`;
    return code;
}


Blockly.Blocks['pdf_extract_all_tables_1669384596915'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "pdf_extract_all_tables_1669384596915",
                "message0": "| Extract all tables | %1 Pdf file path %2 Output Folder %3 Output Filename %4 Table with borders %5",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_4', 'check': ['Boolean'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Extracts all tables from a pdf file and saves them as csv files in the specified folder",
                "helpUrl": "https://py-bots.github.io/dost/pdf/#dost.pdf.extract_all_tables"
            }

        );
    }
};
Blockly.Python['pdf_extract_all_tables_1669384596915'] = function (block) {
    Blockly.Python.definitions_[
        "pdf"] = "from dost import pdf";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var value_param_4 = Blockly.Python.valueToCode(block, 'param_4', Blockly.Python.ORDER_ATOMIC);
    var code = `pdf.extract_all_tables(pdf_file_path=${value_param_1}, output_folder=${value_param_2}, output_filename=${value_param_3}, table_with_borders=${value_param_4})\n`;
    return code;
}


Blockly.Blocks['mail_send_gmail_using_app_password_1669383362374'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "mail_send_gmail_using_app_password_1669383362374",
                "message0": "| Send gmail using app password | %1 Gmail username %2 Gmail app password %3 To email id %4 Subject %5 Message %6 Attachment path %7",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['Array', 'String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_4', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_5', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_6', 'check': ['Array', 'String', 'Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Send email using gmail app password",
                "helpUrl": "https://py-bots.github.io/dost/mail/#dost.mail.send_gmail_using_app_password"
            }

        );
    }
};
Blockly.Python['mail_send_gmail_using_app_password_1669383362374'] = function (block) {
    Blockly.Python.definitions_[
        "mail"] = "from dost import mail";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var value_param_4 = Blockly.Python.valueToCode(block, 'param_4', Blockly.Python.ORDER_ATOMIC);
    var value_param_5 = Blockly.Python.valueToCode(block, 'param_5', Blockly.Python.ORDER_ATOMIC);
    var value_param_6 = Blockly.Python.valueToCode(block, 'param_6', Blockly.Python.ORDER_ATOMIC);
    var code = `mail.send_gmail_using_app_password(gmail_username=${value_param_1}, gmail_app_password=${value_param_2}, to_email_id=${value_param_3}, subject=${value_param_4}, message=${value_param_5}, attachment_path=${value_param_6})\n`;
    return code;
}


Blockly.Blocks['utility_uninstall_module_1669103898483'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "utility_uninstall_module_1669103898483",
                "message0": "| Uninstall Module | %1 Module name %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Uninstalls the specified module",
                "helpUrl": "https://py-bots.github.io/dost/utility/#dost.utility.uninstall_module"
            }

        );
    }
};
Blockly.Python['utility_uninstall_module_1669103898483'] = function (block) {
    Blockly.Python.definitions_[
        "utility"] = "from dost import utility";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `utility.uninstall_module(module_name=${value_param_1})\n`;
    return code;
}


Blockly.Blocks['utility_pause_program_1669103777577'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "utility_pause_program_1669103777577",
                "message0": "| Pause Program | %1 Seconds %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Number'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Pauses the program for the specified number of seconds",
                "helpUrl": "https://py-bots.github.io/dost/utility/#dost.utility.pause_program"
            }

        );
    }
};
Blockly.Python['utility_pause_program_1669103777577'] = function (block) {
    Blockly.Python.definitions_[
        "utility"] = "from dost import utility";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `utility.pause_program(seconds=${value_param_1})\n`;
    return code;
}


Blockly.Blocks['utility_install_module_1669103181802'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "utility_install_module_1669103181802",
                "message0": "| Install Module | %1 Module name %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Installs the specified module",
                "helpUrl": "https://py-bots.github.io/dost/utility/#dost.utility.install_module"
            }

        );
    }
};
Blockly.Python['utility_install_module_1669103181802'] = function (block) {
    Blockly.Python.definitions_[
        "utility"] = "from dost import utility";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `utility.install_module(module_name=${value_param_1})\n`;
    return code;
}


Blockly.Blocks['utility_image_to_text_1669102899754'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "utility_image_to_text_1669102899754",
                "message0": "| Image To Text | %1 Image path %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['String'],
                "colour": "#2680C2",
                "tooltip": "Converts the specified image to text",
                "helpUrl": "https://py-bots.github.io/dost/utility/#dost.utility.image_to_text"
            }

        );
    }
};
Blockly.Python['utility_image_to_text_1669102899754'] = function (block) {
    Blockly.Python.definitions_[
        "utility"] = "from dost import utility";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `utility.image_to_text(image_path=${value_param_1})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['utility_get_module_version_1669102713773'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "utility_get_module_version_1669102713773",
                "message0": "| Get Module Version | %1 Module name %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['String'],
                "colour": "#2680C2",
                "tooltip": "Gets the version of the specified module",
                "helpUrl": "https://py-bots.github.io/dost/utility/#dost.utility.get_module_version"
            }

        );
    }
};
Blockly.Python['utility_get_module_version_1669102713773'] = function (block) {
    Blockly.Python.definitions_[
        "utility"] = "from dost import utility";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `utility.get_module_version(module_name=${value_param_1})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['utility_clear_output_1669102542662'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "utility_clear_output_1669102542662",
                "message0": "| Clear Output | %1",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Clears the output of the console",
                "helpUrl": "https://py-bots.github.io/dost/utility/#dost.utility.clear_output"
            }

        );
    }
};
Blockly.Python['utility_clear_output_1669102542662'] = function (block) {
    Blockly.Python.definitions_[
        "utility"] = "from dost import utility";

    var code = `utility.clear_output()\n`;
    return code;
}


Blockly.Blocks['utility_api_request_1669102420727'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "utility_api_request_1669102420727",
                "message0": "| API Request | %1 URL %2 Method %3 Body %4 Headers %5",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_4', 'check': ['Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Any'],
                "colour": "#2680C2",
                "tooltip": "Makes an API request to the specified URL",
                "helpUrl": "https://py-bots.github.io/dost/utility/#dost.utility.api_request"
            }

        );
    }
};
Blockly.Python['utility_api_request_1669102420727'] = function (block) {
    Blockly.Python.definitions_[
        "utility"] = "from dost import utility";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var value_param_4 = Blockly.Python.valueToCode(block, 'param_4', Blockly.Python.ORDER_ATOMIC);
    var code = `utility.api_request(url=${value_param_1}, method=${value_param_2}, body=${value_param_3}, headers=${value_param_4})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['text_remove_special_characters_1669101698336'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "text_remove_special_characters_1669101698336",
                "message0": "| Remove Special Characters | %1 Text %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['String'],
                "colour": "#2680C2",
                "tooltip": "Removes special characters from the given string.",
                "helpUrl": "https://py-bots.github.io/dost/text/#dost.text.remove_special_characters"
            }

        );
    }
};
Blockly.Python['text_remove_special_characters_1669101698336'] = function (block) {
    Blockly.Python.definitions_[
        "text"] = "from dost import text";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `text.remove_special_characters(text=${value_param_1})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['text_get_numbers_1669101548772'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "text_get_numbers_1669101548772",
                "message0": "| Get Numbers | %1 Text %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['String'],
                "colour": "#2680C2",
                "tooltip": "Extracts alphabets from the given string.",
                "helpUrl": "https://py-bots.github.io/dost/text/#dost.text.get_numbers"
            }

        );
    }
};
Blockly.Python['text_get_numbers_1669101548772'] = function (block) {
    Blockly.Python.definitions_[
        "text"] = "from dost import text";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `text.get_numbers(text=${value_param_1})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['text_get_alphabets_1669101381809'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "text_get_alphabets_1669101381809",
                "message0": "| Get Alphabets | %1 Text %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['String'],
                "colour": "#2680C2",
                "tooltip": "Extracts alphabets from the given string.",
                "helpUrl": "https://py-bots.github.io/dost/text/#dost.text.get_alphabets"
            }

        );
    }
};
Blockly.Python['text_get_alphabets_1669101381809'] = function (block) {
    Blockly.Python.definitions_[
        "text"] = "from dost import text";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `text.get_alphabets(text=${value_param_1})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['excel_upload_dataframe_to_google_spreadsheet_1669097472632'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_upload_dataframe_to_google_spreadsheet_1669097472632",
                "message0": "| Upload dataframe to google spreadsheet | %1 Authentication object %2 Spreadsheet url %3 Sheet name %4 Dataframe %5",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_4', 'check': ['Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Uploads a dataframe to a google spreadsheet",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.upload_dataframe_to_google_spreadsheet"
            }

        );
    }
};
Blockly.Python['excel_upload_dataframe_to_google_spreadsheet_1669097472632'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var value_param_4 = Blockly.Python.valueToCode(block, 'param_4', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.upload_dataframe_to_google_spreadsheet(auth=${value_param_1}, spreadsheet_url=${value_param_2}, sheet_name=${value_param_3}, df=${value_param_4})\n`;
    return code;
}


Blockly.Blocks['excel_set_value_in_df_1669096716016'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_set_value_in_df_1669096716016",
                "message0": "| Set value in df | %1 Dataframe %2 Row number %3 Column number %4 Value %5",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['Number'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['Number'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_4', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Any'],
                "colour": "#2680C2",
                "tooltip": "Sets value in dataframe",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.set_value_in_df"
            }

        );
    }
};
Blockly.Python['excel_set_value_in_df_1669096716016'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var value_param_4 = Blockly.Python.valueToCode(block, 'param_4', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.set_value_in_df(df=${value_param_1}, row_number=${value_param_2}, column_number=${value_param_3}, value=${value_param_4})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['excel_set_single_cell_1669096463852'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_set_single_cell_1669096463852",
                "message0": "| Set single cell | %1 Dataframe %2 Column name %3  Cell number %4 Value %5",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['Number'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_4', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Any'],
                "colour": "#2680C2",
                "tooltip": "Writes the given text to the desired column/cell number for the given excel file",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.set_single_cell"
            }

        );
    }
};
Blockly.Python['excel_set_single_cell_1669096463852'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var value_param_4 = Blockly.Python.valueToCode(block, 'param_4', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.set_single_cell(df=${value_param_1}, column_name=${value_param_2}, cell_number=${value_param_3}, value=${value_param_4})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['excel_remove_duplicates_1669096109722'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_remove_duplicates_1669096109722",
                "message0": "| Remove duplicates | %1 Dataframe %2 Column name %3",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['', 'Number', 'Array', 'String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Any'],
                "colour": "#2680C2",
                "tooltip": "Removes the duplicates from the given column",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.remove_duplicates"
            }

        );
    }
};
Blockly.Python['excel_remove_duplicates_1669096109722'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.remove_duplicates(df=${value_param_1}, column_name=${value_param_2})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['excel_isNaN_1669095771671'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_isNaN_1669095771671",
                "message0": "| IsNaN | %1 Value %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Boolean'],
                "colour": "#2680C2",
                "tooltip": "Checks if the value is NaN",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.isNaN"
            }

        );
    }
};
Blockly.Python['excel_isNaN_1669095771671'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.isNaN(value=${value_param_1})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['excel_get_value_in_df_1669095596063'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_get_value_in_df_1669095596063",
                "message0": "| Get value in df | %1 Dataframe %2 Row number %3 Column number %4",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['Number'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['Number'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['String'],
                "colour": "#2680C2",
                "tooltip": "Gets value from dataframe",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.get_value_in_df"
            }

        );
    }
};
Blockly.Python['excel_get_value_in_df_1669095596063'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.get_value_in_df(df=${value_param_1}, row_number=${value_param_2}, column_number=${value_param_3})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['excel_get_row_column_count_1669094976391'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_get_row_column_count_1669094976391",
                "message0": "| Get row column count | %1 Dataframe %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Array'],
                "colour": "#2680C2",
                "tooltip": "Returns the row and column count of the dataframe",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.get_row_column_count"
            }

        );
    }
};
Blockly.Python['excel_get_row_column_count_1669094976391'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.get_row_column_count(df=${value_param_1})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['file_move_1669056708080'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "file_move_1669056708080",
                "message0": "| Move a File | %1 Input File path %2 Output File path %3",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String', 'Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Move a file from source to destination",
                "helpUrl": "https://py-bots.github.io/dost/file/#dost.file.move"
            }

        );
    }
};
Blockly.Python['file_move_1669056708080'] = function (block) {
    Blockly.Python.definitions_[
        "file"] = "from dost import file";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var code = `file.move(source=${value_param_1}, destination=${value_param_2})\n`;
    return code;
}


Blockly.Blocks['file_write_text_1669055894457'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "file_write_text_1669055894457",
                "message0": "| Write Text | %1 Path of File %2 Content %3",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Write a text file with the given contents",
                "helpUrl": "https://py-bots.github.io/dost/file/#dost.file.write_text"
            }

        );
    }
};
Blockly.Python['file_write_text_1669055894457'] = function (block) {
    Blockly.Python.definitions_[
        "file"] = "from dost import file";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var code = `file.write_text(path=${value_param_1}, contents=${value_param_2})\n`;
    return code;
}


Blockly.Blocks['windows_show_desktop_1669052323839'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "windows_show_desktop_1669052323839",
                "message0": "| Show Desktop | %1",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Minimize all windows and show the desktop",
                "helpUrl": "https://py-bots.github.io/dost/windows/#dost.windows.show_desktop"
            }

        );
    }
};
Blockly.Python['windows_show_desktop_1669052323839'] = function (block) {
    Blockly.Python.definitions_[
        "windows"] = "from dost import windows";

    var code = `windows.show_desktop()\n`;
    return code;
}


Blockly.Blocks['windows_minimize_window_1669052247010'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "windows_minimize_window_1669052247010",
                "message0": "| Minimize Windows | %1 Window name %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Minimize windows",
                "helpUrl": "https://py-bots.github.io/dost/windows/#dost.windows.minimize_window"
            }

        );
    }
};
Blockly.Python['windows_minimize_window_1669052247010'] = function (block) {
    Blockly.Python.definitions_[
        "windows"] = "from dost import windows";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `windows.minimize_window(window_name=${value_param_1})\n`;
    return code;
}


Blockly.Blocks['windows_maximize_window_1669051946104'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "windows_maximize_window_1669051946104",
                "message0": "| Maximize Windows | %1 Window name %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Maximize windows",
                "helpUrl": "https://py-bots.github.io/dost/windows/#dost.windows.maximize_window"
            }

        );
    }
};
Blockly.Python['windows_maximize_window_1669051946104'] = function (block) {
    Blockly.Python.definitions_[
        "windows"] = "from dost import windows";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `windows.maximize_window(window_name=${value_param_1})\n`;
    return code;
}


Blockly.Blocks['windows_launch_app_1669051764016'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "windows_launch_app_1669051764016",
                "message0": "| Launch App | %1 Path to application or application name %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Launch any exe/bat application",
                "helpUrl": "https://py-bots.github.io/dost/windows/#dost.windows.launch_app"
            }

        );
    }
};
Blockly.Python['windows_launch_app_1669051764016'] = function (block) {
    Blockly.Python.definitions_[
        "windows"] = "from dost import windows";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `windows.launch_app(path=${value_param_1})\n`;
    return code;
}


Blockly.Blocks['windows_get_all_opened_window_titles_1669051580802'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "windows_get_all_opened_window_titles_1669051580802",
                "message0": "| Get All Opened Window Titles | %1",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }],
                "inputsInline": true,
                output: ['', 'Array', 'String'],
                "colour": "#2680C2",
                "tooltip": "Windows module for dost.This module contains functions that are specific to Windows",
                "helpUrl": "https://py-bots.github.io/dost/windows/#dost.windows.get_all_opened_window_titles"
            }

        );
    }
};
Blockly.Python['windows_get_all_opened_window_titles_1669051580802'] = function (block) {
    Blockly.Python.definitions_[
        "windows"] = "from dost import windows";

    var code = `windows.get_all_opened_window_titles()\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['windows_get_active_window_1669051446787'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "windows_get_active_window_1669051446787",
                "message0": "| Get Active Window | %1",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }],
                "inputsInline": true,
                output: ['String'],
                "colour": "#2680C2",
                "tooltip": "Get active window",
                "helpUrl": "https://py-bots.github.io/dost/windows/#dost.windows.get_active_window"
            }

        );
    }
};
Blockly.Python['windows_get_active_window_1669051446787'] = function (block) {
    Blockly.Python.definitions_[
        "windows"] = "from dost import windows";

    var code = `windows.get_active_window()\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['windows_close_window_1669051216734'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "windows_close_window_1669051216734",
                "message0": "| Close Window | %1 Window name %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Closes the window",
                "helpUrl": "https://py-bots.github.io/dost/windows/#dost.windows.close_window"
            }

        );
    }
};
Blockly.Python['windows_close_window_1669051216734'] = function (block) {
    Blockly.Python.definitions_[
        "windows"] = "from dost import windows";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `windows.close_window(window_name=${value_param_1})\n`;
    return code;
}


Blockly.Blocks['windows_activate_window_1669051136235'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "windows_activate_window_1669051136235",
                "message0": "| Activate Window | %1 Window name %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Activate window",
                "helpUrl": "https://py-bots.github.io/dost/windows/#dost.windows.activate_window"
            }

        );
    }
};
Blockly.Python['windows_activate_window_1669051136235'] = function (block) {
    Blockly.Python.definitions_[
        "windows"] = "from dost import windows";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `windows.activate_window(window_name=${value_param_1})\n`;
    return code;
}


Blockly.Blocks['file_rename_1669050923017'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "file_rename_1669050923017",
                "message0": "| Rename File | %1 Path to File %2 New name %3",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Rename a file",
                "helpUrl": "https://py-bots.github.io/dost/file/#dost.file.rename"
            }

        );
    }
};
Blockly.Python['file_rename_1669050923017'] = function (block) {
    Blockly.Python.definitions_[
        "file"] = "from dost import file";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var code = `file.rename(path=${value_param_1}, new_name=${value_param_2})\n`;
    return code;
}


Blockly.Blocks['voice_text_to_speech_1669050795243'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "voice_text_to_speech_1669050795243",
                "message0": "| Text To Speech | %1 Text %2 Show %3 Rate %4",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['Boolean'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['Number'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Converts text to speech offline",
                "helpUrl": "https://py-bots.github.io/dost/voice/#dost.voice.text_to_speech"
            }

        );
    }
};
Blockly.Python['voice_text_to_speech_1669050795243'] = function (block) {
    Blockly.Python.definitions_[
        "voice"] = "from dost import voice";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var code = `voice.text_to_speech(text=${value_param_1}, show=${value_param_2}, rate=${value_param_3})\n`;
    return code;
}


Blockly.Blocks['message_warning_1669050668259'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "message_warning_1669050668259",
                "message0": "| Warning | %1 Message %2 Title %3",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Display a warning message to the user",
                "helpUrl": "https://py-bots.github.io/dost/message/#dost.message.warning"
            }

        );
    }
};
Blockly.Python['message_warning_1669050668259'] = function (block) {
    Blockly.Python.definitions_[
        "message"] = "from dost import message";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var code = `message.warning(message=${value_param_1}, title=${value_param_2})\n`;
    return code;
}


Blockly.Blocks['message_info_1669050482409'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "message_info_1669050482409",
                "message0": "| Info Message | %1 Message  %2 Title %3",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Display an info message to the user",
                "helpUrl": "https://py-bots.github.io/dost/message/#dost.message.info"
            }

        );
    }
};
Blockly.Python['message_info_1669050482409'] = function (block) {
    Blockly.Python.definitions_[
        "message"] = "from dost import message";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var code = `message.info(message=${value_param_1}, title=${value_param_2})\n`;
    return code;
}


Blockly.Blocks['voice_speech_to_text_1669050313140'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "voice_speech_to_text_1669050313140",
                "message0": "| Speech To Text | %1",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }],
                "inputsInline": true,
                output: ['String'],
                "colour": "#2680C2",
                "tooltip": "Converts speech to text",
                "helpUrl": "https://py-bots.github.io/dost/voice/#dost.voice.speech_to_text"
            }

        );
    }
};
Blockly.Python['voice_speech_to_text_1669050313140'] = function (block) {
    Blockly.Python.definitions_[
        "voice"] = "from dost import voice";

    var code = `voice.speech_to_text()\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['message_error_1669050244522'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "message_error_1669050244522",
                "message0": "| Error Message | %1 Message %2 Title %3",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Display an error message to the user",
                "helpUrl": "https://py-bots.github.io/dost/message/#dost.message.error"
            }

        );
    }
};
Blockly.Python['message_error_1669050244522'] = function (block) {
    Blockly.Python.definitions_[
        "message"] = "from dost import message";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var code = `message.error(message=${value_param_1}, title=${value_param_2})\n`;
    return code;
}


Blockly.Blocks['clipboard_set_data_1669050069949'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "clipboard_set_data_1669050069949",
                "message0": "| Set Data | %1 Data %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Set the clipboard data to the given string.",
                "helpUrl": "https://py-bots.github.io/dost/clipboard/#dost.clipboard.set_data"
            }

        );
    }
};
Blockly.Python['clipboard_set_data_1669050069949'] = function (block) {
    Blockly.Python.definitions_[
        "clipboard"] = "from dost import clipboard";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `clipboard.set_data(data=${value_param_1})\n`;
    return code;
}


Blockly.Blocks['clipboard_get_data_1669049912772'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "clipboard_get_data_1669049912772",
                "message0": "| Get Clipboard Data | %1",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }],
                "inputsInline": true,
                output: ['String'],
                "colour": "#2680C2",
                "tooltip": "Get the clipboard data as a string",
                "helpUrl": "https://py-bots.github.io/dost/clipboard/#dost.clipboard.get_data"
            }

        );
    }
};
Blockly.Python['clipboard_get_data_1669049912772'] = function (block) {
    Blockly.Python.definitions_[
        "clipboard"] = "from dost import clipboard";

    var code = `clipboard.get_data()\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['file_read_text_1669049135264'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "file_read_text_1669049135264",
                "message0": "| Read Text | %1 path of file %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Reads a text file and returns its contents as a string",
                "helpUrl": "https://py-bots.github.io/dost/file/#dost.file.read_text"
            }

        );
    }
};
Blockly.Python['file_read_text_1669049135264'] = function (block) {
    Blockly.Python.definitions_[
        "file"] = "from dost import file";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `file.read_text(path=${value_param_1})\n`;
    return code;
}


Blockly.Blocks['file_delete_1669048668981'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "file_delete_1669048668981",
                "message0": "| Delete a file | %1 path of file %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Delete a file",
                "helpUrl": "https://py-bots.github.io/dost/file/#dost.file.delete"
            }

        );
    }
};
Blockly.Python['file_delete_1669048668981'] = function (block) {
    Blockly.Python.definitions_[
        "file"] = "from dost import file";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `file.delete(path=${value_param_1})\n`;
    return code;
}


Blockly.Blocks['file_create_1669048400557'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "file_create_1669048400557",
                "message0": "| Create File | %1 path of file %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Create a file",
                "helpUrl": "https://py-bots.github.io/dost/file/#dost.file.create"
            }

        );
    }
};
Blockly.Python['file_create_1669048400557'] = function (block) {
    Blockly.Python.definitions_[
        "file"] = "from dost import file";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `file.create(path=${value_param_1})\n`;
    return code;
}


Blockly.Blocks['file_copy_1669048131419'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "file_copy_1669048131419",
                "message0": "| Copy File | %1 Input File %2 Output File %3",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String', 'Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Copy a file from source to destination",
                "helpUrl": "https://py-bots.github.io/dost/file/#dost.file.copy"
            }

        );
    }
};
Blockly.Python['file_copy_1669048131419'] = function (block) {
    Blockly.Python.definitions_[
        "file"] = "from dost import file";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var code = `file.copy(source=${value_param_1}, destination=${value_param_2})\n`;
    return code;
}


Blockly.Blocks['converter_png_to_jpg_1668867000798'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "converter_png_to_jpg_1668867000798",
                "message0": "| PNG to JPG | %1 Input File Path %2 Output Folder %3 Output Filename %4",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Converts the image from png to jpg format.",
                "helpUrl": "https://py-bots.github.io/dost/converter/#dost.converter.png_to_jpg"
            }

        );
    }
};
Blockly.Python['converter_png_to_jpg_1668867000798'] = function (block) {
    Blockly.Python.definitions_[
        "converter"] = "from dost import converter";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var code = `converter.png_to_jpg(input_filepath=${value_param_1}, output_folder=${value_param_2}, output_filename=${value_param_3})\n`;
    return code;
}


Blockly.Blocks['converter_jpg_to_png_1668866731670'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "converter_jpg_to_png_1668866731670",
                "message0": "| JPG to PNG | %1 Input File Path %2 Output Folder %3 Output Filename %4",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Convert a JPG image to a PNG image.",
                "helpUrl": "https://py-bots.github.io/dost/converter/#dost.converter.jpg_to_png"
            }

        );
    }
};
Blockly.Python['converter_jpg_to_png_1668866731670'] = function (block) {
    Blockly.Python.definitions_[
        "converter"] = "from dost import converter";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var code = `converter.jpg_to_png(input_filepath=${value_param_1}, output_folder=${value_param_2}, output_filename=${value_param_3})\n`;
    return code;
}


Blockly.Blocks['converter_image_to_base64_1668866333553'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "converter_image_to_base64_1668866333553",
                "message0": "| Image to Base64 | %1 Input File Path %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['String'],
                "colour": "#2680C2",
                "tooltip": "Get a base64 encoded string from an image.",
                "helpUrl": "https://py-bots.github.io/dost/converter/#dost.converter.image_to_base64"
            }

        );
    }
};
Blockly.Python['converter_image_to_base64_1668866333553'] = function (block) {
    Blockly.Python.definitions_[
        "converter"] = "from dost import converter";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `converter.image_to_base64(input_filepath=${value_param_1})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['converter_excel_to_html_1668866124788'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "converter_excel_to_html_1668866124788",
                "message0": "| Excel to HTML | %1 Input File Path %2 Output Folder %3 Output Filename %4",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Converts the excel file to colored html file.",
                "helpUrl": "https://py-bots.github.io/dost/converter/#dost.converter.excel_to_html"
            }

        );
    }
};
Blockly.Python['converter_excel_to_html_1668866124788'] = function (block) {
    Blockly.Python.definitions_[
        "converter"] = "from dost import converter";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var code = `converter.excel_to_html(input_filepath=${value_param_1}, output_folder=${value_param_2}, output_filename=${value_param_3})\n`;
    return code;
}


Blockly.Blocks['converter_csv_to_excel_1668865795698'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "converter_csv_to_excel_1668865795698",
                "message0": "| CSV to Excel | %1 Input File Path %2 Output Folder %3 Output Filename %4 Header %5 Separator %6",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_4', 'check': ['Boolean'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_5', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Convert a CSV file to an Excel file.",
                "helpUrl": "https://py-bots.github.io/dost/converter/#dost.converter.csv_to_excel"
            }

        );
    }
};
Blockly.Python['converter_csv_to_excel_1668865795698'] = function (block) {
    Blockly.Python.definitions_[
        "converter"] = "from dost import converter";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var value_param_4 = Blockly.Python.valueToCode(block, 'param_4', Blockly.Python.ORDER_ATOMIC);
    var value_param_5 = Blockly.Python.valueToCode(block, 'param_5', Blockly.Python.ORDER_ATOMIC);
    var code = `converter.csv_to_excel(input_filepath=${value_param_1}, output_folder=${value_param_2}, output_filename=${value_param_3}, contains_headers=${value_param_4}, sep=${value_param_5})\n`;
    return code;
}


Blockly.Blocks['converter_base64_to_image_1668865396102'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "converter_base64_to_image_1668865396102",
                "message0": "| Base64 to Image | %1 Input text %2 Output Folder  %3 Output Filename %4",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Get an image from a base64 encoded string.",
                "helpUrl": "https://py-bots.github.io/dost/converter/#dost.converter.base64_to_image"
            }

        );
    }
};
Blockly.Python['converter_base64_to_image_1668865396102'] = function (block) {
    Blockly.Python.definitions_[
        "converter"] = "from dost import converter";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var code = `converter.base64_to_image(input_text=${value_param_1}, output_folder=${value_param_2}, output_filename=${value_param_3})\n`;
    return code;
}


Blockly.Blocks['keyboard_write_1668864817432'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "keyboard_write_1668864817432",
                "message0": "| Write | %1 Text %2 Window Name %3 Key %4",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Write text to window and press enter key.",
                "helpUrl": "https://py-bots.github.io/dost/keyboard/#dost.keyboard.write"
            }

        );
    }
};
Blockly.Python['keyboard_write_1668864817432'] = function (block) {
    Blockly.Python.definitions_[
        "keyboard"] = "from dost import keyboard";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var code = `keyboard.write(text=${value_param_1}, window=${value_param_2}, end=${value_param_3})\n`;
    return code;
}


Blockly.Blocks['keyboard_press_1668864510870'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "keyboard_press_1668864510870",
                "message0": "| Press | %1 Key 1 %2 Key 2 %3 Key 3 %4 Window Name %5",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_4', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Press a key or a combination of keys.",
                "helpUrl": "https://py-bots.github.io/dost/keyboard/#dost.keyboard.press"
            }

        );
    }
};
Blockly.Python['keyboard_press_1668864510870'] = function (block) {
    Blockly.Python.definitions_[
        "keyboard"] = "from dost import keyboard";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var value_param_4 = Blockly.Python.valueToCode(block, 'param_4', Blockly.Python.ORDER_ATOMIC);
    var code = `keyboard.press(key_1=${value_param_1}, key_2=${value_param_2}, key_3=${value_param_3}, window=${value_param_4})\n`;
    return code;
}


Blockly.Blocks['keyboard_hit_enter_1668864227733'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "keyboard_hit_enter_1668864227733",
                "message0": "| Hit enter  | %1 Window Name %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Hit enter key",
                "helpUrl": "https://py-bots.github.io/dost/keyboard/#dost.keyboard.hit_enter"
            }

        );
    }
};
Blockly.Python['keyboard_hit_enter_1668864227733'] = function (block) {
    Blockly.Python.definitions_[
        "keyboard"] = "from dost import keyboard";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `keyboard.hit_enter(window=${value_param_1})\n`;
    return code;
}


Blockly.Blocks['mouse_search_1668864008229'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "mouse_search_1668864008229",
                "message0": "| Mouse Search | %1 Path of the image file %2 Confidence level %3 Waiting time %4 Left click %5",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Array', 'String', 'Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['Number'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['Number'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_4', 'check': ['Boolean'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Array'],
                "colour": "#2680C2",
                "tooltip": "Searches for the given image and returns the co-ordinates of the image.",
                "helpUrl": "https://py-bots.github.io/dost/mouse/#dost.mouse.search"
            }

        );
    }
};
Blockly.Python['mouse_search_1668864008229'] = function (block) {
    Blockly.Python.definitions_[
        "mouse"] = "from dost import mouse";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var value_param_4 = Blockly.Python.valueToCode(block, 'param_4', Blockly.Python.ORDER_ATOMIC);
    var code = `mouse.search(image_path=${value_param_1}, conf=${value_param_2}, wait=${value_param_3}, left_click=${value_param_4})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['mouse_click_1668863373368'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "mouse_click_1668863373368",
                "message0": "| Mouse Click | %1 X co-ordinate %2 Y co-ordinate %3 Button %4 Number of Clicks %5 Absolute %6",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Number'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['Number'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_4', 'check': ['Number'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_5', 'check': ['Boolean'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Clicks the mouse at the given co-ordinates.",
                "helpUrl": "https://py-bots.github.io/dost/mouse/#dost.mouse.click"
            }

        );
    }
};
Blockly.Python['mouse_click_1668863373368'] = function (block) {
    Blockly.Python.definitions_[
        "mouse"] = "from dost import mouse";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var value_param_4 = Blockly.Python.valueToCode(block, 'param_4', Blockly.Python.ORDER_ATOMIC);
    var value_param_5 = Blockly.Python.valueToCode(block, 'param_5', Blockly.Python.ORDER_ATOMIC);
    var code = `mouse.click(x=${value_param_1}, y=${value_param_2}, button=${value_param_3}, clicks=${value_param_4}, absolute=${value_param_5})\n`;
    return code;
}


Blockly.Blocks['excel_get_all_sheet_names_1668847529842'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_get_all_sheet_names_1668847529842",
                "message0": "| get all sheet names | %1 Input filepath %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Array'],
                "colour": "#2680C2",
                "tooltip": "Gets the sheet names from the excel file",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.get_all_sheet_names"
            }

        );
    }
};
Blockly.Python['excel_get_all_sheet_names_1668847529842'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.get_all_sheet_names(input_filepath=${value_param_1})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['excel_get_all_header_columns_1668847280912'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_get_all_header_columns_1668847280912",
                "message0": "| get all header columns | %1 data frame %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Array'],
                "colour": "#2680C2",
                "tooltip": "Gets all header columns from the excel file",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.get_all_header_columns"
            }

        );
    }
};
Blockly.Python['excel_get_all_header_columns_1668847280912'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.get_all_header_columns(df=${value_param_1})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['excel_drop_columns_1668846989713'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_drop_columns_1668846989713",
                "message0": "| Drop columns | %1 data frame %2 Column Names %3",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String', 'Array'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Any'],
                "colour": "#2680C2",
                "tooltip": "Drops the columns from the excel file",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.drop_columns"
            }

        );
    }
};
Blockly.Python['excel_drop_columns_1668846989713'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.drop_columns(df=${value_param_1}, cols=${value_param_2})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['excel_df_from_string_1668846600059'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_df_from_string_1668846600059",
                "message0": "| df from string | %1 data frame string %2 word delimiter %3 Line delimiter %4 column names %5",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_4', 'check': ['Array'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Any'],
                "colour": "#2680C2",
                "tooltip": "Converts string to dataframe",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.df_from_string"
            }

        );
    }
};
Blockly.Python['excel_df_from_string_1668846600059'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var value_param_4 = Blockly.Python.valueToCode(block, 'param_4', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.df_from_string(df_string=${value_param_1}, word_delimiter=${value_param_2}, line_delimiter=${value_param_3}, column_names=${value_param_4})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['excel_df_from_list_1668845724264'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_df_from_list_1668845724264",
                "message0": "| df from list | %1 Values/List of lists %2 column names %3",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Array'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['Array'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Any'],
                "colour": "#2680C2",
                "tooltip": "Converts list of lists to dataframe",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.df_from_list"
            }

        );
    }
};
Blockly.Python['excel_df_from_list_1668845724264'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.df_from_list(list_of_lists=${value_param_1}, column_names=${value_param_2})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['excel_df_extract_sub_df_1668845246471'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_df_extract_sub_df_1668845246471",
                "message0": "| df extract sub df | %1 data frame %2 Row start %3 row end %4 column start %5 column end %6",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['Number'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['Number'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_4', 'check': ['Number'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_5', 'check': ['Number'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Any'],
                "colour": "#2680C2",
                "tooltip": "Extracts sub dataframe from the given dataframe",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.df_extract_sub_df"
            }

        );
    }
};
Blockly.Python['excel_df_extract_sub_df_1668845246471'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var value_param_4 = Blockly.Python.valueToCode(block, 'param_4', Blockly.Python.ORDER_ATOMIC);
    var value_param_5 = Blockly.Python.valueToCode(block, 'param_5', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.df_extract_sub_df(df=${value_param_1}, row_start=${value_param_2}, row_end=${value_param_3}, column_start=${value_param_4}, column_end=${value_param_5})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['excel_df_drop_rows_1668844405417'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_df_drop_rows_1668844405417",
                "message0": "| df drop rows | %1 data frame %2 Row start %3 row end %4",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['Number'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['Number'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Any'],
                "colour": "#2680C2",
                "tooltip": "Drops rows from dataframe",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.df_drop_rows"
            }

        );
    }
};
Blockly.Python['excel_df_drop_rows_1668844405417'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.df_drop_rows(df=${value_param_1}, row_start=${value_param_2}, row_end=${value_param_3})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['excel_dataframe_to_excel_1668839843957'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_dataframe_to_excel_1668839843957",
                "message0": "| Dataframe to excel | %1 data frame %2 Output folder Path %3 output file name %4 output sheet name %5 Mode %6",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_4', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_5', 'check': ['String'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Converts the dataframe to excel file",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.dataframe_to_excel"
            }

        );
    }
};
Blockly.Python['excel_dataframe_to_excel_1668839843957'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var value_param_4 = Blockly.Python.valueToCode(block, 'param_4', Blockly.Python.ORDER_ATOMIC);
    var value_param_5 = Blockly.Python.valueToCode(block, 'param_5', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.dataframe_to_excel(df=${value_param_1}, output_folder=${value_param_2}, output_filename=${value_param_3}, output_sheetname=${value_param_4}, mode=${value_param_5})\n`;
    return code;
}


Blockly.Blocks['excel_create_file_1668838739786'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_create_file_1668838739786",
                "message0": "| create file | %1 Output folder %2 Output filename %3 Output sheet name(s) %4",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Any'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_2', 'check': ['String'], 'align': 'RIGHT' }, { 'type': 'input_value', 'name': 'param_3', 'check': ['String', 'Array'], 'align': 'RIGHT' }],
                "inputsInline": true,
                previousStatement: null,
                nextStatement: null,
                "colour": "#2680C2",
                "tooltip": "Creates an excel file with a sheet in the specified folder",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.create_file"
            }

        );
    }
};
Blockly.Python['excel_create_file_1668838739786'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var value_param_2 = Blockly.Python.valueToCode(block, 'param_2', Blockly.Python.ORDER_ATOMIC);
    var value_param_3 = Blockly.Python.valueToCode(block, 'param_3', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.create_file(output_folder=${value_param_1}, output_filename=${value_param_2}, output_sheetname=${value_param_3})\n`;
    return code;
}


Blockly.Blocks['excel_clear_sheet_1668838155244'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_clear_sheet_1668838155244",
                "message0": "| clear sheet | %1 data frame %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Any'],
                "colour": "#2680C2",
                "tooltip": "Clears the sheet",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.clear_sheet"
            }

        );
    }
};
Blockly.Python['excel_clear_sheet_1668838155244'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.clear_sheet(df=${value_param_1})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Blocks['excel_authenticate_google_spreadsheet_1668793609672'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "excel_authenticate_google_spreadsheet_1668793609672",
                "message0": "| Authenticate Google Spreadsheet | %1 credential file path %2",
                "args0": [{ 'type': 'input_dummy', 'align': 'CENTRE' }, { 'type': 'input_value', 'name': 'param_1', 'check': ['Any'], 'align': 'RIGHT' }],
                "inputsInline": true,
                output: ['Any'],
                "colour": "#2680C2",
                "tooltip": "Creates authentication object for google spreadsheet.",
                "helpUrl": "https://py-bots.github.io/dost/excel/#dost.excel.authenticate_google_spreadsheet"
            }

        );
    }
};
Blockly.Python['excel_authenticate_google_spreadsheet_1668793609672'] = function (block) {
    Blockly.Python.definitions_[
        "excel"] = "from dost import excel";
    var value_param_1 = Blockly.Python.valueToCode(block, 'param_1', Blockly.Python.ORDER_ATOMIC);
    var code = `excel.authenticate_google_spreadsheet(credential_file_path=${value_param_1})\n`;
    return [code, Blockly.Python.ORDER_NONE];
}

