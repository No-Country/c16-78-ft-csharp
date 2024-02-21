using Backend_SDH.Dtos;
using Backend_SDH.Services.Interfaces;
using FluentValidation;

namespace Backend_SDH.Validators
{
    public class CookMethodValidator : AbstractValidator<CookMethodDto>
    {
        public CookMethodValidator(ICookMethodService cookMethodService)
        {
            RuleFor(c => c.Name).NotEmpty().MaximumLength(255);
        }
    }
}
