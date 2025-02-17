"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemasOrganizador_inteligente_de_catering = void 0;
const node_1 = __importDefault(require("parse/node"));
const schemasOrganizador_inteligente_de_catering = async () => {
    // Define schema for "users"
    const userSchema = new node_1.default.Schema('User');
    userSchema
        .addString('user_interests')
        .addString('user_timestamp')
        .addString('user_pass_hash')
        .addString('user_session')
        .addString('user_phone')
        .addString('user_brithdate')
        .addString('user_type_user')
        .addObject('user_demographics');
    userSchema.save();
    // Define schema for "person"
    const personSchema = new node_1.default.Schema('Person');
    personSchema
        .addString('per_user_id')
        .addString('per_interests');
    personSchema.save();
    // Define schema for "restaurants"
    const restaurantSchema = new node_1.default.Schema('Restaurants');
    restaurantSchema
        .addString('rest_name')
        .addString('rest_location')
        .addString('rest_specialty')
        .addString('rest_catering_options');
    restaurantSchema.save();
    // Define schema for "catering_suppliers"
    const cateringSupplierSchema = new node_1.default.Schema('CateringSupplier');
    cateringSupplierSchema
        .addString('csu_name')
        .addString('csu_type_of_cuisine')
        .addString('csu_price_range')
        .addBoolean('csu_drinks_service')
        .addString('csu_extra_services')
        .addString('csu_capacity')
        .addString('csu_contact')
        .addString('csu_location');
    cateringSupplierSchema.save();
    // Define schema for "events"
    const eventSchema = new node_1.default.Schema('Event');
    eventSchema
        .addString('eve_type')
        .addString('eve_budget')
        .addString('eve_user_preferences');
    eventSchema.save();
    // Define schema for "advices"
    const adviceSchema = new node_1.default.Schema('Advice');
    adviceSchema
        .addString('adv_interaction_Id')
        .addString('adv_interaction_type')
        .addString('adv_user_id')
        .addString('adv_timestamp')
        .addString('adv_recommendations')
        .addString('adv_user_feedback');
    adviceSchema.save();
    // Define schema for "orders"
    const orderSchema = new node_1.default.Schema('Order');
    orderSchema
        .addString('ord_user')
        .addString('ord_catering_provider')
        .addString('ord_menus')
        .addString('ord_logistics')
        .addString('ord_status');
    orderSchema.save();
    // Define schema for "reviews"
    const reviewSchema = new node_1.default.Schema('Review');
    reviewSchema
        .addString('rew_user')
        .addString('rew_catering_provider')
        .addString('rew_score')
        .addString('rew_comment');
    reviewSchema.save();
};
exports.schemasOrganizador_inteligente_de_catering = schemasOrganizador_inteligente_de_catering;
//# sourceMappingURL=index.js.map