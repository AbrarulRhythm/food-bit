export const feedback = [
    {
        id: 1,
        message: 'Food was Awesome'
    },
    {
        id: 2,
        message: 'I love Food Bite Resturent food'
    },
    {
        id: 3,
        message: 'Kacche Popoue is deleciopus'
    }
];

export async function GET(request) {
    return Response.json({
        status: 200,
        message: 'Yahoooooo API created 🍒'
    });
}