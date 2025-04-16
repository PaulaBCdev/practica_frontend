

export const buildAuthorizedSession = () => {
    return `
    <a href="./new-ad.html">Create Ad</a>
    <button class="logout">Logout</button>
    `;
}

export function buildUnauthorizedSession() {
    return `
        <a href="./login.html">Login</a>
        <a href="./register.html">Register</a>
    `
}