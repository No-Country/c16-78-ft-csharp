using FluentValidation.Results;

namespace Backend_SDH.Helpers
{
    public static class ValidationHelper
    {
        public static List<string> GetErrorsList(List<ValidationFailure> errors)
        {
            var errorsList = new List<string>();
            foreach (var error in errors)
            {
                errorsList.Add(error.ErrorMessage);
            }

            return errorsList;
        }
    }
}
