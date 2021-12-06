import BountyImg from "../assets/tokens/BOUNTY.png";

function toUrl(tokenPath: string): string {
    const host = window.location.origin;
    return `${host}/${tokenPath}`;
}

export function getTokenUrl(name: string) {
    if (name === "bounty") {
        return toUrl(BountyImg);
    }

    if (name === "sbounty") {
        return toUrl(BountyImg);
    }

    throw Error(`Token url doesn't support: ${name}`);
}
