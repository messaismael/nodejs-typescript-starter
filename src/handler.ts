import { Context, APIGatewayEvent } from 'aws-lambda';

const handler = function (event: APIGatewayEvent, context: Context) {
    const { body } = event;

    console.log("Body", body);

    return { Status: "finished", success: true };
};

export { handler };