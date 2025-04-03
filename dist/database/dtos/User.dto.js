"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class UserDto {
}
exports.UserDto = UserDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UserDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La matrícula no puede estar vacía' }),
    (0, class_validator_1.Length)(10, 10, { message: 'La matrícula debe tener 10 caracteres' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDto.prototype, "matricula", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre no puede estar vacío' }),
    (0, class_validator_1.Length)(2, 50, { message: 'El nombre debe tener entre 2 y 50 caracteres' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El apellido no puede estar vacío' }),
    (0, class_validator_1.Length)(2, 50, { message: 'El apellido debe tener entre 2 y 50 caracteres' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDto.prototype, "apellido", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Debe ser un email válido' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La contraseña no puede estar vacía' }),
    (0, class_validator_1.Length)(6, 16, { message: 'La contraseña debe tener entre 6 y 16 caracteres' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Debe ser una fecha válida (formato: YYYY-MM-DD)' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDto.prototype, "fecha_inicio", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)({}, { message: 'Debe ser una fecha válida (formato: YYYY-MM-DD)' }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserDto.prototype, "fecha_actualizacion", void 0);
