import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  characters: defineTable({
    /**
     * The name of the character
     */
    name: v.string(),
    /**
     * The specie of the character
     */
    specie: v.string(),
    /**
     * The background of the character
     */
    background: v.string(),
    /**
     * The class of the character
     */
    class: v.string(),
    /**
     * The sub-class of the character
     */
    sub_class: v.string(),
    /**
     * The gold accumulated by the character
     */
    gold: v.number(),
    /**
     * The downtime accumulated by the character
     */
    dt: v.number(),
    /**
     * The id of the user
     */
    user_id: v.string(),
    /**
     * The UTC timestamp when the character was created
     */
    created_at: v.number(),
    /**
     * The UTC timestamp when the character was last edited
     */
    edited_at: v.number(),
  }),
});
