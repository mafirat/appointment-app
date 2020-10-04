const protocol: string = "http";
const hostname: string = "localhost";
const port: number = 3500;

export const BaseRestUrls: { [key: string]: string } = {
    LOGIN: `${protocol}://${hostname}:${port}/api/auth/login`,
    REGISTER: `${protocol}://${hostname}:${port}/api/auth/register`,
    APPOINTMENTS: `${protocol}://${hostname}:${port}/api/appointments`,
};