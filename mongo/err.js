module.exports = (UserSchema, BoardSchema, CommentSchema, ApplierSchema, DevNoteSchema) => {

    UserSchema.post('save', (error, res, next) => {
        if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
        else if (error.name === "ValidationError") next(new ValidationError(error.message));
        else next(error);
    });
    UserSchema.post('update', (error, res, next) => {
        if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
        else if (error.name === "ValidationError") next(new ValidationError(error.message));
        else next(error);
    });
    BoardSchema.post('save', (error, res, next) => {
        if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
        else if (error.name === "ValidationError") next(new ValidationError(error.message));
        else next(error);
    });
    BoardSchema.post('update', (error, res, next) => {
        if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
        else if (error.name === "ValidationError") next(new ValidationError(error.message));
        else next(error);
    });
    CommentSchema.post('save', (error, res, next) => {
        if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
        else if (error.name === "ValidationError") next(new ValidationError(error.message));
        else next(error);
    });
    CommentSchema.post('update', (error, res, next) => {
        if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
        else if (error.name === "ValidationError") next(new ValidationError(error.message));
        else next(error);
    });
    DevNoteSchema.post('save', (error, res, next) => {
        if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
        else if (error.name === "ValidationError") next(new ValidationError(error.message));
        else next(error);
    });
    DevNoteSchema.post('update', (error, res, next) => {
        if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
        else if (error.name === "ValidationError") next(new ValidationError(error.message));
        else next(error);
    });
    ApplierSchema.post('save', (error, res, next) => {
        if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
        else if (error.name === "ValidationError") next(new ValidationError(error.message));
        else next(error);
    });
    ApplierSchema.post('update', (error, res, next) => {
        if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
        else if (error.name === "ValidationError") next(new ValidationError(error.message));
        else next(error);
    });
}