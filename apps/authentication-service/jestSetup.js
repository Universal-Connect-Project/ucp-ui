const { server } = require("./src/test/testServer");

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
