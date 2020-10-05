const protocol: string = "https";
const hostname: string = "sc-appointment-api.herokuapp.com";
const port: number | null = null;

export const BaseRestUrls: { [key: string]: string } = {
    LOGIN: `${protocol}://${hostname}${port !== null ? `:${port}` : ""}/api/auth/login`,
    REGISTER: `${protocol}://${hostname}${port !== null ? `:${port}` : ""}/api/auth/register`,
    APPOINTMENTS: `${protocol}://${hostname}${port !== null ? `:${port}` : ""}/api/appointments`,
    PERSON: `${protocol}://${hostname}${port !== null ? `:${port}` : ""}/api/people`,
};