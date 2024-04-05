using BackendCalc_IMC.Dtos;
using BackendCalc_IMC.Dtos.Imc;
using BackendCalc_IMC.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackendCalc_IMC.Controllers
{
    [Route("api/imc")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly IMcServices mcServices;

        public TaskController(IMcServices mcServices) 
        {
            this.mcServices = mcServices;
        }

        [HttpPost]

        public async Task<ActionResult<ResponseDto<ImcDto>>> create([FromBody] ImcCreateDto model)
        {
            var taskResponse = await mcServices.CreateAsync(model);

            return StatusCode(taskResponse.StatusCode, taskResponse);
        }

    }
}
