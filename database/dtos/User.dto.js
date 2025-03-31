const { Exclude, Expose, plainToInstance } = require('class-transformer');
class Userdto {
    constructor(partial) {
      Object.assign(this, partial);
    }
  }
  
  // Exponer propiedades manualmente
  Expose()(Userdto.prototype, 'id');
  Expose()(Userdto.prototype, 'name');
  Expose()(Userdto.prototype, 'email');
  Expose()(Userdto.prototype, 'fecha_inicio');
  Expose()(Userdto.prototype, 'fecha_actualizacion');
  
  // Excluir la propiedad `password`
  Exclude()(Userdto.prototype, 'password');
  
  // Función para transformar objetos a DTO
  const transformToDto = (data) => {
    return plainToInstance(Userdto, data, { excludeExtraneousValues: true });
  };
  module.exports ={
  Userdto 
  };