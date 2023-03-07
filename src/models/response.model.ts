export interface ResponseError {
    data: object;
    meta: {
        message: string;
        statusCode: string;
    };
}