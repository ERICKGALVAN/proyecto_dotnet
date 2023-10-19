using System.ComponentModel.DataAnnotations;

namespace Api.Dto;

public class LoginDto
{
    [Required]
    public string Username { get; set; }

    public string Password { get; set; }
}