using AutoMapper;
using BackendCalc_IMC.Database;
using BackendCalc_IMC.Dtos;
using BackendCalc_IMC.Dtos.Imc;
using BackendCalc_IMC.Entities;

namespace BackendCalc_IMC.Services.Interfaces
{
    public class McServices : IMcServices 
    {
        private readonly TodoListDbContext context;
        private readonly IMapper mapper;

        public McServices(TodoListDbContext context, IMapper mapper  ) 
        {
            this.context = context;
            this.mapper = mapper;
        }

        public async Task<ResponseDto<ImcDto>> CreateAsync(ImcCreateDto model)
        {
            var taskEntity = mapper.Map<ImcEntity>(model);

            context.Tasks.Add(taskEntity);
            await context.SaveChangesAsync();

            var tasDto = mapper.Map<ImcDto>(taskEntity);

            return new ResponseDto<ImcDto>
            {
                Status = true,
                StatusCode = 201,
                Message = "Paciente agregado Correctamente",
                Data = tasDto
            };
        }
    }
}
