
const error =
    {
        SUCCESS : 0,
        PARSECD_NOT_IN_DEFAULT : 1,
        STOP_FAILED : 2,
        NICKNAME_EXITS : 3,
        START_ERROR : 4,
        FILE_DELETE_ERROR : 5,
        FOLDER_DELETE_ERROR : 6,
        MOVE_FILE_ERROR : 7,
        MAKE_DIR_ERROR : 8,
        NICKNAME_NOT_EXISTS : 9,
        PARSEC_NOT_INSTALLED : 10,
        PATH_SET_ERROR : 11,
        ADMIN_REQUIRED : 12,
        CONFIG_OR_DATA_FILE_ERROR : 13
    }

const errorToMessageArr = [
    [error.SUCCESS,                 "success"],
    [error.PARSECD_NOT_IN_DEFAULT,  "Parsecd not in default location run \"parsec-switcher setup <parsecd.exe Location>\""],
    [error.STOP_FAILED,             "Stopping parsec process failed"],
    [error.NICKNAME_EXITS,          "Nickname already exists"],
    [error.START_ERROR,             "Error starting parsec"],
    [error.FILE_DELETE_ERROR,       "failed to delete a file"],
    [error.FOLDER_DELETE_ERROR,     "failed to delete a folder"],
    [error.MOVE_FILE_ERROR,         "failed to move a file"],
    [error.MAKE_DIR_ERROR,          "failed to make a directory"],
    [error.NICKNAME_NOT_EXISTS,     "Nickname does not exists"],
    [error.PARSEC_NOT_INSTALLED,    "Parsec not installed"],
    [error.PATH_SET_ERROR,          "Error in creating a path object using path.join"],
    [error.ADMIN_REQUIRED,           "Admin required for the program to function, run again as admin"],
    [error.CONFIG_OR_DATA_FILE_ERROR, "Config or data file error"]
]

const errorToMessage = {}
for ([key,value] of errorToMessageArr){
    errorToMessage[key] = value;
}

module.exports = {
    error,
    errorToMessage
}