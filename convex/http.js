var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";
var corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};
var http = httpRouter();
http.route({
    path: "/sendOrderConfirmation",
    method: "OPTIONS",
    handler: httpAction(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Response(null, {
                    status: 204,
                    headers: corsHeaders
                })];
        });
    }); }),
});
http.route({
    path: "/sendOrderConfirmation",
    method: "POST",
    handler: httpAction(function (ctx, request) { return __awaiter(void 0, void 0, void 0, function () {
        var body, order, emailHtml, resendApiKey, response, errorData, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.json()];
                case 1:
                    body = _a.sent();
                    return [4 /*yield*/, ctx.runQuery(api.orders.getOrder, {
                            orderId: body.orderId
                        })];
                case 2:
                    order = _a.sent();
                    if (!order) {
                        return [2 /*return*/, new Response(JSON.stringify({ error: "Order not found" }), {
                                status: 404,
                                headers: Object.assign({ "Content-Type": "application/json" }, corsHeaders)
                            })];
                    }
                    emailHtml = "\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <meta charset=\"utf-8\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n          <style>\n            body { \n              font-family: Arial, sans-serif; \n              line-height: 1.6; \n              color: #333; \n              margin: 0;\n              padding: 0;\n              background-color: #f4f4f4;\n            }\n            .container { \n              max-width: 600px; \n              margin: 0 auto; \n              background-color: white;\n            }\n            .header { \n              background: #D87D4A; \n              color: white; \n              padding: 30px 20px; \n              text-align: center; \n            }\n            .header h1 {\n              margin: 0;\n              font-size: 28px;\n              letter-spacing: 2px;\n            }\n            .content { \n              padding: 40px 30px; \n            }\n            .content h2 {\n              color: #D87D4A;\n              margin-top: 0;\n            }\n            .order-item { \n              border-bottom: 1px solid #ddd; \n              padding: 15px 0;\n              display: flex;\n              justify-content: space-between;\n              align-items: center;\n            }\n            .order-item:last-child {\n              border-bottom: none;\n            }\n            .order-summary {\n              background: #f9f9f9;\n              padding: 20px;\n              margin: 20px 0;\n              border-radius: 4px;\n            }\n            .order-summary p {\n              margin: 8px 0;\n              display: flex;\n              justify-content: space-between;\n            }\n            .total { \n              font-size: 20px; \n              font-weight: bold; \n              color: #D87D4A;\n              border-top: 2px solid #D87D4A;\n              padding-top: 10px;\n              margin-top: 10px;\n            }\n            .button { \n              display: inline-block; \n              background: #D87D4A; \n              color: white; \n              padding: 14px 40px; \n              text-decoration: none; \n              border-radius: 4px; \n              margin-top: 20px;\n              font-weight: bold;\n              letter-spacing: 1px;\n            }\n            .footer {\n              background: #f9f9f9;\n              padding: 20px;\n              text-align: center;\n              color: #666;\n              font-size: 14px;\n            }\n            @media only screen and (max-width: 600px) {\n              .content {\n                padding: 20px;\n              }\n            }\n          </style>\n        </head>\n        <body>\n          <div class=\"container\">\n            <div class=\"header\">\n              <h1>AUDIOPHILE</h1>\n            </div>\n            <div class=\"content\">\n              <h2>Thank you for your order, ".concat(order.customerName, "!</h2>\n              <p>Your order has been confirmed and will be shipped soon to your address.</p>\n              \n              <div style=\"background: #f0f0f0; padding: 15px; border-radius: 4px; margin: 20px 0;\">\n                <strong style=\"color: #D87D4A;\">Order ID:</strong> ").concat(body.orderId, "\n              </div>\n              \n              <h3 style=\"margin-top: 30px;\">Order Items:</h3>\n              <div style=\"border: 1px solid #ddd; border-radius: 4px; padding: 10px;\">\n                ").concat(order.items.map(function (item) { return "\n                  <div class=\"order-item\">\n                    <div>\n                      <strong>".concat(item.name, "</strong><br>\n                      <span style=\"color: #666;\">Quantity: ").concat(item.quantity, "</span>\n                    </div>\n                    <strong style=\"color: #D87D4A;\">$").concat((item.price * item.quantity).toLocaleString(), "</strong>\n                  </div>\n                "); }).join(''), "\n              </div>\n              \n              <h3 style=\"margin-top: 30px;\">Shipping Address:</h3>\n              <div style=\"background: #f9f9f9; padding: 15px; border-radius: 4px;\">\n                <p style=\"margin: 5px 0;\"><strong>").concat(order.customerName, "</strong></p>\n                <p style=\"margin: 5px 0;\">").concat(order.shippingAddress, "</p>\n                <p style=\"margin: 5px 0;\">").concat(order.shippingCity, ", ").concat(order.shippingZip, "</p>\n                <p style=\"margin: 5px 0;\">").concat(order.shippingCountry, "</p>\n                <p style=\"margin: 5px 0; margin-top: 10px;\">Phone: ").concat(order.customerPhone, "</p>\n              </div>\n              \n              <h3 style=\"margin-top: 30px;\">Order Summary:</h3>\n              <div class=\"order-summary\">\n                <p><span>Subtotal:</span> <strong>$").concat(order.subtotal.toLocaleString(), "</strong></p>\n                <p><span>Shipping:</span> <strong>$").concat(order.shipping.toLocaleString(), "</strong></p>\n                <p><span>VAT (included):</span> <strong>$").concat(order.vat.toLocaleString(), "</strong></p>\n                <p class=\"total\"><span>Grand Total:</span> <strong>$").concat(order.grandTotal.toLocaleString(), "</strong></p>\n              </div>\n              \n              <p style=\"margin-top: 30px;\">If you have any questions about your order, please don't hesitate to contact our support team.</p>\n              \n              <div style=\"text-align: center;\">\n                <a href=\"mailto:support@audiophile.com\" class=\"button\">CONTACT SUPPORT</a>\n              </div>\n            </div>\n            <div class=\"footer\">\n              <p>This is an automated email from Audiophile. Please do not reply to this email.</p>\n              <p>&copy; ").concat(new Date().getFullYear(), " Audiophile. All rights reserved.</p>\n            </div>\n          </div>\n        </body>\n      </html>\n    ");
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 8, , 9]);
                    resendApiKey = process.env.RESEND_API_KEY;
                    if (!resendApiKey) {
                        console.error("RESEND_API_KEY not configured");
                        return [2 /*return*/, new Response(JSON.stringify({ error: "Email service not configured" }), {
                                status: 500,
                                headers: Object.assign({ "Content-Type": "application/json" }, corsHeaders)
                            })];
                    }
                    return [4 /*yield*/, fetch("https://api.resend.com/emails", {
                            method: "POST",
                            headers: {
                                "Authorization": "Bearer ".concat(resendApiKey),
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                from: "Audiophile <onboarding@resend.dev>",
                                to: [order.customerEmail],
                                subject: "Order Confirmation - ".concat(body.orderId),
                                html: emailHtml,
                            }),
                        })];
                case 4:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 6];
                    return [4 /*yield*/, response.text()];
                case 5:
                    errorData = _a.sent();
                    console.error("Resend API error:", errorData);
                    throw new Error("Resend API error: ".concat(response.status));
                case 6: return [4 /*yield*/, response.json()];
                case 7:
                    data = _a.sent();
                    console.log("Email sent successfully:", data);
                    return [2 /*return*/, new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
                            status: 200,
                            headers: Object.assign({ "Content-Type": "application/json" }, corsHeaders)
                        })];
                case 8:
                    error_1 = _a.sent();
                    console.error("Email sending failed:", error_1);
                    return [2 /*return*/, new Response(JSON.stringify({
                            error: "Email sending failed",
                            details: error_1 instanceof Error ? error_1.message : "Unknown error"
                        }), {
                            status: 500,
                            headers: Object.assign({ "Content-Type": "application/json" }, corsHeaders)
                        })];
                case 9: return [2 /*return*/];
            }
        });
    }); }),
});
export default http;
