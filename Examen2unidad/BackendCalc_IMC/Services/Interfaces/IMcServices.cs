using BackendCalc_IMC.Dtos;
using BackendCalc_IMC.Dtos.Imc;

namespace BackendCalc_IMC.Services.Interfaces
{
    public interface IMcServices
    {
        Task<ResponseDto<ImcDto>> CreateAsync(ImcCreateDto model);
    }
}