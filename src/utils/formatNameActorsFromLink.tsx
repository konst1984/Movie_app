function formatName(actor: string): string {
  let name = "";
  let actorNameSplit = actor.split(" ");
  for (let i = 0; i < actorNameSplit.length; i++) {
    name +=
      i === actorNameSplit.length - 1
        ? actorNameSplit[i]
        : actorNameSplit[i] + "_";
  }
  return name;
}

export const renderLinkWiki = (actors: string | undefined) =>
  actors?.split(",").map((actor: string) => (
    <a
      key={actor}
      className="link-wiki"
      href={`https://en.wikipedia.org/wiki/${formatName(actor)}`}
      target="_blank"
      rel="noreferrer"
    >
      {actor === actors.split(",").at(-1) ? `${actor}.` : `${actor},`}
    </a>
  ));
