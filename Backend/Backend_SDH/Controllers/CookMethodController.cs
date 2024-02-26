using Backend_SDH.Dtos.CookMethodDtos;
using Backend_SDH.Helpers;
using Backend_SDH.Models;
using Backend_SDH.Services.Interfaces;
using Backend_SDH.Validators;
using Microsoft.AspNetCore.Mvc;

namespace Backend_SDH.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CookMethodController : ControllerBase
    {
        private readonly ICookMethodService _cookMethodService;
        private readonly CookMethodValidator _cookMethodValidator;

        public CookMethodController(ICookMethodService cookMethodService)
        {
            _cookMethodService = cookMethodService;
            _cookMethodValidator = new CookMethodValidator(_cookMethodService);
        }

        [HttpGet]
        public async Task<ActionResult<ServiceResponse<List<CookMethodDto>>>> GetCookMethods()
        {
            return Ok(await _cookMethodService.GetCookMethods());
        }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<CookMethodDto>>> AddCookMethod(CookMethodDto newCookMethod)
        {
            var validation = _cookMethodValidator.Validate(newCookMethod);

            if(!validation.IsValid)
            {
                var response = new ServiceResponse<CookMethodDto>
                {
                    Success = false,
                    Errors = ValidationHelper.GetErrorsList(validation.Errors)
                };

                return BadRequest(response);
            }

            return Ok(await _cookMethodService.AddCookMethod(newCookMethod));
        }

        [HttpPut]
        public async Task<ActionResult<ServiceResponse<CookMethodDto>>> EditCookMethod(int id, [FromBody]CookMethodDto updatedCookMethod)
        {
            ServiceResponse<CookMethodDto> response;

            if (id != updatedCookMethod.Id)
            {
                return BadRequest();
            }

            var validation = _cookMethodValidator.Validate(updatedCookMethod);

            if (!validation.IsValid)
            {
                response = new ServiceResponse<CookMethodDto>
                {
                    Success = false,
                    Errors = ValidationHelper.GetErrorsList(validation.Errors)
                };

                return BadRequest(response);
            }

            response = await _cookMethodService.EditCookMethod(id, updatedCookMethod);

            if (response.Data is null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }

        [HttpDelete]
        public async Task<ActionResult<ServiceResponse<CookMethodDto>>> DeleteCookMethod(int id)
        {
            var response = await _cookMethodService.DeleteCookMethod(id);
            if(response.Data is null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }

    }
}
