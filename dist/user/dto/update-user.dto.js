"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const sign_up_user_dto_1 = require("../../auth/dto/sign-up-user.dto");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(sign_up_user_dto_1.SignUpUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map