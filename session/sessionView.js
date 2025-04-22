

export const buildAuthorizedSession = () => {
    return `
    <li>
        <a class="nav-btn" href="./new-ad.html">CREATE AD</a>
    </li>
    <li>
        <button class="nav-btn logout">LOGOUT</button>
    </li>
    `;
}

export function buildUnauthorizedSession() {
    return `
    <li>
        <a class="nav-btn" href="./login.html">LOGIN</a>
    </li>
    <li>
        <a class="nav-btn" href="./register.html">REGISTER</a>
    </li>
    `
}