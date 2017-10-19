/*  models.js
    Set of different models
*/

// Stickynote Class (Object Constructor)

function StickyNote() {
    let _id;
    let _message;

    let _createdDate;
    let _modifiedDate = null;
    let _deletedDate = null;

    function toString() {
        return _message;
    }

    return {
        // id
        get id() {
            return _id;
        },
        set id(value) {
            _id = value;
        },
        // message
        get message() {
            return _message;
        },
        set message(value) {
            _message = value;
        },
        // createdDate
        get createdDate() {
            return _createdDate;
        },
        set createdDate(value) {
            _createdDate = value;
        },
        // modifiedDate
        get modifiedDate() {
            return _modifiedDate;
        },
        set modifiedDate(value) {
            _modifiedDate = value;
        },
        // deletedDate
        get deletedDate() {
            return _deletedDate;
        },
        set deletedDate(value) {
            _deletedDate = value;
        }
    }
}