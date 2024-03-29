
namespace Api.Entities;

public class Photo
{
    public int Id { get; set; }
    public string Url { get; set; }
    public bool IsMain { get; set; } = false;
    public string PublicId { get; set; }

    public AppUser AppUser { get; set; }

    public int AppUserId { get; set; }

}
