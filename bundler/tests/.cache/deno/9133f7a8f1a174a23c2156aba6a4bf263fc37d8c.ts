// Loaded from https://deno.land/x/discordeno@11.0.0-rc.2/src/types/interactions/commands/edit_global_application_command.ts


import { ApplicationCommandOption } from "./application_command_option.ts";

/** https://discord.com/developers/docs/interactions/slash-commands#edit-global-application-command-json-params */
export interface EditGlobalApplicationCommand {
  /** 1-31 character name matching lowercase `^[\w-]{1,32}$` */
  name?: string;
  /** 1-100 character description */
  description?: string;
  /** The parameters for the command */
  options?: ApplicationCommandOption[] | null;
}