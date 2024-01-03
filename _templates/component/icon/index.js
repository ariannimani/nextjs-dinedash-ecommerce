// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const inflection = require("inflection");

module.exports = {
  prompt: async ({ prompter, args }) => {
    let { name } = args;

    const message = name
      ? `What type of icon component is "${name}"?`
      : "What type do you want to create?";

    const { type } = await prompter.prompt({
      type: "select",
      name: "type",
      choices: ["Icon"],
      message,
    });

    if (!name) {
      name = (
        await prompter.prompt({
          type: "input",
          name: "name",
          message: "What's the name of your icon component?",
        })
      ).name;
    }

    if (name[0].toLowerCase() === name[0]) {
      // eslint-disable-next-line no-console
      console.log("Icon Component should start with an Uppercased letter.");
      process.exit(1);
    }

    const types = inflection.pluralize(type.toLowerCase());
    const newName = name + type;
    const fileName = `${types}/${newName}/${newName}`;
    const nameInCamelCase = name[0].toLowerCase() + name.substring(1);

    return {
      type,
      types,
      name,
      newName,
      nameInCamelCase,
      path_from_root: `packages/ui/src/${fileName}`,
      path_from_types: `./${newName}/${newName}`,
      path_from_components: `./${fileName}`,
    };
  },
};
