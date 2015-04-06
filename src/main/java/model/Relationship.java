package model;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import java.io.Serializable;

@Entity
@Table(name = "Relationships")
public class Relationship implements Serializable {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "attrfirst")
    private String attrfirst;

    @Column(name = "type")
    private String type;

    public Relationship() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getattrfirst() {
        return attrfirst;
    }

    public void setattrfirst(String attrfirst) {
        this.attrfirst = attrfirst;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}
